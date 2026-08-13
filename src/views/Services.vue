<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Services & Solutions
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Professional development services to bring your ideas to life. From concept to deployment, 
          I deliver high-quality solutions that scale with your business.
        </p>
        
        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">6+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Services Offered</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div class="text-center">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>

      <!-- Services Grid -->
      <section class="mb-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          What I Can Do For You
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in services" 
            :key="service.id"
            class="service-card group"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="service-icon">
              <component :is="getServiceIcon(service.icon)" class="w-8 h-8 text-white" />
            </div>
            
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {{ service.title }}
              </h3>
              <span v-if="service.popular" class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-semibold rounded-full">
                Popular
              </span>
            </div>
            
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {{ service.description }}
            </p>
            
            <div class="mb-6">
              <h4 class="font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
              <ul class="space-y-2">
                <li v-for="feature in service.features.slice(0, 4)" :key="feature" class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-green-500 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <div class="mb-6">
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in service.technologies.slice(0, 3)" 
                  :key="tech"
                  class="px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="service.technologies.length > 3"
                  class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                >
                  +{{ service.technologies.length - 3 }}
                </span>
              </div>
            </div>
            
            <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div class="text-2xl font-bold text-gray-900 dark:text-white">
                  ${{ service.startingPrice.toLocaleString() }}+
                </div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{{ service.deliveryTime }}</div>
              </div>
              <button 
                @click="openServiceModal(service)"
                class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Package Deals -->
      <section class="mb-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Package Deals
        </h2>
        
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div 
            v-for="(pkg, index) in packages" 
            :key="pkg.id"
            class="package-card"
            :class="{ 'popular': pkg.popular }"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div v-if="pkg.popular" class="popular-badge">Most Popular</div>
            
            <div class="p-8">
              <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{{ pkg.name }}</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-6">{{ pkg.description }}</p>
              
              <div class="mb-6">
                <span class="text-4xl font-bold text-gray-900 dark:text-white">${{ pkg.price.toLocaleString() }}</span>
                <span class="text-gray-500 dark:text-gray-400 ml-2">{{ pkg.duration }}</span>
              </div>
              
              <ul class="space-y-3 mb-8">
                <li v-for="feature in pkg.features" :key="feature" class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
                </li>
              </ul>
              
              <button class="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Process Section -->
      <section class="mb-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Development Process
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(step, index) in process" 
            :key="step.step"
            class="process-step"
            data-aos="fade-up"
            :data-aos-delay="index * 100"
          >
            <div class="step-number">{{ step.step }}</div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">{{ step.description }}</p>
            <div class="text-sm text-blue-600 dark:text-blue-400 font-medium">{{ step.duration }}</div>
          </div>
        </div>
      </section>

      <!-- FAQ Section -->
      <section class="mb-20" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        
        <div class="max-w-4xl mx-auto space-y-4">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="faq-item"
            data-aos="fade-up"
            :data-aos-delay="index * 50"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full text-left p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-200 dark:border-gray-700 flex items-center justify-between"
            >
              <h3 class="font-semibold text-gray-900 dark:text-white pr-4">{{ faq.question }}</h3>
              <svg 
                class="w-5 h-5 text-gray-500 transition-transform"
                :class="{ 'rotate-180': activeFaq === index }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div v-if="activeFaq === index" class="px-6 pb-6 bg-white dark:bg-gray-800 rounded-b-xl -mt-2 border-l border-r border-b border-gray-200 dark:border-gray-700">
              <p class="text-gray-600 dark:text-gray-400">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="text-center" data-aos="zoom-in">
        <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <h2 class="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create something amazing together. 
            Get a free consultation and project estimate.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link 
              to="/contact" 
              class="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Free Quote
            </router-link>
            <a 
              href="#portfolio"
              class="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>

    <!-- Service Detail Modal -->
    <ServiceModal
      v-if="selectedService"
      :service="selectedService"
      :isVisible="showServiceModal"
      @close="closeServiceModal"
    />
  </div>
</template>

<script>
import { ref, h } from 'vue'
import { services, packages, process, faqs } from '../data/servicesData.js'
import ServiceModal from '../components/ServiceModal.vue'

export default {
  name: 'Services',
  components: {
    ServiceModal
  },
  setup() {
    const selectedService = ref(null)
    const showServiceModal = ref(false)
    const activeFaq = ref(null)

    const getServiceIcon = (iconName) => {
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

    const openServiceModal = (service) => {
      selectedService.value = service
      showServiceModal.value = true
    }

    const closeServiceModal = () => {
      showServiceModal.value = false
      selectedService.value = null
    }

    const toggleFaq = (index) => {
      activeFaq.value = activeFaq.value === index ? null : index
    }

    return {
      services,
      packages,
      process,
      faqs,
      selectedService,
      showServiceModal,
      activeFaq,
      getServiceIcon,
      openServiceModal,
      closeServiceModal,
      toggleFaq
    }
  }
}
</script>

<style scoped>
.service-card {
  @apply bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden;
}

.service-card::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 transition-opacity duration-300;
}

.service-card:hover::before {
  @apply opacity-100;
}

.service-icon {
  @apply w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 relative z-10;
}

.package-card {
  @apply bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden;
}

.package-card.popular {
  @apply border-blue-500 dark:border-blue-400 shadow-blue-500/20;
}

.popular-badge {
  @apply absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-b-lg text-sm font-semibold;
}

.process-step {
  @apply bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 relative;
}

.step-number {
  @apply w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-6;
}

.faq-item .rotate-180 {
  transform: rotate(180deg);
}
</style>