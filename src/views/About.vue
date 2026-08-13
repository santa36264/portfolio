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
                src="/download.png" 
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
            I'm Semre Demssie, a passionate full-stack developer with over 3<sup class="font-bold text-blue-500">+</sup> years of experience building 
            scalable web applications and mobile solutions. My journey began with a curiosity about how 
            technology could solve real-world problems, and it has evolved into a career dedicated to 
            creating exceptional digital experiences.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            Specializing in modern frameworks like Vue.js, Django, Node.js, and Flutter, I've had the 
            privilege of working with diverse clients from startups to established enterprises. What drives 
            me is the opportunity to transform ideas into functional, beautiful, and impactful applications.
          </p>
          <p class="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Beyond coding, I'm passionate about continuous learning, sharing knowledge through technical 
            writing, and mentoring fellow developers. I believe in writing clean, maintainable code and 
            following industry best practices to deliver solutions that stand the test of time.
          </p>
          
          <!-- Key Stats -->
          <div class="grid grid-cols-2 gap-4 mb-6">
            <div class="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
              <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Projects Delivered</div>
            </div>
            <div class="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl">
              <div class="text-2xl font-bold text-green-600 dark:text-green-400">100%</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
            </div>
          </div>
          
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
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          My Professional Journey
        </h2>
        <div class="space-y-8">
          <div class="relative pl-8 border-l-4 border-blue-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-blue-600 dark:text-blue-400 font-semibold">2024 - Present</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Senior Freelance Developer</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                Expanded into full-time freelancing, working with international clients on complex web and mobile 
                applications. Specializing in Vue.js, Django, Flutter, and modern DevOps practices.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full">15+ Projects</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">$50k+ Revenue</span>
              </div>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-purple-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-purple-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-purple-600 dark:text-purple-400 font-semibold">2023 - 2024</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Full-Stack Development Focus</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                Mastered end-to-end application development, from database design to user interface. Built several 
                production applications including e-commerce platforms and business management systems.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">Vue.js Expert</span>
                <span class="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-sm rounded-full">Django Specialist</span>
              </div>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-green-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-green-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-green-600 dark:text-green-400 font-semibold">2022 - 2023</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Mobile Development Journey</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                Dove deep into mobile app development with Flutter, creating cross-platform applications with 
                native performance. Built chat applications, productivity tools, and social media apps.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">Flutter Certified</span>
                <span class="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm rounded-full">5 Apps Published</span>
              </div>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-orange-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-orange-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-orange-600 dark:text-orange-400 font-semibold">2021 - 2022</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">Professional Development Beginnings</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                Started my professional journey as a web developer, learning modern frameworks and best practices. 
                Worked on various projects ranging from landing pages to complex web applications.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">First Client Project</span>
                <span class="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm rounded-full">Web Dev Foundations</span>
              </div>
            </div>
          </div>

          <div class="relative pl-8 border-l-4 border-indigo-500" data-aos="fade-right">
            <div class="absolute -left-3 top-0 w-6 h-6 bg-indigo-500 rounded-full"></div>
            <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <span class="text-sm text-indigo-600 dark:text-indigo-400 font-semibold">2018 - 2022</span>
              <h3 class="text-xl font-bold mt-2 mb-2 text-gray-900 dark:text-white">University & Self-Learning</h3>
              <p class="text-gray-600 dark:text-gray-400 mb-3">
                Completed Bachelor's in Software Engineering while actively learning modern web technologies. 
                Built personal projects, contributed to open source, and participated in hackathons.
              </p>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">Dean's List</span>
                <span class="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 text-sm rounded-full">Hackathon Winner</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Achievements & Certifications -->
      <div class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Achievements & Certifications
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="achievement-card" data-aos="zoom-in">
            <div class="achievement-icon bg-yellow-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">AWS Certified</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Solutions Architect Associate certification demonstrating cloud expertise</p>
          </div>

          <div class="achievement-card" data-aos="zoom-in" data-aos-delay="100">
            <div class="achievement-icon bg-blue-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">University Excellence</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Dean's List for 6 consecutive semesters, President of Students Association</p>
          </div>

          <div class="achievement-card" data-aos="zoom-in" data-aos-delay="200">
            <div class="achievement-icon bg-green-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Innovation Award</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Best Innovation Award at Tech Conference 2023 for AI-powered solution</p>
          </div>

          <div class="achievement-card" data-aos="zoom-in" data-aos-delay="300">
            <div class="achievement-icon bg-purple-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Community Leader</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Mentored 10+ developers, speaker at 3 tech conferences</p>
          </div>

          <div class="achievement-card" data-aos="zoom-in" data-aos-delay="400">
            <div class="achievement-icon bg-red-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Open Source</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">500+ GitHub stars, contributions to major open source projects</p>
          </div>

          <div class="achievement-card" data-aos="zoom-in" data-aos-delay="500">
            <div class="achievement-icon bg-indigo-500">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
            </div>
            <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Business Impact</h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm">Delivered solutions generating $100k+ revenue for clients</p>
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
      <TestimonialsCarousel />
      
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
import TestimonialsCarousel from '../components/TestimonialsCarousel.vue'

export default {
  name: 'AboutPage',
  components: {
    TestimonialsCarousel
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

.btn-primary {
  @apply px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-300 shadow-lg inline-block;
}

.btn-secondary {
  @apply px-6 py-3 bg-transparent border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transform hover:scale-105 transition-all duration-300 inline-block;
}
</style>
