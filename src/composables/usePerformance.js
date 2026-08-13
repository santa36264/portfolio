import { ref, onMounted } from 'vue';

export function usePerformance() {
  const metrics = ref({
    fcp: null, // First Contentful Paint
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    ttfb: null // Time to First Byte
  });

  const connectionInfo = ref({
    effectiveType: 'unknown',
    downlink: 0,
    rtt: 0
  });

  const isSlowConnection = ref(false);

  // Measure Core Web Vitals
  const measureWebVitals = () => {
    // First Contentful Paint
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          metrics.value.fcp = Math.round(entry.startTime);
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      metrics.value.lcp = Math.round(lastEntry.startTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        metrics.value.fid = Math.round(entry.processingStart - entry.startTime);
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metrics.value.cls = Math.round(clsValue * 1000) / 1000;
        }
      }
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });

    // Time to First Byte
    const navEntries = performance.getEntriesByType('navigation');
    if (navEntries.length > 0) {
      metrics.value.ttfb = Math.round(navEntries[0].responseStart);
    }
  };

  // Monitor connection quality
  const updateConnectionInfo = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      connectionInfo.value = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt
      };
      
      // Consider connection slow if it's 2G or slow 3G
      isSlowConnection.value = ['slow-2g', '2g'].includes(connection.effectiveType);
    }
  };

  // Memory usage monitoring
  const getMemoryUsage = () => {
    if ('memory' in performance) {
      return {
        usedJSHeapSize: performance.memory.usedJSHeapSize,
        totalJSHeapSize: performance.memory.totalJSHeapSize,
        jsHeapSizeLimit: performance.memory.jsHeapSizeLimit,
        usagePercentage: Math.round((performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100)
      };
    }
    return null;
  };

  // Resource timing analysis
  const analyzeResourceTiming = () => {
    const resources = performance.getEntriesByType('resource');
    const analysis = {
      totalResources: resources.length,
      slowResources: [],
      totalSize: 0,
      resourcesByType: {}
    };

    resources.forEach(resource => {
      const duration = resource.responseEnd - resource.startTime;
      
      // Flag slow resources (>1s)
      if (duration > 1000) {
        analysis.slowResources.push({
          name: resource.name,
          duration: Math.round(duration),
          size: resource.transferSize || 0
        });
      }

      // Group by resource type
      const type = getResourceType(resource.name);
      if (!analysis.resourcesByType[type]) {
        analysis.resourcesByType[type] = { count: 0, totalSize: 0 };
      }
      analysis.resourcesByType[type].count++;
      analysis.resourcesByType[type].totalSize += resource.transferSize || 0;
      
      analysis.totalSize += resource.transferSize || 0;
    });

    return analysis;
  };

  const getResourceType = (url) => {
    if (url.match(/\.(css)$/)) return 'css';
    if (url.match(/\.(js)$/)) return 'js';
    if (url.match(/\.(jpg|jpeg|png|gif|webp|svg)$/)) return 'image';
    if (url.match(/\.(woff|woff2|ttf|eot)$/)) return 'font';
    return 'other';
  };

  // Performance recommendations
  const getPerformanceRecommendations = () => {
    const recommendations = [];
    const resourceAnalysis = analyzeResourceTiming();

    if (metrics.value.fcp && metrics.value.fcp > 2500) {
      recommendations.push('Consider optimizing above-the-fold content for faster First Contentful Paint');
    }

    if (metrics.value.lcp && metrics.value.lcp > 2500) {
      recommendations.push('Optimize images and critical resources for better Largest Contentful Paint');
    }

    if (metrics.value.fid && metrics.value.fid > 100) {
      recommendations.push('Reduce JavaScript execution time to improve First Input Delay');
    }

    if (metrics.value.cls && metrics.value.cls > 0.1) {
      recommendations.push('Add size attributes to images and reserve space for dynamic content');
    }

    if (resourceAnalysis.slowResources.length > 0) {
      recommendations.push(`${resourceAnalysis.slowResources.length} resources are loading slowly`);
    }

    return recommendations;
  };

  // Prefetch critical resources
  const prefetchResource = (href, as = 'fetch') => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  };

  const preloadResource = (href, as = 'fetch') => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  };

  // Image optimization suggestions
  const shouldUseWebP = () => {
    const canvas = document.createElement('canvas');
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  };

  const shouldLazyLoad = () => {
    return 'IntersectionObserver' in window;
  };

  onMounted(() => {
    // Wait for page to be interactive
    if (document.readyState === 'complete') {
      measureWebVitals();
      updateConnectionInfo();
    } else {
      window.addEventListener('load', () => {
        measureWebVitals();
        updateConnectionInfo();
      });
    }

    // Listen for connection changes
    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', updateConnectionInfo);
    }
  });

  return {
    metrics,
    connectionInfo,
    isSlowConnection,
    getMemoryUsage,
    analyzeResourceTiming,
    getPerformanceRecommendations,
    prefetchResource,
    preloadResource,
    shouldUseWebP,
    shouldLazyLoad
  };
}