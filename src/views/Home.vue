<template>
  <div class="w-full overflow-x-hidden">
    <Hero />
    <About />
    <Skills />
    <FeaturedProjects />
    <Testimonials />
    <GitHubStats :isDarkMode="isDarkMode" />
    <CallToAction />
  </div>
</template>

<script>
import { inject } from 'vue'
import Hero from '../components/Hero.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import FeaturedProjects from '../components/FeaturedProjects.vue'
import Testimonials from '../components/Testimonials.vue'
import GitHubStats from '../components/GitHubStats.vue'
import CallToAction from '../components/CallToAction.vue'

export default {
  name: 'Home',
  components: {
    Hero,
    About,
    Skills,
    FeaturedProjects,
    Testimonials,
    GitHubStats,
    CallToAction
  },
  setup() {
    const isDarkMode = inject('isDarkMode')
    
    return {
      isDarkMode
    }
  }
}
</script>
