<template>
  <section id="projects" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
    <div class="max-w-7xl mx-auto w-full">
      <h2 class="section-title" data-aos="fade-up">Featured Projects</h2>
      <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-10 lg:mb-12 max-w-2xl mx-auto px-4" data-aos="fade-up" data-aos-delay="100">
        Here are some of my recent projects showcasing my skills in full-stack development and mobile applications.
      </p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div 
          v-for="(project, index) in projects" 
          :key="project.title"
          class="project-card group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          
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
            
            <div class="mb-4 sm:mb-6">
              <div class="flex flex-wrap gap-1.5 sm:gap-2">
                <span 
                  v-for="tech in project.techStack" 
                  :key="tech"
                  class="px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="flex gap-3 sm:gap-4">
              <a 
                :href="project.github" 
                class="project-link flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a 
                v-if="project.demo !== '#'"
                :href="project.demo" 
                class="project-link-secondary flex-1 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  setup() {
    const projects = [
      {
        title: 'Hotel Website',
        description: 'Full-stack booking system with admin panel for managing reservations, rooms, and customer data. Features include real-time availability, payment integration, and booking management.',
        category: 'Full-Stack',
        techStack: ['Django', 'Vue.js', 'MySQL', 'REST API'],
        github: 'https://github.com/santa36264',
        demo: '#'
      },
      {
        title: 'Task Manager App',
        description: 'Real-time task management application with user authentication and collaborative features. Includes task assignment, priority levels, and deadline tracking.',
        category: 'Full-Stack',
        techStack: ['Node.js', 'Express', 'MongoDB', 'Vue.js'],
        github: 'https://github.com/santa36264',
        demo: '#'
      },
      {
        title: 'E-Commerce Dashboard',
        description: 'Comprehensive admin dashboard with product management, sales analytics, and inventory tracking. Features interactive charts and real-time data updates.',
        category: 'Full-Stack',
        techStack: ['Laravel', 'React', 'MySQL', 'Chart.js'],
        github: 'https://github.com/santa36264',
        demo: '#'
      },
      {
        title: 'Flutter Chat App',
        description: 'Real-time messaging application with push notifications and media sharing capabilities. Built with Firebase for real-time synchronization and cloud storage.',
        category: 'Mobile',
        techStack: ['Flutter', 'Firebase', 'Cloud Firestore'],
        github: 'https://github.com/santa36264',
        demo: '#'
      },
      {
        title: 'Weather Dashboard',
        description: 'Live weather data visualization using REST API with location-based forecasts. Features include 7-day forecast, weather maps, and location search.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind', 'OpenWeather API'],
        github: 'https://github.com/santa36264',
        demo: 'https://weather-dashboard-ecru-pi.vercel.app/'
      },
      {
        title: 'Portfolio Website',
        description: 'This responsive portfolio website showcasing projects and skills with dark mode support. Built with modern web technologies and smooth animations.',
        category: 'Frontend',
        techStack: ['Vue.js', 'Tailwind', 'AOS'],
        github: 'https://github.com/santa36264',
        demo: '#'
      }
    ]

    return {
      projects
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
