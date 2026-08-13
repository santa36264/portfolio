<template>
  <section id="projects" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
    <div class="max-w-7xl mx-auto w-full">
      <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
      <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        Here are some of my recent projects showcasing my skills in full-stack development and mobile applications. Each project includes detailed case studies, technical challenges, and measurable outcomes.
      </p>
      
      <!-- Loading State -->
      <LoadingSpinner v-if="isLoading" message="Loading projects..." class="my-12" />
      
      <!-- Error State -->
      <div v-else-if="error" class="text-center py-12">
        <div class="text-red-500 mb-4">
          <svg class="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
          </svg>
        </div>
        <p class="text-gray-600 dark:text-gray-400 mb-4">{{ error }}</p>
        <button @click="loadProjects" class="btn-primary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Try Again
        </button>
      </div>
      
      <!-- Projects Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="project-card group cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          @click="openProjectModal(project)"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
          <!-- Project Image -->
          <div v-if="project.image" class="relative overflow-hidden rounded-t-xl">
            <OptimizedImage
              :src="project.image" 
              :alt="project.title"
              class="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              aspect-ratio="16/9"
              :eager="index < 2"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
          
          <div class="p-4 sm:p-6 relative">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div class="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <span class="px-2.5 sm:px-3 py-1 text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">
                {{ project.category }}
              </span>
            </div>
            
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <!-- Tech Stack Preview -->
            <div class="mb-4 sm:mb-6">
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span 
                  v-for="tech in project.techStack.slice(0, 4)" 
                  :key="tech"
                  class="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {{ tech }}
                </span>
                <span 
                  v-if="project.techStack.length > 4"
                  class="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full"
                >
                  +{{ project.techStack.length - 4 }}
                </span>
              </div>
            </div>
            
            <!-- Action Buttons -->
            <div class="flex gap-3 sm:gap-4">
              <button 
                @click.stop="openProjectModal(project)"
                class="project-link flex-1 justify-center"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                View Details
              </button>
              <a 
                :href="project.github" 
                class="project-link-secondary flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
            </div>

            <!-- Project Stats -->
            <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{{ project.duration }}</span>
              <span>{{ project.role }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div v-if="!isLoading && !error" class="text-center mt-10 sm:mt-12" data-aos="fade-up" data-aos-delay="400">
        <a 
          href="https://github.com/santa36264?tab=repositories" 
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View All Projects on GitHub
        </a>
      </div>
    </div>

    <!-- Project Modal -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      :isVisible="showModal"
      @close="closeProjectModal"
    />
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useLoading } from '../composables/useLoading.js'
import ProjectModal from './ProjectModal.vue'
import LoadingSpinner from './LoadingSpinner.vue'
import OptimizedImage from './OptimizedImage.vue'

export default {
  name: 'Projects',
  components: {
    ProjectModal,
    LoadingSpinner,
    OptimizedImage
  },
  setup() {
    const { isLoading, error, executeWithLoading } = useLoading()
    const selectedProject = ref(null)
    const showModal = ref(false)
    const projects = ref([])

    const mockProjects = [
      {
        title: 'Hotel Luxury Booking System',
        description: 'Enterprise-grade hotel booking platform with advanced room management, real-time availability, and integrated payment processing.',
        fullDescription: 'A comprehensive hotel management system built for a luxury hotel chain. Features include real-time room availability, dynamic pricing, guest management, booking analytics, and staff coordination tools.',
        category: 'Full-Stack',
        techStack: ['Django', 'Vue.js', 'PostgreSQL', 'Redis', 'Stripe API', 'WebSockets'],
        github: 'https://github.com/santa36264/hotel-booking-system',
        demo: 'https://hotel-demo.semredemssie.dev',
        image: '/projects/project-1.jpg',
        challenges: [
          'Real-time room availability synchronization across multiple booking channels',
          'Complex pricing algorithms with seasonal and demand-based adjustments',
          'Scalable architecture to handle peak booking periods'
        ],
        solutions: [
          'Implemented Redis caching and WebSocket connections for real-time updates',
          'Built dynamic pricing engine with machine learning predictions',
          'Designed microservices architecture with auto-scaling capabilities'
        ],
        outcomes: [
          '40% increase in booking conversion rate',
          '60% reduction in double-booking incidents',
          'Processing 500+ concurrent bookings during peak seasons'
        ],
        features: [
          'Real-time availability tracking',
          'Dynamic pricing engine',
          'Multi-language support',
          'Payment gateway integration',
          'Guest communication system',
          'Analytics dashboard'
        ],
        duration: '4 months',
        role: 'Lead Full-Stack Developer'
      },
      {
        title: 'TeamSync Task Manager',
        description: 'Collaborative project management platform with real-time updates, team communication, and advanced reporting capabilities.',
        fullDescription: 'A modern task management application designed for remote teams. Includes advanced features like time tracking, automated workflows, team performance analytics, and integration with popular development tools.',
        category: 'Full-Stack',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'Socket.io', 'JWT'],
        github: 'https://github.com/santa36264/teamsync-app',
        demo: 'https://teamsync-demo.semredemssie.dev',
        image: '/projects/project-2.jpg',
        challenges: [
          'Real-time collaboration without performance degradation',
          'Complex permission system for different team roles',
          'Scalable notification system for large teams'
        ],
        solutions: [
          'Implemented efficient WebSocket architecture with room-based connections',
          'Created flexible RBAC system with granular permissions',
          'Built intelligent notification system with user preference controls'
        ],
        outcomes: [
          'Improved team productivity by 35%',
          'Reduced project completion time by 25%',
          'Supporting 50+ teams with 1000+ active users'
        ],
        features: [
          'Real-time collaboration',
          'Advanced task filtering',
          'Time tracking & reporting',
          'Team chat integration',
          'Automated workflows',
          'Performance analytics'
        ],
        duration: '3 months',
        role: 'Full-Stack Developer'
      },
      {
        title: 'RetailPro E-Commerce Dashboard',
        description: 'Advanced analytics and management dashboard for e-commerce businesses with AI-powered insights and inventory optimization.',
        fullDescription: 'A sophisticated admin dashboard for e-commerce platforms featuring real-time sales analytics, inventory management, customer insights, and AI-powered recommendations for business optimization.',
        category: 'Full-Stack',
        techStack: ['Laravel', 'React', 'MySQL', 'Chart.js', 'Python', 'TensorFlow'],
        github: 'https://github.com/santa36264/retailpro-dashboard',
        demo: 'https://retailpro-demo.semredemssie.dev',
        image: '/projects/project-3.jpg',
        challenges: [
          'Processing large datasets for real-time analytics',
          'Building accurate sales forecasting models',
          'Creating intuitive interface for complex data visualization'
        ],
        solutions: [
          'Implemented efficient database indexing and query optimization',
          'Developed machine learning models for sales prediction',
          'Designed responsive dashboard with progressive data loading'
        ],
        outcomes: [
          'Reduced inventory costs by 30%',
          'Improved sales forecasting accuracy to 85%',
          'Increased user engagement by 50%'
        ],
        features: [
          'Real-time sales analytics',
          'Inventory optimization',
          'Customer behavior analysis',
          'Sales forecasting',
          'Automated reporting',
          'Multi-store management'
        ],
        duration: '5 months',
        role: 'Senior Full-Stack Developer'
      },
      {
        title: 'ChatFlow - Flutter Messaging App',
        description: 'Feature-rich messaging application with end-to-end encryption, multimedia sharing, and group communication capabilities.',
        fullDescription: 'A modern messaging application built with Flutter, featuring secure communication, real-time messaging, group chats, multimedia sharing, and advanced privacy controls.',
        category: 'Mobile',
        techStack: ['Flutter', 'Firebase', 'Cloud Firestore', 'Cloud Functions', 'FCM'],
        github: 'https://github.com/santa36264/chatflow-flutter',
        demo: 'https://play.google.com/store/apps/chatflow',
        image: '/projects/project-4.jpg',
        challenges: [
          'Implementing end-to-end encryption for secure messaging',
          'Optimizing app performance for low-end devices',
          'Building reliable offline message synchronization'
        ],
        solutions: [
          'Integrated Signal Protocol for secure message encryption',
          'Implemented efficient caching and lazy loading strategies',
          'Built robust offline-first architecture with sync queues'
        ],
        outcomes: [
          '10,000+ downloads in first 3 months',
          '99.9% message delivery success rate',
          '4.8/5 average user rating'
        ],
        features: [
          'End-to-end encryption',
          'Group messaging',
          'Media sharing',
          'Voice messages',
          'Push notifications',
          'Dark mode support'
        ],
        duration: '4 months',
        role: 'Mobile App Developer'
      },
      {
        title: 'WeatherPro Dashboard',
        description: 'Comprehensive weather tracking application with advanced forecasting, interactive maps, and personalized weather alerts.',
        fullDescription: 'A sophisticated weather dashboard providing detailed meteorological data, interactive weather maps, severe weather alerts, and personalized forecasting based on user location and preferences.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind CSS', 'OpenWeather API', 'Mapbox GL', 'Chart.js'],
        github: 'https://github.com/santa36264/weather-dashboard',
        demo: 'https://weather-dashboard-ecru-pi.vercel.app/',
        image: '/projects/project-5.jpg',
        challenges: [
          'Integrating multiple weather data sources for accuracy',
          'Creating responsive interactive maps',
          'Implementing location-based personalization'
        ],
        solutions: [
          'Built data aggregation layer combining multiple weather APIs',
          'Implemented progressive web app features for mobile experience',
          'Created intelligent location detection and user preference system'
        ],
        outcomes: [
          '95% weather prediction accuracy',
          '2,500+ daily active users',
          '40% improvement in user engagement'
        ],
        features: [
          'Real-time weather data',
          '10-day forecasting',
          'Interactive weather maps',
          'Severe weather alerts',
          'Location-based personalization',
          'PWA support'
        ],
        duration: '2 months',
        role: 'Frontend Developer'
      },
      {
        title: 'Portfolio 3.0 - This Website',
        description: 'Modern, responsive portfolio website with advanced features including AI chat integration, dynamic content, and optimal performance.',
        fullDescription: 'A cutting-edge portfolio website built with modern web technologies. Features include dark mode, responsive design, AI-powered chat assistance, GitHub integration, and optimized performance with a focus on accessibility and SEO.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind CSS', 'AOS', 'Groq AI', 'Vite', 'Iconify'],
        github: 'https://github.com/santa36264/portfolio-v3',
        demo: 'https://semredemssie.dev',
        image: '/projects/project-6.jpg',
        challenges: [
          'Creating engaging user experience without overwhelming content',
          'Integrating AI chat while maintaining performance',
          'Achieving perfect accessibility and SEO scores'
        ],
        solutions: [
          'Implemented progressive loading and smooth animations',
          'Built efficient AI chat with context awareness',
          'Optimized for Core Web Vitals and accessibility standards'
        ],
        outcomes: [
          '100% Lighthouse performance score',
          '95% improvement in user engagement',
          'Featured in design showcases'
        ],
        features: [
          'Responsive design',
          'AI chat integration',
          'Dark mode support',
          'GitHub stats integration',
          'SEO optimization',
          'Performance optimization'
        ],
        duration: '3 months',
        role: 'Full-Stack Developer & Designer'
      }
    ]

    const loadProjects = async () => {
      await executeWithLoading(async () => {
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        projects.value = mockProjects
      }, 'Loading projects...')
    }

    const openProjectModal = (project) => {
      selectedProject.value = project
      showModal.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeProjectModal = () => {
      showModal.value = false
      selectedProject.value = null
      document.body.style.overflow = ''
    }

    onMounted(() => {
      loadProjects()
    })

    return {
      projects,
      selectedProject,
      showModal,
      isLoading,
      error,
      loadProjects,
      openProjectModal,
      closeProjectModal
    }
  }
}
</script>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 dark:text-white;
}

.project-card {
  @apply bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden;
}

.project-link {
  @apply flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-xs sm:text-sm font-medium shadow-md hover:shadow-lg transform hover:scale-105;
}

.project-link-secondary {
  @apply flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all text-xs sm:text-sm font-medium transform hover:scale-105;
}
</style>
