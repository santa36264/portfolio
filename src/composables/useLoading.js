import { ref, reactive, readonly, toRefs } from 'vue';

const globalLoadingState = reactive({
  isLoading: false,
  message: '',
  tasks: new Set()
});

export function useLoading() {
  const isLoading = ref(false);
  const message = ref('');
  const error = ref(null);

  const startLoading = (loadingMessage = 'Loading...') => {
    isLoading.value = true;
    message.value = loadingMessage;
    error.value = null;
  };

  const stopLoading = () => {
    isLoading.value = false;
    message.value = '';
  };

  const setError = (errorMessage) => {
    error.value = errorMessage;
    isLoading.value = false;
    message.value = '';
  };

  const executeWithLoading = async (asyncFn, loadingMessage = 'Loading...') => {
    try {
      startLoading(loadingMessage);
      const result = await asyncFn();
      return result;
    } catch (err) {
      setError(err.message || 'An error occurred');
      throw err;
    } finally {
      stopLoading();
    }
  };

  return {
    isLoading: readonly(isLoading),
    message: readonly(message),
    error: readonly(error),
    startLoading,
    stopLoading,
    setError,
    executeWithLoading
  };
}

export function useGlobalLoading() {
  const startTask = (taskId, message = 'Loading...') => {
    globalLoadingState.tasks.add(taskId);
    globalLoadingState.message = message;
    globalLoadingState.isLoading = globalLoadingState.tasks.size > 0;
  };

  const completeTask = (taskId) => {
    globalLoadingState.tasks.delete(taskId);
    globalLoadingState.isLoading = globalLoadingState.tasks.size > 0;
    if (!globalLoadingState.isLoading) {
      globalLoadingState.message = '';
    }
  };

  const clearAllTasks = () => {
    globalLoadingState.tasks.clear();
    globalLoadingState.isLoading = false;
    globalLoadingState.message = '';
  };

  return {
    ...toRefs(globalLoadingState),
    startTask,
    completeTask,
    clearAllTasks
  };
}

// Auto-retry functionality
export function useRetry() {
  const retryCount = ref(0);
  const maxRetries = ref(3);
  const retryDelay = ref(1000);

  const executeWithRetry = async (asyncFn, options = {}) => {
    const { 
      maxAttempts = maxRetries.value, 
      delay = retryDelay.value,
      onRetry = null,
      shouldRetry = (error) => true
    } = options;

    retryCount.value = 0;

    while (retryCount.value < maxAttempts) {
      try {
        const result = await asyncFn();
        retryCount.value = 0;
        return result;
      } catch (error) {
        retryCount.value++;
        
        if (retryCount.value >= maxAttempts || !shouldRetry(error)) {
          throw error;
        }

        if (onRetry) {
          onRetry(retryCount.value, error);
        }

        await new Promise(resolve => setTimeout(resolve, delay * retryCount.value));
      }
    }
  };

  return {
    retryCount: readonly(retryCount),
    maxRetries,
    retryDelay,
    executeWithRetry
  };
}