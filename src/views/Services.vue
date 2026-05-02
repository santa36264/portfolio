<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-16" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Services I Offer
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Professional development services tailored to bring your ideas to life
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="service.title"
          class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-xl flex items-center justify-center mb-6">
            <component :is="service.icon" class="w-8 h-8 text-white" />
          </div>
          
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ service.title }}
          </h3>
          
          <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            {{ service.description }}
          </p>
          
          <ul class="space-y-3">
            <li v-for="feature in service.features" :key="feature" class="flex items-start gap-2">
              <svg class="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Process Section -->
      <div class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          My Development Process
        </h2>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div v-for="(step, index) in process" :key="step.title" class="text-center" data-aos="zoom-in" :data-aos-delay="index * 100">
            <div class="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-white">{{ step.title }}</h3>
            <p class="text-gray-600 dark:text-gray-400">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12" data-aos="zoom-in">
        <h2 class="text-3xl font-bold text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss your requirements and create something amazing together
        </p>
        <router-link to="/contact" class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Get a Free Quote
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { h } from 'vue'

export default {
  name: 'Services',
  setup() {
    const CodeIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ])
    
    const MobileIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' })
    ])
    
    const ServerIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01' })
    ])
    
    const DesignIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01' })
    ])
    
    const ApiIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' })
    ])
    
    const ConsultIcon = () => h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' })
    ])
    
    const services = [
      {
        title: 'Web Development',
        description: 'Custom web applications built with modern frameworks and best practices for optimal performance and user experience.',
        icon: CodeIcon,
        features: [
          'Responsive design',
          'Modern frameworks (Vue, React)',
          'SEO optimization',
          'Performance optimization',
          'Cross-browser compatibility'
        ]
      },
      {
        title: 'Mobile App Development',
        description: 'Cross-platform mobile applications using Flutter for iOS and Android with native performance.',
        icon: MobileIcon,
        features: [
          'iOS & Android apps',
          'Flutter development',
          'Firebase integration',
          'Push notifications',
          'App store deployment'
        ]
      },
      {
        title: 'Backend Development',
        description: 'Robust server-side applications and APIs with scalable architecture and secure authentication.',
        icon: ServerIcon,
        features: [
          'RESTful API development',
          'Database design',
          'Authentication & authorization',
          'Cloud deployment',
          'Performance optimization'
        ]
      },
      {
        title: 'UI/UX Design',
        description: 'Beautiful, intuitive interfaces designed with user experience in mind and modern design principles.',
        icon: DesignIcon,
        features: [
          'Wireframing & prototyping',
          'User interface design',
          'Responsive layouts',
          'Design systems',
          'Figma/Adobe XD'
        ]
      },
      {
        title: 'API Integration',
        description: 'Seamless integration of third-party APIs and services to extend your application functionality.',
        icon: ApiIcon,
        features: [
          'Third-party API integration',
          'Payment gateways',
          'Social media APIs',
          'Custom API development',
          'API documentation'
        ]
      },
      {
        title: 'Consulting & Support',
        description: 'Technical consulting, code reviews, and ongoing support for your development projects.',
        icon: ConsultIcon,
        features: [
          'Technical consulting',
          'Code review',
          'Performance audits',
          'Bug fixes',
          'Ongoing maintenance'
        ]
      }
    ]
    
    const process = [
      {
        title: 'Discovery',
        description: 'Understanding your requirements and project goals'
      },
      {
        title: 'Planning',
        description: 'Creating a detailed roadmap and timeline'
      },
      {
        title: 'Development',
        description: 'Building your solution with regular updates'
      },
      {
        title: 'Delivery',
        description: 'Testing, deployment, and handover'
      }
    ]
    
    return {
      services,
      process
    }
  }
}
</script>

<style scoped>
@keyframes blob {
  0%, 100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
