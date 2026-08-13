<template>
  <div class="optimized-image-container" :class="containerClass">
    <!-- Loading Skeleton -->
    <div 
      v-if="isLoading" 
      class="image-skeleton"
      :style="{ aspectRatio: aspectRatio }"
      :aria-label="`Loading image: ${alt}`"
    >
      <div class="skeleton-shimmer"></div>
    </div>
    
    <!-- Error State -->
    <div 
      v-else-if="hasError" 
      class="image-error"
      :style="{ aspectRatio: aspectRatio }"
      :aria-label="`Failed to load image: ${alt}`"
    >
      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
      <span class="text-xs text-gray-500 mt-2">Image not available</span>
    </div>
    
    <!-- Optimized Image -->
    <img
      v-else
      ref="imageRef"
      :src="currentSrc"
      :alt="alt"
      :class="imageClass"
      :style="{ aspectRatio: aspectRatio }"
      :loading="eager ? 'eager' : 'lazy'"
      :decoding="eager ? 'sync' : 'async'"
      @load="onLoad"
      @error="onError"
      @loadstart="onLoadStart"
    />
  </div>
</template>

<script>
import { ref, computed, onMounted, watch } from 'vue';

export default {
  name: 'OptimizedImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: null
    },
    height: {
      type: [Number, String],
      default: null
    },
    aspectRatio: {
      type: String,
      default: 'auto'
    },
    eager: {
      type: Boolean,
      default: false
    },
    fallback: {
      type: String,
      default: '/placeholder.svg'
    },
    containerClass: {
      type: String,
      default: ''
    },
    imageClass: {
      type: String,
      default: 'w-full h-full object-cover'
    },
    sizes: {
      type: String,
      default: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
    }
  },
  emits: ['load', 'error'],
  setup(props, { emit }) {
    const imageRef = ref(null);
    const isLoading = ref(true);
    const hasError = ref(false);
    const currentSrc = ref('');

    // Generate responsive image sources
    const generateResponsiveSrc = (src, width) => {
      // In a real app, you might use a service like Cloudinary or ImageKit
      // For demo purposes, we'll just return the original src
      return src;
    };

    const optimizedSrc = computed(() => {
      if (!props.src) return '';
      
      // If it's already an external URL or data URL, return as-is
      if (props.src.startsWith('http') || props.src.startsWith('data:')) {
        return props.src;
      }
      
      // Generate optimized version based on container width
      return generateResponsiveSrc(props.src, props.width);
    });

    const onLoadStart = () => {
      isLoading.value = true;
      hasError.value = false;
    };

    const onLoad = (event) => {
      isLoading.value = false;
      hasError.value = false;
      emit('load', event);
    };

    const onError = (event) => {
      isLoading.value = false;
      hasError.value = true;
      
      // Try fallback image if available and not already using it
      if (props.fallback && currentSrc.value !== props.fallback) {
        currentSrc.value = props.fallback;
        return;
      }
      
      emit('error', event);
    };

    // Initialize image source
    onMounted(() => {
      currentSrc.value = optimizedSrc.value;
    });

    // Watch for src changes
    watch(() => props.src, () => {
      isLoading.value = true;
      hasError.value = false;
      currentSrc.value = optimizedSrc.value;
    });

    return {
      imageRef,
      isLoading,
      hasError,
      currentSrc,
      onLoad,
      onError,
      onLoadStart
    };
  }
};
</script>

<style scoped>
.optimized-image-container {
  position: relative;
  overflow: hidden;
}

.image-skeleton {
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.dark .image-skeleton {
  background: #374151;
}

.skeleton-shimmer {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 2s infinite;
}

.dark .skeleton-shimmer {
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
}

.image-error {
  background: #f9fafb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #d1d5db;
}

.dark .image-error {
  background: #1f2937;
  border-color: #374151;
}

@keyframes shimmer {
  0% {
    left: -100%;
  }
  100% {
    left: 100%;
  }
}
</style>