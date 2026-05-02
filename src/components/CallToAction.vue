<template>
  <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
    <div class="max-w-5xl mx-auto">
      <div class="bg-blue-600 dark:bg-blue-700 rounded-2xl p-8 sm:p-12 text-center" data-aos="zoom-in">
        <h2 class="text-3xl sm:text-4xl font-bold text-white mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p class="text-blue-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/contact" 
            class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get In Touch
          </router-link>
          <router-link 
            to="/services" 
            class="inline-block px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300"
          >
            View Services
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CallToAction'
}
</script>
