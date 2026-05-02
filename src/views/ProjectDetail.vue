<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-5xl mx-auto relative z-10">
      <!-- Back Button -->
      <button 
        @click="$router.back()"
        class="mb-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Portfolio
      </button>

      <div v-if="project">
        <!-- Project Header -->
        <div class="mb-12" data-aos="fade-up">
          <div class="flex flex-wrap items-center gap-4 mb-4">
            <span class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
              {{ project.category }}
            </span>
            <span class="text-gray-500 dark:text-gray-400">{{ project.year }}</span>
          </div>
          
          <h1 class="text-4xl sm:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {{ project.title }}
          </h1>
          
          <p class="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- Project Images Gallery -->
        <div class="mb-12" data-aos="zoom-in">
          <!-- Main Image -->
          <div class="rounded-2xl overflow-hidden shadow-2xl mb-4">
            <img 
              :src="project.images[selectedImageIndex]" 
              :alt="project.title"
              class="w-full h-96 object-cover cursor-pointer"
              @error="handleImageError"
              @click="nextImage"
            />
          </div>
          
          <!-- Thumbnail Gallery -->
          <div class="grid grid-cols-3 md:grid-cols-4 gap-4">
            <div 
              v-for="(image, index) in project.images" 
              :key="index"
              @click="selectedImageIndex = index"
              :class="[
                'rounded-lg overflow-hidden cursor-pointer border-4 transition-all duration-300',
                selectedImageIndex === index 
                  ? 'border-blue-600 dark:border-blue-400 scale-105' 
                  : 'border-transparent hover:border-gray-300 dark:hover:border-gray-600'
              ]"
            >
              <img 
                :src="image" 
                :alt="`${project.title} - Image ${index + 1}`"
                class="w-full h-24 object-cover"
                @error="handleImageError"
              />
            </div>
          </div>
          
          <!-- Image Counter -->
          <div class="text-center mt-4 text-gray-600 dark:text-gray-400">
            {{ selectedImageIndex + 1 }} / {{ project.images.length }}
          </div>
        </div>

        <!-- Project Details Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Technologies Used -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-right">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Technologies Used
            </h2>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tech in project.techStack" 
                :key="tech"
                class="px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg text-sm font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Project Links -->
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-left">
            <h2 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Project Links
            </h2>
            <div class="space-y-3">
              <a 
                :href="project.github" 
                target="_blank"
                class="flex items-center gap-3 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span class="font-medium">View on GitHub</span>
              </a>
              <a 
                v-if="project.demo !== '#'"
                :href="project.demo" 
                target="_blank"
                class="flex items-center gap-3 p-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                <span class="font-medium">Live Demo</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Project Features -->
        <div class="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg mb-12" data-aos="fade-up">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Key Features
          </h2>
          <ul class="space-y-4">
            <li v-for="(feature, index) in project.features" :key="index" class="flex items-start gap-3">
              <svg class="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span class="text-gray-700 dark:text-gray-300">{{ feature }}</span>
            </li>
          </ul>
        </div>

        <!-- Call to Action -->
        <div class="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12" data-aos="zoom-in">
          <h2 class="text-3xl font-bold text-white mb-4">
            Interested in Similar Work?
          </h2>
          <p class="text-blue-100 text-lg mb-8">
            Let's discuss how I can help bring your project to life
          </p>
          <router-link to="/contact" class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
            Get In Touch
          </router-link>
        </div>
      </div>

      <!-- Project Not Found -->
      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Project Not Found
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The project you're looking for doesn't exist.
        </p>
        <router-link to="/portfolio" class="btn-primary">
          Back to Portfolio
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'ProjectDetail',
  setup() {
    const route = useRoute()
    const project = ref(null)
    const selectedImageIndex = ref(0)
    
    const projects = {
      1: {
        id: 1,
        title: 'Hotel Booking System',
        description: 'A comprehensive full-stack booking system designed for hotels to manage reservations, rooms, and customer data efficiently. The system features real-time room availability, secure payment integration with Stripe, and an intuitive admin panel for managing all aspects of the hotel operations.',
        category: 'Full-Stack',
        techStack: ['Django', 'Vue.js', 'MySQL', 'REST API', 'Stripe', 'Redis', 'Celery'],
        year: '2024',
        github: 'https://github.com/santa36264',
        demo: '#',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
          'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        features: [
          'Real-time room availability and booking system',
          'Secure payment processing with Stripe integration',
          'Admin dashboard for managing rooms, bookings, and customers',
          'Email notifications for booking confirmations',
          'Advanced search and filtering options',
          'Responsive design for all devices',
          'Multi-language support',
          'Booking history and analytics'
        ]
      },
      2: {
        id: 2,
        title: 'Task Manager App',
        description: 'A powerful real-time task management application that enables teams to collaborate effectively. Features include user authentication, task assignment, priority management, and real-time updates using WebSockets.',
        category: 'Full-Stack',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'Socket.io', 'JWT'],
        year: '2024',
        github: 'https://github.com/santa36264',
        demo: '#',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
          'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        features: [
          'Real-time task updates with Socket.io',
          'User authentication and authorization',
          'Task assignment and priority levels',
          'Deadline tracking and notifications',
          'Team collaboration features',
          'Task comments and attachments',
          'Progress tracking and analytics',
          'Mobile-responsive interface'
        ]
      },
      3: {
        id: 3,
        title: 'E-Commerce Dashboard',
        description: 'A comprehensive admin dashboard for e-commerce platforms with advanced analytics, product management, and inventory tracking capabilities. Features interactive charts and real-time data visualization.',
        category: 'Full-Stack',
        techStack: ['Laravel', 'React', 'MySQL', 'Chart.js', 'Redis', 'Tailwind CSS'],
        year: '2023',
        github: 'https://github.com/santa36264',
        demo: '#',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
          'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        features: [
          'Product management with bulk operations',
          'Sales analytics and reporting',
          'Inventory tracking and alerts',
          'Order management system',
          'Customer relationship management',
          'Interactive charts and graphs',
          'Export data to CSV/PDF',
          'Role-based access control'
        ]
      },
      4: {
        id: 4,
        title: 'Flutter Chat App',
        description: 'A modern real-time messaging application built with Flutter and Firebase. Features include push notifications, media sharing, and cloud synchronization across devices.',
        category: 'Mobile',
        techStack: ['Flutter', 'Firebase', 'Cloud Firestore', 'FCM', 'Dart'],
        year: '2024',
        github: 'https://github.com/santa36264',
        demo: '#',
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
          'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/4050302/pexels-photo-4050302.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        features: [
          'Real-time messaging with Firebase',
          'Push notifications using FCM',
          'Image and video sharing',
          'User authentication and profiles',
          'Group chat functionality',
          'Message read receipts',
          'Offline message caching',
          'Beautiful Material Design UI'
        ]
      },
      5: {
        id: 5,
        title: 'Weather Dashboard',
        description: 'An elegant weather dashboard that provides live weather data and forecasts using the OpenWeather API. Features location-based forecasts, weather maps, and detailed analytics.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind CSS', 'OpenWeather API', 'Chart.js', 'Axios'],
        year: '2023',
        github: 'https://github.com/santa36264',
        demo: 'https://weather-dashboard-ecru-pi.vercel.app/',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        images: [
          'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/1118869/pexels-photo-1118869.jpeg?auto=compress&cs=tinysrgb&w=1200',
          'https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=1200'
        ],
        features: [
          'Current weather conditions',
          '7-day weather forecast',
          'Hourly weather predictions',
          'Location search and geolocation',
          'Weather maps and radar',
          'Temperature charts and graphs',
          'Weather alerts and warnings',
          'Favorite locations management'
        ]
      },
      6: {
        id: 6,
        title: 'Portfolio Website',
        description: 'This modern, responsive portfolio website showcasing projects, skills, and professional experience. Built with Vue.js and features dark mode, smooth animations, and multi-page navigation.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind CSS', 'AOS', 'Vue Router', 'Vite'],
        year: '2024',
        github: 'https://github.com/santa36264/portfolio',
        demo: '#',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
        features: [
          'Multi-page navigation with Vue Router',
          'Dark mode with localStorage persistence',
          'Smooth scroll animations',
          'Fully responsive design',
          'Project showcase with filtering',
          'Blog section for articles',
          'Contact form with validation',
          'GitHub stats integration'
        ]
      }
    }
    
    onMounted(() => {
      const projectId = parseInt(route.params.id)
      project.value = projects[projectId] || null
    })
    
    const handleImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/1200x800/6366f1/ffffff?text=Project+Image'
    }
    
    const nextImage = () => {
      if (project.value && project.value.images) {
        selectedImageIndex.value = (selectedImageIndex.value + 1) % project.value.images.length
      }
    }
    
    return {
      project,
      selectedImageIndex,
      handleImageError,
      nextImage
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

.btn-primary {
  @apply px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block;
}
</style>
