<template>
  <section id="about" class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
    <div class="max-w-6xl mx-auto w-full">
      <h2 class="section-title" data-aos="fade-up">About Me</h2>
      
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Main About Content -->
        <div class="lg:col-span-2" data-aos="fade-right">
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10">
            <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              I'm a passionate <span class="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> and 
              <span class="font-semibold text-blue-600 dark:text-blue-400">Flutter Mobile Developer</span> with expertise in building 
              modern, scalable web and mobile applications. With a strong foundation in both frontend and 
              backend technologies, I create seamless user experiences and robust server-side solutions.
            </p>
            <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 sm:mb-6">
              My journey in software development has equipped me with proficiency in frameworks like Django, 
              Node.js, Express, and Flutter. I specialize in developing RESTful APIs, real-time 
              applications, and responsive interfaces that work flawlessly across all devices.
            </p>
            <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              I'm constantly learning and adapting to new technologies, always seeking to improve my craft 
              and deliver high-quality solutions. Whether it's building a complex web application or a 
              feature-rich mobile app, I bring dedication, creativity, and technical excellence to every project.
            </p>
            
            <!-- Resume Download Button -->
            <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div class="flex flex-col sm:flex-row gap-4">
                <a
                  href="/resume/SEMRE_DEMSSIE_MEKONNEN_FlowCV_Resume_2026-04-28.pdf"
                  download="Semre_Demssie_Resume.pdf"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  Download Resume
                </a>
                <router-link
                  to="/resume"
                  class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                  </svg>
                  View Full Resume
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Stats & Highlights -->
        <div class="space-y-4 sm:space-y-6" data-aos="fade-left">
          <div class="bg-blue-600 dark:bg-blue-700 rounded-2xl shadow-xl p-6 text-white">
            <div class="text-3xl sm:text-4xl font-bold mb-2">6+</div>
            <div class="text-blue-100 text-sm sm:text-base">Projects Completed</div>
          </div>
          
          <div class="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6">
            <h3 class="font-bold text-lg sm:text-xl mb-4 text-gray-900 dark:text-white">What I Do</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">Full-Stack Web Development</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">Mobile App Development</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">REST API Design</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">Database Architecture</span>
              </li>
              <li class="flex items-start gap-3">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm sm:text-base text-gray-700 dark:text-gray-300">UI/UX Implementation</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.section-title {
  @apply text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 dark:text-white;
}
</style>
