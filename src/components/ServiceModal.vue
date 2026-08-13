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
              <div class="flex items-center gap-4 mb-3">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <component :is="getServiceIcon(service.icon)" class="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 class="text-2xl font-bold text-gray-900 dark:text-white">{{ service.title }}</h2>
                  <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full font-medium">
                      {{ service.category }}
                    </span>
                    <span v-if="service.popular" class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full font-medium">
                      Popular Choice
                    </span>
                  </div>
                </div>
              </div>
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
            <!-- Overview -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Service Overview</h3>
              <p class="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                {{ service.description }}
              </p>
              
              <!-- Pricing & Timeline -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div class="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <svg class="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                    </svg>
                    <span class="font-semibold text-blue-800 dark:text-blue-300">Starting Price</span>
                  </div>
                  <div class="text-2xl font-bold text-blue-900 dark:text-blue-200">
                    ${{ service.startingPrice.toLocaleString() }}+
                  </div>
                  <div class="text-sm text-blue-700 dark:text-blue-400 mt-1">
                    Final price depends on project scope
                  </div>
                </div>
                
                <div class="bg-green-50 dark:bg-green-900/20 rounded-xl p-6">
                  <div class="flex items-center gap-2 mb-2">
                    <svg class="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <span class="font-semibold text-green-800 dark:text-green-300">Delivery Time</span>
                  </div>
                  <div class="text-2xl font-bold text-green-900 dark:text-green-200">
                    {{ service.deliveryTime }}
                  </div>
                  <div class="text-sm text-green-700 dark:text-green-400 mt-1">
                    Depending on complexity
                  </div>
                </div>
              </div>
            </div>

            <!-- Features -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">What's Included</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="feature in service.features" 
                  :key="feature"
                  class="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                >
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </div>
              </div>
            </div>

            <!-- Technologies -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
              <div class="flex flex-wrap gap-3">
                <span 
                  v-for="tech in service.technologies" 
                  :key="tech"
                  class="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700 rounded-full font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Examples -->
            <div v-if="service.examples">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Examples</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  v-for="example in service.examples" 
                  :key="example"
                  class="p-4 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div class="flex items-center gap-3">
                    <div class="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span class="text-gray-700 dark:text-gray-300 font-medium">{{ example }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Process Overview -->
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Development Process</h3>
              <div class="space-y-4">
                <div class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Requirements Analysis</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Understanding your needs and defining project scope</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Planning & Design</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Creating detailed plans and design mockups</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Development & Testing</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Building your solution with regular updates and testing</p>
                  </div>
                </div>
                <div class="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div class="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                  <div>
                    <h4 class="font-semibold text-gray-900 dark:text-white">Deployment & Support</h4>
                    <p class="text-gray-600 dark:text-gray-400 text-sm">Launch and ongoing support for your project</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <router-link 
                to="/contact"
                class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-colors font-semibold text-center"
                @click="$emit('close')"
              >
                Get Started
              </router-link>
              <button 
                @click="$emit('close')"
                class="flex-1 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'ServiceModal',
  props: {
    service: {
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
    },
    getServiceIcon(iconName) {
      const icons = {
        'web-development': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
        ]),
        'mobile-development': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
        ]),
        'api-development': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
        ]),
        'database': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' })
        ]),
        'devops': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' })
        ]),
        'consultation': () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
          h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
        ])
      }
      return icons[iconName] || icons['web-development']
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