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
          About Me
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Learn more about my journey, experience, and what drives me as a developer
        </p>
      </div>

      <!-- Profile Section -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div data-aos="fade-right">
          <div class="relative">
            <div class="w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/profile.jpg" 
                alt="Semre Demssie" 
                class="w-full h-full object-cover"
              />
            </div>
            <div class="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 dark:bg-blue-500 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div data-aos="fade-left" class="flex flex-col justify-center">
          <h2 class="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            Full-Stack Developer & Mobile App Specialist
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            I'm Semre Demssie, a passionate full-stack developer with expertise in building modern web applications 
            and mobile experiences. With a strong foundation in both frontend and backend technologies, I create 
            seamless, scalable solutions that solve real-world problems.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            My journey in software development has equipped me with proficiency in frameworks like Django, Node.js, 
            Express, and Flutter. I specialize in developing RESTful APIs, real-time applications, and responsive 
            interfaces that work flawlessly across all devices.
          </p>
          
          <div class="flex flex-wrap gap-4">
            <router-link to="/portfolio" class="btn-primary">
              View My Work
            </router-link>
            <router-link to="/contact" class="btn-secondary">
              Get In Touch
            </router-link>
          </div>
        </div>
      </div>

      <!-- Experience Timeline -->
      <div class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
        <div class="space-y-8">
          <div class="relative pl-8 border-l-4 border-blue-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-blue-600 dark:text-blue-400 font-semibold">2024 - Present</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Freelance Full-Stack Developer</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Building custom web and mobile applications for clients worldwide. Specializing in Vue.js, Django, 
                Flutter, and modern web technologies.
              </p>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-purple-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-purple-600 dark:text-purple-400 font-semibold">2023 - 2024</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Mobile App Development</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Focused on Flutter development, creating cross-platform mobile applications with beautiful UIs 
                and seamless performance.
              </p>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-green-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-green-600 dark:text-green-400 font-semibold">2022 - 2023</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Web Development Journey</h3>
              <p class="text-gray-600 dark:text-gray-400">
                Started my professional journey in web development, mastering frontend frameworks and backend 
                technologies to build full-stack applications.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Skills & Expertise -->
      <div class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="zoom-in">
            <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Frontend Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Creating responsive, interactive user interfaces with modern frameworks and best practices.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Vue.js</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">React</span>
              <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm">Tailwind</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="zoom-in" data-aos-delay="100">
            <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Backend Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Building robust APIs and server-side applications with scalable architecture.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Django</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Node.js</span>
              <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-sm">Laravel</span>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg" data-aos="zoom-in" data-aos-delay="200">
            <div class="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white">Mobile Development</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-4">
              Developing cross-platform mobile apps with native performance and beautiful UIs.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Flutter</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Firebase</span>
              <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm">Dart</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12" data-aos="zoom-in">
        <h2 class="text-3xl font-bold text-white mb-4">
          Let's Work Together
        </h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <router-link to="/contact" class="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
          Start a Conversation
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
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

.btn-primary {
  @apply px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block;
}

.btn-secondary {
  @apply px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 inline-block;
}
</style>
