<template>
  <div class="loading-spinner" :class="{ 'fullscreen': fullscreen }">
    <div class="spinner" :class="sizeClass">
      <div class="bounce1"></div>
      <div class="bounce2"></div>
      <div class="bounce3"></div>
    </div>
    <p v-if="message" class="loading-message" :class="sizeClass">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner',
  props: {
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    message: {
      type: String,
      default: ''
    },
    fullscreen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    sizeClass() {
      return `spinner-${this.size}`;
    }
  }
};
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-spinner.fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(4px);
  z-index: 9999;
}

.dark .loading-spinner.fullscreen {
  background: rgba(0, 0, 0, 0.9);
}

.spinner {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spinner > div {
  background-color: #3b82f6;
  border-radius: 100%;
  display: inline-block;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.spinner-small > div {
  width: 8px;
  height: 8px;
  margin: 0 2px;
}

.spinner-medium > div {
  width: 12px;
  height: 12px;
  margin: 0 3px;
}

.spinner-large > div {
  width: 18px;
  height: 18px;
  margin: 0 4px;
}

.spinner .bounce1 {
  animation-delay: -0.32s;
}

.spinner .bounce2 {
  animation-delay: -0.16s;
}

.loading-message {
  margin-top: 1rem;
  color: #6b7280;
  font-weight: 500;
}

.dark .loading-message {
  color: #9ca3af;
}

.loading-message.spinner-small {
  font-size: 0.875rem;
}

.loading-message.spinner-medium {
  font-size: 1rem;
}

.loading-message.spinner-large {
  font-size: 1.125rem;
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
}
</style>