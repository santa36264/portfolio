<template>
  <section class="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 w-full overflow-hidden">
    <div class="max-w-7xl mx-auto w-full">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12" data-aos="fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
          Client Testimonials
        </h2>
        <p class="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          What clients and colleagues say about working with me
        </p>
        
        <!-- Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <div class="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">
              {{ recommendationStats.totalRecommendations }}+
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Recommendations
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="200">
            <div class="flex items-center justify-center mb-1">
              <span class="text-3xl font-bold text-yellow-500 mr-1">{{ recommendationStats.averageRating }}</span>
              <svg class="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Average Rating
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="300">
            <div class="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">
              {{ recommendationStats.clientRetentionRate }}%
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Client Retention
            </div>
          </div>
          
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="fade-up" data-aos-delay="400">
            <div class="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-1">
              {{ recommendationStats.projectSuccessRate }}%
            </div>
            <div class="text-sm text-gray-600 dark:text-gray-400 font-medium">
              Project Success
            </div>
          </div>
        </div>
      </div>

      <!-- Testimonials Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
        <div
          v-for="(testimonial, index) in testimonialsData"
          :key="testimonial.id"
          class="testimonial-card group"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <!-- Quote Icon -->
          <div class="absolute top-4 right-4 text-blue-200 dark:text-blue-800 opacity-50">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8c-3.314 0-6 2.686-6 6v2c0 3.314 2.686 6 6 6h2c3.314 0 6-2.686 6-6v-2c0-3.314-2.686-6-6-6h-2zm0 2h2c2.276 0 4 1.724 4 4v2c0 2.276-1.724 4-4 4h-2c-2.276 0-4-1.724-4-4v-2c0-2.276 1.724-4 4-4z"/>
            </svg>
          </div>

          <!-- Rating Stars -->
          <div class="flex items-center gap-1 mb-4">
            <div class="flex">
              <svg
                v-for="star in 5"
                :key="star"
                class="w-4 h-4"
                :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
            <span v-if="testimonial.verified" class="flex items-center gap-1 text-green-600 dark:text-green-400 text-xs font-medium ml-2">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
              </svg>
              Verified
            </span>
          </div>

          <!-- Testimonial Text -->
          <blockquote class="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-sm sm:text-base italic relative z-10">
            "{{ testimonial.testimonial }}"
          </blockquote>

          <!-- Project Info -->
          <div class="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3 mb-6">
            <div class="text-xs font-medium text-blue-800 dark:text-blue-300 mb-1">
              Project
            </div>
            <div class="text-sm font-semibold text-blue-900 dark:text-blue-200">
              {{ testimonial.project }}
            </div>
          </div>

          <!-- Author Info -->
          <div class="flex items-center gap-4">
            <div class="relative">
              <img
                :src="testimonial.image"
                :alt="testimonial.name"
                class="w-12 h-12 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow-lg"
              />
            </div>
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2">
                <h4 class="font-semibold text-gray-900 dark:text-white text-sm truncate">
                  {{ testimonial.name }}
                </h4>
                <a
                  v-if="testimonial.linkedin"
                  :href="testimonial.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <p class="text-xs text-gray-600 dark:text-gray-400 line-clamp-1">
                {{ testimonial.position }}
              </p>
              <p class="text-xs text-blue-600 dark:text-blue-400 font-medium">
                {{ testimonial.company }}
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-500">
                {{ testimonial.date }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center" data-aos="fade-up" data-aos-delay="600">
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
          <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Work Together?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            Join these satisfied clients and let's create something amazing together.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link
              to="/contact"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              Start a Conversation
            </router-link>
            <router-link
              to="/portfolio"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              View My Work
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { testimonialsData, recommendationStats } from '../data/testimonialsData.js'

export default {
  name: 'Testimonials',
  setup() {
    return {
      testimonialsData,
      recommendationStats
    }
  }
}
</script>

<style scoped>
.testimonial-card {
  @apply bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden;
}

.testimonial-card::before {
  content: '';
  @apply absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/10 dark:to-purple-400/10 opacity-0 transition-opacity duration-300;
}

.testimonial-card:hover::before {
  @apply opacity-100;
}
</style>