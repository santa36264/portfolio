<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen overflow-x-hidden">
    <ErrorBoundary>
      <div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden w-full">
        <Navbar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
        <router-view />
        <Footer />
        <ChatWidget />
      </div>
    </ErrorBoundary>
    <GlobalLoading />
    <PerformanceMonitor />
  </div>
</template>

<script>
import { ref, onMounted, provide } from 'vue'
import { useAccessibility } from './composables/useAccessibility.js'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatWidget from './components/ChatWidget.vue'
import ErrorBoundary from './components/ErrorBoundary.vue'
import GlobalLoading from './components/GlobalLoading.vue'
import PerformanceMonitor from './components/PerformanceMonitor.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ChatWidget,
    ErrorBoundary,
    GlobalLoading,
    PerformanceMonitor
  },
  setup() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      localStorage.setItem('darkMode', isDarkMode.value)
      
      // Announce theme change to screen readers
      const message = isDarkMode.value ? 'Dark mode enabled' : 'Light mode enabled'
      announceToScreenReader(message)
    }

    // Import accessibility composable
    const { announceToScreenReader } = useAccessibility()

    onMounted(() => {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        isDarkMode.value = savedMode === 'true'
      } else {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
      }

      // Add main content landmark
      const main = document.querySelector('main')
      if (main) {
        main.id = 'main-content'
      }
    })

    // Provide isDarkMode to all child components
    provide('isDarkMode', isDarkMode)

    return {
      isDarkMode,
      toggleDarkMode
    }
  }
}
</script>
