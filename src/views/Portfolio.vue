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
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          My Portfolio
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Explore my latest projects and see what I've been working on
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
        <button 
          v-for="category in categories" 
          :key="category"
          @click="selectedCategory = category"
          :class="[
            'px-6 py-2 rounded-lg font-semibold transition-all duration-300',
            selectedCategory === category 
              ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-lg' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
          ]"
        >
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(project, index) in filteredProjects" 
          :key="project.id"
          class="project-card group cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          @click="goToProject(project.id)"
        >
          <div class="relative overflow-hidden rounded-t-xl h-48 bg-gray-200 dark:bg-gray-700">
            <img 
              :src="project.image" 
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span class="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-xs font-semibold rounded-full">
              {{ project.category }}
            </span>
          </div>
          
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
              {{ project.description }}
            </p>
            
            <div class="flex flex-wrap gap-2 mb-4">
              <span 
                v-for="tech in project.techStack.slice(0, 3)" 
                :key="tech"
                class="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {{ tech }}
              </span>
              <span 
                v-if="project.techStack.length > 3"
                class="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
              >
                +{{ project.techStack.length - 3 }}
              </span>
            </div>
            
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ project.year }}</span>
              <div class="flex items-center gap-3">
                <a
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  @click.stop
                  class="flex items-center gap-1 text-xs font-semibold text-green-600 dark:text-green-400 hover:underline"
                >
                  <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Live
                </a>
                <span class="text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                  View Details →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <p class="text-xl text-gray-600 dark:text-gray-400">
          No projects found in this category.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Portfolio',
  setup() {
    const router = useRouter()
    const selectedCategory = ref('All')
    
    const categories = ['All', 'Full-Stack', 'Mobile', 'Frontend', 'Backend']
    
    const projects = [
      {
        id: 1,
        title: 'Hotel Booking System',
        description: 'Full-stack booking system with admin panel for managing reservations, rooms, and customer data. Features include real-time availability, payment integration, and booking management.',
        category: 'Full-Stack',
        techStack: ['Django', 'Vue.js', 'MySQL', 'REST API', 'Stripe'],
        year: '2025',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 2,
        title: 'Task Manager App',
        description: 'Real-time task management application with user authentication and collaborative features. Includes task assignment, priority levels, and deadline tracking.',
        category: 'Full-Stack',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Vue.js', 'Socket.io'],
        year: '2025',
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 3,
        title: 'E-Commerce Dashboard',
        description: 'Comprehensive admin dashboard with product management, sales analytics, and inventory tracking. Features interactive charts and real-time data updates.',
        category: 'Full-Stack',
        techStack: ['Laravel', 'React', 'MySQL', 'Chart.js', 'Redis'],
        year: '2026',
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 4,
        title: 'Flutter Chat App',
        description: 'Real-time messaging application with push notifications and media sharing capabilities. Built with Firebase for real-time synchronization and cloud storage.',
        category: 'Mobile',
        techStack: ['Flutter', 'Firebase', 'Cloud Firestore', 'FCM'],
        year: '2026',
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 5,
        title: 'Weather Dashboard',
        description: 'Live weather data visualization using REST API with location-based forecasts. Features include 7-day forecast, weather maps, and location search.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind', 'OpenWeather API', 'Chart.js'],
        year: '2025',
        image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
        demo: 'https://weather-dashboard-ecru-pi.vercel.app/'
      },
      {
        id: 6,
        title: 'Portfolio Website',
        description: 'This responsive portfolio website showcasing projects and skills with dark mode support. Built with modern web technologies and smooth animations.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind', 'AOS', 'Vue Router'],
        year: '2024',
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
    
    const filteredProjects = computed(() => {
      if (selectedCategory.value === 'All') {
        return projects
      }
      return projects.filter(p => p.category === selectedCategory.value)
    })
    
    const goToProject = (id) => {
      router.push({ name: 'ProjectDetail', params: { id } })
    }
    
    const handleImageError = (event) => {
      // Fallback to a placeholder if image fails to load
      event.target.src = 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Project+Image'
    }
    
    return {
      selectedCategory,
      categories,
      filteredProjects,
      goToProject,
      handleImageError
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

.project-card {
  @apply bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden;
}
</style>
