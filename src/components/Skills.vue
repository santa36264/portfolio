<template>
  <section id="skills" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
    <div class="max-w-7xl mx-auto w-full">
      <h2 class="section-title" data-aos="fade-up">Skills & Technologies</h2>
      
      <!-- Frontend Skills -->
      <div class="mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="100">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-center">Frontend</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          <div v-for="skill in frontendSkills" :key="skill.name" class="skill-card">
            <Icon :icon="skill.icon" class="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3" :style="{ color: skill.color }" />
            <h4 class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h4>
          </div>
        </div>
      </div>

      <!-- Backend Skills -->
      <div class="mb-8 sm:mb-10 lg:mb-12" data-aos="fade-up" data-aos-delay="200">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-center">Backend</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          <div v-for="skill in backendSkills" :key="skill.name" class="skill-card">
            <Icon :icon="skill.icon" class="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3" :style="{ color: skill.color }" />
            <h4 class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h4>
          </div>
        </div>
      </div>

      <!-- Mobile & Tools -->
      <div data-aos="fade-up" data-aos-delay="300">
        <h3 class="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6 text-center">Mobile & Tools</h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          <div v-for="skill in toolsSkills" :key="skill.name" class="skill-card">
            <Icon :icon="skill.icon" class="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3" :style="{ color: skill.color }" />
            <h4 class="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">{{ skill.name }}</h4>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { Icon } from '@iconify/vue'

export default {
  name: 'Skills',
  components: {
    Icon
  },
  setup() {
    const frontendSkills = [
      { name: 'HTML5', icon: 'vscode-icons:file-type-html', color: '#E34F26' },
      { name: 'CSS3', icon: 'vscode-icons:file-type-css', color: '#1572B6' },
      { name: 'JavaScript', icon: 'logos:javascript', color: '#F7DF1E' },
      { name: 'TypeScript', icon: 'logos:typescript-icon', color: '#3178C6' },
      { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', color: '#06B6D4' }
    ]

    const backendSkills = [
      { name: 'Python', icon: 'logos:python', color: '#3776AB' },
      { name: 'PHP', icon: 'logos:php', color: '#777BB4' },
      { name: 'Django', icon: 'vscode-icons:file-type-django', color: '#092E20' },
      { name: 'Laravel', icon: 'logos:laravel', color: '#FF2D20' },
      { name: 'WordPress', icon: 'skill-icons:wordpress', color: '#21759B' },
      { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#339933' },
      { name: 'Express', icon: 'skill-icons:expressjs-dark', color: '#000000' },
      { name: 'MySQL', icon: 'logos:mysql', color: '#4479A1' },
      { name: 'MongoDB', icon: 'logos:mongodb-icon', color: '#47A248' },
      { name: 'REST APIs', icon: 'mdi:api', color: '#009688' }
    ]

    const toolsSkills = [
      { name: 'Flutter', icon: 'logos:flutter', color: '#02569B' },
      { name: 'Firebase', icon: 'logos:firebase', color: '#FFCA28' },
      { name: 'Git', icon: 'logos:git-icon', color: '#F05032' },
      { name: 'Docker', icon: 'logos:docker-icon', color: '#2496ED' }
    ]

    return {
      frontendSkills,
      backendSkills,
      toolsSkills
    }
  }
}
</script>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 dark:text-white;
}

.skill-card {
  @apply bg-white dark:bg-gray-800 rounded-xl p-3 sm:p-4 lg:p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-100 dark:border-gray-700;
}
</style>
