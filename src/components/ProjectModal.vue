<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="isVisible"
        class="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        @click.self="$emit('close')"
      >
        <div class="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-700">
          <!-- Header -->
          <div class="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 p-6 flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <span class="px-3 py-1 text-sm font-semibold bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
                  {{ project.category }}
                </span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.duration }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">•</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.role }}</span>
              </div>
              <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {{ project.title }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400">
                {{ project.fullDescription }}
              </p>
            </div>
            <button
              @click="$emit('close')"
              class="ml-4 p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="p-6 space-y-8">
            <!-- Project Image -->
            <div v-if="project.image" class="rounded-xl overflow-hidden shadow-lg">
              <img 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-64 object-cover"
              />
            </div>

            <!-- Tech Stack -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technology Stack</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="px-3 py-1 text-sm font-medium bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Key Features -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Features</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="flex items-center gap-3"
                >
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Challenges & Solutions -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <!-- Challenges -->
              <div class="bg-red-50 dark:bg-red-900/20 rounded-xl p-6">
                <div class="flex items-center gap-2 mb-4">
                  <svg class="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  <h3 class="text-lg font-semibold text-red-800 dark:text-red-300">Challenges</h3>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="challenge in project.challenges" 
                    :key="challenge"
                    class="text-red-700 dark:text-red-300 text-sm"
                  >
                    • {{ challenge }}
                  </li>
                </ul>
              </div>

              <!-- Solutions -->
              <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                <div class="flex items-center gap-2 mb-4">
                  <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <h3 class="text-lg font-semibold text-green-800 dark:text-green-300">Solutions</h3>
                </div>
                <ul class="space-y-2">
                  <li 
                    v-for="solution in project.solutions" 
                    :key="solution"
                    class="text-green-700 dark:text-green-300 text-sm"
                  >
                    • {{ solution }}
                  </li>
                </ul>
              </div>
            </div>

            <!-- Outcomes & Impact -->
            <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
              <div class="flex items-center gap-2 mb-4">
                <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
                <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300">Results & Impact</h3>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div 
                  v-for="outcome in project.outcomes" 
                  :key="outcome"
                  class="text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
                >
                  <div class="text-blue-600 dark:text-blue-400 font-semibold text-sm">
                    {{ outcome }}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                :href="project.github" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium flex-1"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a 
                v-if="project.demo && project.demo !== '#'"
                :href="project.demo" 
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium flex-1"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
export default {
  name: 'ProjectModal',
  props: {
    project: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['close'],
  mounted() {
    document.addEventListener('keydown', this.handleEscapeKey)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.handleEscapeKey)
  },
  methods: {
    handleEscapeKey(event) {
      if (event.key === 'Escape' && this.isVisible) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>