<template>
  <nav class="fixed w-full top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div class="flex justify-between items-center h-16">
        <div class="flex-shrink-0">
          <a href="https://portfolio-ds2i.vercel.app" class="flex items-center gap-2">
            <img src="/logo.png" alt="SD Logo" class="h-10 w-auto" />SATAAB
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/about" class="nav-link">About</router-link>
          <router-link to="/portfolio" class="nav-link">Portfolio</router-link>
          <router-link to="/services" class="nav-link">Services</router-link>
          <router-link to="/blog" class="nav-link">Blog</router-link>
          <router-link to="/contact" class="nav-link">Contact</router-link>
          
          <!-- Dark Mode Toggle -->
          <button 
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            aria-label="Toggle dark mode"
          >
            <svg v-if="!isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden flex items-center space-x-4">
          <button 
            @click="$emit('toggle-dark-mode')"
            class="p-2 rounded-lg bg-gray-200 dark:bg-gray-700"
            aria-label="Toggle dark mode"
          >
            <svg v-if="!isDarkMode" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
            </svg>
            <svg v-else class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"></path>
            </svg>
          </button>
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <router-link to="/" @click="isMenuOpen = false" class="mobile-nav-link">Home</router-link>
        <router-link to="/about" @click="isMenuOpen = false" class="mobile-nav-link">About</router-link>
        <router-link to="/portfolio" @click="isMenuOpen = false" class="mobile-nav-link">Portfolio</router-link>
        <router-link to="/services" @click="isMenuOpen = false" class="mobile-nav-link">Services</router-link>
        <router-link to="/blog" @click="isMenuOpen = false" class="mobile-nav-link">Blog</router-link>
        <router-link to="/contact" @click="isMenuOpen = false" class="mobile-nav-link">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'Navbar',
  props: {
    isDarkMode: Boolean
  },
  emits: ['toggle-dark-mode'],
  setup() {
    const isMenuOpen = ref(false)

    return {
      isMenuOpen
    }
  }
}
</script>

<style scoped>
.nav-link {
  @apply text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium;
}

.nav-link.router-link-active {
  @apply text-blue-600 dark:text-blue-400;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors;
}

.mobile-nav-link.router-link-active {
  @apply text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800;
}
</style>
