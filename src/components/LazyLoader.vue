<template>
  <div class="lazy-loader">
    <ErrorBoundary @retry="loadComponent">
      <Suspense>
        <template #default>
          <component :is="loadedComponent" v-bind="$attrs" />
        </template>
        <template #fallback>
          <LoadingSpinner 
            :message="loadingMessage" 
            :size="loadingSize"
            :class="loadingClass"
          />
        </template>
      </Suspense>
    </ErrorBoundary>
  </div>
</template>

<script>
import { ref, defineAsyncComponent } from 'vue';
import LoadingSpinner from './LoadingSpinner.vue';
import ErrorBoundary from './ErrorBoundary.vue';

export default {
  name: 'LazyLoader',
  components: {
    LoadingSpinner,
    ErrorBoundary
  },
  props: {
    componentLoader: {
      type: Function,
      required: true
    },
    loadingMessage: {
      type: String,
      default: 'Loading...'
    },
    loadingSize: {
      type: String,
      default: 'medium'
    },
    loadingClass: {
      type: String,
      default: ''
    },
    delay: {
      type: Number,
      default: 200
    },
    timeout: {
      type: Number,
      default: 30000
    }
  },
  setup(props) {
    const loadedComponent = ref(null);

    const loadComponent = () => {
      loadedComponent.value = defineAsyncComponent({
        loader: props.componentLoader,
        delay: props.delay,
        timeout: props.timeout,
        errorComponent: () => import('./ErrorBoundary.vue'),
        loadingComponent: LoadingSpinner
      });
    };

    loadComponent();

    return {
      loadedComponent,
      loadComponent
    };
  }
};
</script>

<style scoped>
.lazy-loader {
  width: 100%;
}
</style>