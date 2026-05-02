<template>
  <section id="projects" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
    <div class="max-w-7xl mx-auto w-full">
      <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
      <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        Here are some of my recent projects showcasing my skills in full-stack development and mobile applications.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <div 
          v-for="(project, index) in featuredProjects" 
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
            <span class="absolute top-4 right-4 px-3 py-1 bg-white/95 dark:bg-gray-900/95 text-xs font-semibold rounded-full shadow-lg">
              {{ project.category }}
            </span>
          </div>
          
          <div class="p-4 sm:p-6 relative">
            <div class="flex items-start justify-between mb-3 sm:mb-4">
              <div class="p-2 sm:p-3 bg-blue-600 dark:bg-blue-500 rounded-lg">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
            </div>
            
            <h3 class="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {{ project.title }}
            </h3>
            
            <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-3">
              {{ project.description }}
            </p>
            
            <div class="mb-4 sm:mb-6">
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span 
                  v-for="tech in project.techStack.slice(0, 3)" 
                  :key="tech"
                  class="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center" data-aos="fade-up">
        <router-link 
          to="/portfolio" 
          class="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          View All Projects
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'FeaturedProjects',
  setup() {
    const router = useRouter()
    
    const featuredProjects = [
      {
        id: 1,
        title: 'Hotel Website',
        description: 'Full-stack booking system with admin panel for managing reservations, rooms, and customer data.',
        category: 'Full-Stack',
        techStack: ['Django', 'Vue.js', 'MySQL', 'REST API'],
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 2,
        title: 'Task Manager App',
        description: 'Real-time task management application with user authentication and collaborative features.',
        category: 'Full-Stack',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Vue.js'],
        image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800'
      },
      {
        id: 4,
        title: 'Flutter Chat App',
        description: 'Real-time messaging application with push notifications and media sharing capabilities.',
        category: 'Mobile',
        techStack: ['Flutter', 'Firebase', 'Cloud Firestore'],
        image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800'
      }
    ]
    
    const goToProject = (id) => {
      router.push({ name: 'ProjectDetail', params: { id } })
    }
    
    const handleImageError = (event) => {
      event.target.src = 'https://via.placeholder.com/400x300/6366f1/ffffff?text=Project+Image'
    }
    
    return {
      featuredProjects,
      goToProject,
      handleImageError
    }
  }
}
</script>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 dark:text-white;
}

.project-card {
  @apply bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden;
}
</style>
