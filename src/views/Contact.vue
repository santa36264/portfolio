<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-6xl mx-auto relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Get In Touch
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Have a project in mind? Let's discuss how I can help bring your ideas to life with modern web and mobile solutions.
        </p>
      </div>

      <!-- Contact Form Component -->
      <div data-aos="fade-up" data-aos-delay="200">
        <ContactForm />
      </div>

      <!-- Additional Contact Information -->
      <div class="mt-16 text-center" data-aos="fade-up" data-aos-delay="400">
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8">
          <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What's your typical response time?</h3>
                <p class="text-gray-600 dark:text-gray-400">I usually respond to all inquiries within 24 hours during business days.</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Do you work with clients worldwide?</h3>
                <p class="text-gray-600 dark:text-gray-400">Yes! I work remotely with clients from all time zones and have experience with international projects.</p>
              </div>
            </div>
            
            <div class="space-y-4">
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">What information should I include in my message?</h3>
                <p class="text-gray-600 dark:text-gray-400">Please describe your project goals, timeline, and any specific requirements. The more details, the better I can help!</p>
              </div>
              
              <div>
                <h3 class="font-semibold text-gray-900 dark:text-white mb-2">Do you offer free consultations?</h3>
                <p class="text-gray-600 dark:text-gray-400">Yes! I offer a free initial consultation to discuss your project and see how I can help you achieve your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'

export default {
  name: 'ContactPage',
  components: {
    ContactForm
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
</style>
