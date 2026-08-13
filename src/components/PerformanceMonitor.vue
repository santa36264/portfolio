<template>
  <div v-if="showMonitor" class="performance-monitor" :class="{ 'minimized': isMinimized }">
    <!-- Toggle Button -->
    <button 
      @click="toggleMonitor" 
      class="monitor-toggle"
      :aria-label="isMinimized ? 'Expand performance monitor' : 'Minimize performance monitor'"
    >
      <svg v-if="isMinimized" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 3v10a2 2 0 002 2h6a2 2 0 002-2V7M9 7h6M9 11h6m-6 4h6"></path>
      </svg>
      <svg v-else class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
      </svg>
    </button>

    <!-- Performance Panel -->
    <div v-if="!isMinimized" class="monitor-content">
      <h3 class="monitor-title">Performance Metrics</h3>
      
      <!-- Core Web Vitals -->
      <div class="metrics-grid">
        <div class="metric-card" :class="getMetricClass('fcp', metrics.fcp)">
          <span class="metric-label">FCP</span>
          <span class="metric-value">{{ formatMetric(metrics.fcp) }}</span>
        </div>
        <div class="metric-card" :class="getMetricClass('lcp', metrics.lcp)">
          <span class="metric-label">LCP</span>
          <span class="metric-value">{{ formatMetric(metrics.lcp) }}</span>
        </div>
        <div class="metric-card" :class="getMetricClass('fid', metrics.fid)">
          <span class="metric-label">FID</span>
          <span class="metric-value">{{ formatMetric(metrics.fid) }}</span>
        </div>
        <div class="metric-card" :class="getMetricClass('cls', metrics.cls)">
          <span class="metric-label">CLS</span>
          <span class="metric-value">{{ formatCLS(metrics.cls) }}</span>
        </div>
      </div>

      <!-- Connection Info -->
      <div v-if="connectionInfo.effectiveType !== 'unknown'" class="connection-info">
        <span class="connection-type" :class="{ 'slow': isSlowConnection }">
          {{ connectionInfo.effectiveType.toUpperCase() }}
        </span>
        <span class="connection-speed">{{ connectionInfo.downlink }}Mbps</span>
      </div>

      <!-- Performance Score -->
      <div class="performance-score">
        <div class="score-circle" :style="{ background: `conic-gradient(${getScoreColor(overallScore)} 0deg ${overallScore * 3.6}deg, #e5e7eb ${overallScore * 3.6}deg)` }">
          <span class="score-text">{{ overallScore }}</span>
        </div>
        <span class="score-label">Performance Score</span>
      </div>

      <!-- Recommendations -->
      <div v-if="recommendations.length > 0" class="recommendations">
        <h4 class="recommendations-title">Suggestions</h4>
        <ul class="recommendations-list">
          <li v-for="(rec, index) in recommendations.slice(0, 3)" :key="index" class="recommendation-item">
            {{ rec }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { usePerformance } from '../composables/usePerformance.js';

export default {
  name: 'PerformanceMonitor',
  setup() {
    const showMonitor = ref(false);
    const isMinimized = ref(false);
    
    const { 
      metrics, 
      connectionInfo, 
      isSlowConnection, 
      getPerformanceRecommendations 
    } = usePerformance();

    // Only show in development
    onMounted(() => {
      showMonitor.value = import.meta.env.DEV || localStorage.getItem('showPerformanceMonitor') === 'true';
    });

    const toggleMonitor = () => {
      isMinimized.value = !isMinimized.value;
    };

    const formatMetric = (value) => {
      if (value === null || value === undefined) return '—';
      return value < 1000 ? `${value}ms` : `${(value / 1000).toFixed(1)}s`;
    };

    const formatCLS = (value) => {
      if (value === null || value === undefined) return '—';
      return value.toFixed(3);
    };

    const getMetricClass = (type, value) => {
      if (value === null || value === undefined) return 'unknown';
      
      const thresholds = {
        fcp: { good: 1800, poor: 3000 },
        lcp: { good: 2500, poor: 4000 },
        fid: { good: 100, poor: 300 },
        cls: { good: 0.1, poor: 0.25 }
      };

      const threshold = thresholds[type];
      if (value <= threshold.good) return 'good';
      if (value <= threshold.poor) return 'needs-improvement';
      return 'poor';
    };

    const overallScore = computed(() => {
      const scores = [];
      
      if (metrics.value.fcp) {
        scores.push(metrics.value.fcp <= 1800 ? 100 : metrics.value.fcp <= 3000 ? 75 : 50);
      }
      if (metrics.value.lcp) {
        scores.push(metrics.value.lcp <= 2500 ? 100 : metrics.value.lcp <= 4000 ? 75 : 50);
      }
      if (metrics.value.fid) {
        scores.push(metrics.value.fid <= 100 ? 100 : metrics.value.fid <= 300 ? 75 : 50);
      }
      if (metrics.value.cls) {
        scores.push(metrics.value.cls <= 0.1 ? 100 : metrics.value.cls <= 0.25 ? 75 : 50);
      }

      return scores.length > 0 ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) : 0;
    });

    const getScoreColor = (score) => {
      if (score >= 90) return '#0cce6b';
      if (score >= 70) return '#ffa400';
      return '#ff4e42';
    };

    const recommendations = computed(() => {
      return getPerformanceRecommendations();
    });

    return {
      showMonitor,
      isMinimized,
      metrics,
      connectionInfo,
      isSlowConnection,
      recommendations,
      overallScore,
      toggleMonitor,
      formatMetric,
      formatCLS,
      getMetricClass,
      getScoreColor
    };
  }
};
</script>

<style scoped>
.performance-monitor {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 9998;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  font-family: 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace;
  font-size: 12px;
}

.dark .performance-monitor {
  background: #1f2937;
  border-color: #374151;
  color: white;
}

.performance-monitor.minimized {
  width: 48px;
  height: 48px;
}

.monitor-toggle {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 32px;
  height: 32px;
  border: none;
  background: #f3f4f6;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 1;
}

.dark .monitor-toggle {
  background: #374151;
  color: white;
}

.monitor-content {
  padding: 16px;
  padding-top: 48px;
}

.monitor-title {
  font-weight: 600;
  margin-bottom: 12px;
  font-size: 14px;
}

.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 12px;
}

.metric-card {
  padding: 8px;
  border-radius: 6px;
  text-align: center;
  border: 1px solid transparent;
}

.metric-card.good {
  background: #ecfdf5;
  border-color: #10b981;
  color: #065f46;
}

.metric-card.needs-improvement {
  background: #fffbeb;
  border-color: #f59e0b;
  color: #92400e;
}

.metric-card.poor {
  background: #fef2f2;
  border-color: #ef4444;
  color: #991b1b;
}

.metric-card.unknown {
  background: #f9fafb;
  border-color: #d1d5db;
  color: #6b7280;
}

.dark .metric-card.good {
  background: #064e3b;
  color: #6ee7b7;
}

.dark .metric-card.needs-improvement {
  background: #78350f;
  color: #fcd34d;
}

.dark .metric-card.poor {
  background: #7f1d1d;
  color: #fca5a5;
}

.dark .metric-card.unknown {
  background: #374151;
  color: #9ca3af;
}

.metric-label {
  display: block;
  font-weight: 600;
  font-size: 10px;
  margin-bottom: 2px;
}

.metric-value {
  display: block;
  font-weight: 700;
  font-size: 14px;
}

.connection-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding: 6px 8px;
  background: #f9fafb;
  border-radius: 6px;
  font-size: 11px;
}

.dark .connection-info {
  background: #374151;
}

.connection-type.slow {
  color: #dc2626;
}

.dark .connection-type.slow {
  color: #fca5a5;
}

.performance-score {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
}

.score-circle {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 4px;
}

.score-circle::before {
  content: '';
  position: absolute;
  inset: 4px;
  background: white;
  border-radius: 50%;
}

.dark .score-circle::before {
  background: #1f2937;
}

.score-text {
  position: relative;
  font-weight: 700;
  font-size: 16px;
  z-index: 1;
}

.score-label {
  font-size: 10px;
  color: #6b7280;
}

.dark .score-label {
  color: #9ca3af;
}

.recommendations-title {
  font-weight: 600;
  margin-bottom: 6px;
  font-size: 11px;
}

.recommendations-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.recommendation-item {
  padding: 4px 0;
  font-size: 10px;
  color: #6b7280;
  border-bottom: 1px solid #f3f4f6;
}

.recommendation-item:last-child {
  border-bottom: none;
}

.dark .recommendation-item {
  color: #9ca3af;
  border-color: #374151;
}
</style>