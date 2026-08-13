<template>
  <div v-if="hasError" class="error-boundary">
    <div class="error-content">
      <div class="error-icon">
        <svg class="w-16 h-16 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" 
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z">
          </path>
        </svg>
      </div>
      
      <h2 class="error-title">Something went wrong</h2>
      
      <p class="error-message">{{ errorMessage }}</p>
      
      <div class="error-actions">
        <button @click="retry" class="btn-primary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15">
            </path>
          </svg>
          Try Again
        </button>
        
        <button @click="goHome" class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
            </path>
          </svg>
          Go Home
        </button>
      </div>
      
      <details v-if="showDetails" class="error-details">
        <summary class="cursor-pointer text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
          Technical Details
        </summary>
        <pre class="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded text-xs overflow-auto">{{ errorDetails }}</pre>
      </details>
    </div>
  </div>
  
  <slot v-else></slot>
</template>

<script>
export default {
  name: 'ErrorBoundary',
  props: {
    showDetails: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasError: false,
      errorMessage: '',
      errorDetails: ''
    };
  },
  errorCaptured(err, instance, info) {
    this.hasError = true;
    this.errorMessage = err.message || 'An unexpected error occurred';
    this.errorDetails = `${err.stack}\n\nComponent: ${instance?.$options.name || 'Unknown'}\nInfo: ${info}`;
    
    // Log error for debugging
    console.error('ErrorBoundary caught an error:', err);
    console.error('Component info:', info);
    
    return false;
  },
  methods: {
    retry() {
      this.hasError = false;
      this.errorMessage = '';
      this.errorDetails = '';
      this.$emit('retry');
    },
    goHome() {
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.error-boundary {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.error-content {
  max-width: 500px;
  text-align: center;
  background: white;
  dark:bg-gray-800;
  padding: 3rem 2rem;
  rounded: 1rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.dark .error-content {
  background: #1f2937;
}

.error-icon {
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.error-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;
}

.dark .error-title {
  color: #f9fafb;
}

.error-message {
  color: #6b7280;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.dark .error-message {
  color: #9ca3af;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.error-details {
  text-align: left;
  margin-top: 2rem;
}

.error-details pre {
  white-space: pre-wrap;
  word-break: break-word;
  max-height: 200px;
}
</style>