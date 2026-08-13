<template>
  <section class="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800 w-full overflow-hidden">
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-8" data-aos="fade-up">
        <h3 class="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">
          What People Say
        </h3>
        <p class="text-gray-600 dark:text-gray-400">
          Trusted by professionals and organizations worldwide
        </p>
      </div>

      <!-- Testimonials Slider -->
      <div class="relative">
        <div class="overflow-hidden">
          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
          >
            <div
              v-for="testimonial in featuredTestimonials"
              :key="testimonial.id"
              class="w-full flex-shrink-0 px-4"
            >
              <div class="bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-200 dark:border-gray-700 max-w-4xl mx-auto">
                <!-- Rating Stars -->
                <div class="flex items-center justify-center gap-1 mb-4">
                  <svg
                    v-for="star in testimonial.rating"
                    :key="star"
                    class="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>

                <!-- Testimonial Text -->
                <blockquote class="text-center text-gray-700 dark:text-gray-300 text-lg sm:text-xl leading-relaxed mb-6 italic">
                  "{{ testimonial.testimonial }}"
                </blockquote>

                <!-- Author Info -->
                <div class="flex items-center justify-center gap-4">
                  <img
                    :src="testimonial.image"
                    :alt="testimonial.name"
                    class="w-16 h-16 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-700 shadow-lg"
                  />
                  <div class="text-center sm:text-left">
                    <div class="font-semibold text-gray-900 dark:text-white text-lg">
                      {{ testimonial.name }}
                    </div>
                    <div class="text-gray-600 dark:text-gray-400 text-sm">
                      {{ testimonial.position }}
                    </div>
                    <div class="text-blue-600 dark:text-blue-400 font-medium text-sm">
                      {{ testimonial.company }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center mt-6 gap-2">
          <button
            v-for="(testimonial, index) in featuredTestimonials"
            :key="testimonial.id"
            @click="currentSlide = index"
            class="w-3 h-3 rounded-full transition-all duration-300"
            :class="currentSlide === index ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'"
            :aria-label="`Go to testimonial ${index + 1}`"
          ></button>
        </div>

        <!-- Navigation Arrows -->
        <button
          @click="previousSlide"
          class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>

        <button
          @click="nextSlide"
          class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          aria-label="Next testimonial"
        >
          <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'
import { testimonialsData } from '../data/testimonialsData.js'

export default {
  name: 'TestimonialsCarousel',
  setup() {
    const currentSlide = ref(0)
    let autoplayInterval = null

    // Featured testimonials (first 3)
    const featuredTestimonials = testimonialsData.slice(0, 3)

    const nextSlide = () => {
      currentSlide.value = (currentSlide.value + 1) % featuredTestimonials.length
    }

    const previousSlide = () => {
      currentSlide.value = currentSlide.value === 0 ? featuredTestimonials.length - 1 : currentSlide.value - 1
    }

    const startAutoplay = () => {
      autoplayInterval = setInterval(() => {
        nextSlide()
      }, 5000) // Auto-advance every 5 seconds
    }

    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval)
        autoplayInterval = null
      }
    }

    onMounted(() => {
      startAutoplay()
    })

    onUnmounted(() => {
      stopAutoplay()
    })

    return {
      currentSlide,
      featuredTestimonials,
      nextSlide,
      previousSlide
    }
  }
}
</script>

<style scoped>
.testimonials-carousel {
  /* Add any additional styling if needed */
}
</style>