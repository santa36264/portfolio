<template>
  <Teleport to="body">
    <Transition name="loading-fade">
      <div v-if="isLoading" class="global-loading-overlay">
        <div class="loading-content">
          <LoadingSpinner size="large" :message="message" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { useGlobalLoading } from '../composables/useLoading.js';
import LoadingSpinner from './LoadingSpinner.vue';

export default {
  name: 'GlobalLoading',
  components: {
    LoadingSpinner
  },
  setup() {
    const { isLoading, message } = useGlobalLoading();

    return {
      isLoading,
      message
    };
  }
};
</script>

<style scoped>
.global-loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dark .global-loading-overlay {
  background: rgba(0, 0, 0, 0.95);
}

.loading-content {
  background: white;
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(0, 0, 0, 0.1);
}

.dark .loading-content {
  background: #1f2937;
  border-color: rgba(255, 255, 255, 0.1);
}

.loading-fade-enter-active,
.loading-fade-leave-active {
  transition: all 0.3s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

.loading-fade-enter-to,
.loading-fade-leave-from {
  opacity: 1;
}
</style>