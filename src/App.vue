<template>
  <div :class="{ 'dark': isDarkMode }" class="min-h-screen overflow-x-hidden">
    <div class="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 overflow-x-hidden w-full">
      <Navbar :isDarkMode="isDarkMode" @toggle-dark-mode="toggleDarkMode" />
      <router-view />
      <Footer />
      <ChatWidget />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, provide } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import ChatWidget from './components/ChatWidget.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    ChatWidget
  },
  setup() {
    const isDarkMode = ref(false)

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value
      localStorage.setItem('darkMode', isDarkMode.value)
    }

    onMounted(() => {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        isDarkMode.value = savedMode === 'true'
      } else {
        isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
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
