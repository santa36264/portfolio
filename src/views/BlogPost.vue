<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-4xl mx-auto relative z-10">
      <!-- Back Button -->
      <button 
        @click="$router.back()"
        class="mb-8 flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:gap-3 transition-all"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </button>

      <article v-if="post" class="prose prose-lg dark:prose-invert max-w-none">
        <!-- Article Header -->
        <div class="mb-8" data-aos="fade-up">
          <span class="text-sm text-blue-600 dark:text-blue-400 font-semibold uppercase">
            {{ post.category }}
          </span>
          
          <h1 class="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-gray-900 dark:text-white">
            {{ post.title }}
          </h1>
          
          <div class="flex items-center gap-4 text-gray-600 dark:text-gray-400">
            <span>{{ post.date }}</span>
            <span>•</span>
            <span>{{ post.readTime }} min read</span>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in">
          <img 
            src="https://picsum.photos/seed/article/1200/800" 
            alt="Article Cover"
            class="w-full h-96 object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="text-gray-700 dark:text-gray-300 leading-relaxed space-y-6" v-html="post.content"></div>

        <!-- Tags -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Tags</h3>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="tag in post.tags" 
              :key="tag"
              class="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Share Section -->
        <div class="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Share this article</h3>
          <div class="flex gap-4">
            <button class="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button class="p-3 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </button>
            <button class="p-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
          </div>
        </div>
      </article>

      <!-- Post Not Found -->
      <div v-else class="text-center py-20">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Article Not Found
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-8">
          The article you're looking for doesn't exist.
        </p>
        <router-link to="/blog" class="btn-primary">
          Back to Blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'BlogPost',
  setup() {
    const route = useRoute()
    const post = ref(null)
    
    const posts = {
      'building-modern-web-apps-with-vue': {
        title: 'Building Modern Web Applications with Vue.js 3',
        category: 'Web Development',
        date: 'March 15, 2024',
        readTime: 8,
        tags: ['Vue.js', 'JavaScript', 'Web Development', 'Frontend'],
        content: `
          <p>Vue.js 3 has revolutionized the way we build modern web applications. With the introduction of the Composition API, improved TypeScript support, and better performance, Vue 3 is more powerful than ever.</p>
          
          <h2>Why Vue.js 3?</h2>
          <p>Vue.js 3 brings several improvements over Vue 2, including better performance, smaller bundle sizes, and improved TypeScript support. The Composition API provides a more flexible way to organize component logic.</p>
          
          <h2>Getting Started</h2>
          <p>To start building with Vue 3, you'll need Node.js installed on your machine. You can create a new project using Vite, which provides lightning-fast development experience.</p>
          
          <pre><code>npm create vite@latest my-vue-app -- --template vue
cd my-vue-app
npm install
npm run dev</code></pre>
          
          <h2>Composition API</h2>
          <p>The Composition API is one of the most significant additions to Vue 3. It allows you to organize component logic by feature rather than by option type, making your code more maintainable and reusable.</p>
          
          <h2>Best Practices</h2>
          <ul>
            <li>Use the Composition API for complex components</li>
            <li>Leverage TypeScript for better type safety</li>
            <li>Implement proper state management with Pinia</li>
            <li>Optimize performance with lazy loading</li>
            <li>Write comprehensive tests</li>
          </ul>
          
          <h2>Conclusion</h2>
          <p>Vue.js 3 is an excellent choice for building modern web applications. Its simplicity, flexibility, and powerful features make it a joy to work with. Start building your next project with Vue 3 today!</p>
        `
      },
      'flutter-best-practices': {
        title: 'Flutter Development Best Practices for 2024',
        category: 'Mobile Development',
        date: 'March 10, 2024',
        readTime: 6,
        tags: ['Flutter', 'Mobile', 'Dart', 'Best Practices'],
        content: `
          <p>Flutter has become one of the most popular frameworks for building cross-platform mobile applications. Here are the best practices you should follow in 2024.</p>
          
          <h2>Project Structure</h2>
          <p>Organize your Flutter project with a clear folder structure. Separate your code into features, models, services, and widgets for better maintainability.</p>
          
          <h2>State Management</h2>
          <p>Choose the right state management solution for your app. Popular options include Provider, Riverpod, Bloc, and GetX. Each has its strengths depending on your project needs.</p>
          
          <h2>Performance Optimization</h2>
          <ul>
            <li>Use const constructors wherever possible</li>
            <li>Implement lazy loading for large lists</li>
            <li>Optimize images and assets</li>
            <li>Profile your app regularly</li>
          </ul>
          
          <h2>Testing</h2>
          <p>Write unit tests, widget tests, and integration tests to ensure your app works correctly across different scenarios.</p>
        `
      },
      'rest-api-design-principles': {
        title: 'RESTful API Design Principles Every Developer Should Know',
        category: 'Backend',
        date: 'March 5, 2024',
        readTime: 10,
        tags: ['API', 'REST', 'Backend', 'Web Services'],
        content: `
          <p>Designing a good RESTful API is crucial for building scalable and maintainable web services. Here are the key principles you should follow.</p>
          
          <h2>Use HTTP Methods Correctly</h2>
          <ul>
            <li>GET - Retrieve resources</li>
            <li>POST - Create new resources</li>
            <li>PUT - Update entire resources</li>
            <li>PATCH - Partial updates</li>
            <li>DELETE - Remove resources</li>
          </ul>
          
          <h2>Resource Naming</h2>
          <p>Use nouns for resource names, not verbs. Keep URLs simple and intuitive. Use plural nouns for collections.</p>
          
          <h2>Status Codes</h2>
          <p>Return appropriate HTTP status codes: 200 for success, 201 for created, 400 for bad requests, 404 for not found, 500 for server errors.</p>
          
          <h2>Versioning</h2>
          <p>Always version your API to maintain backward compatibility. Use URL versioning like /api/v1/ or header versioning.</p>
        `
      },
      'tailwind-css-tips': {
        title: '10 Tailwind CSS Tips to Speed Up Your Development',
        category: 'CSS',
        date: 'February 28, 2024',
        readTime: 5,
        tags: ['Tailwind', 'CSS', 'Frontend', 'Tips'],
        content: `
          <p>Tailwind CSS is a powerful utility-first CSS framework. Here are 10 tips to make you more productive.</p>
          
          <h2>1. Use @apply for Repeated Patterns</h2>
          <p>Extract common utility combinations into custom classes using @apply directive.</p>
          
          <h2>2. Customize Your Config</h2>
          <p>Extend Tailwind's default theme in tailwind.config.js to match your design system.</p>
          
          <h2>3. Use JIT Mode</h2>
          <p>Just-In-Time mode generates styles on-demand, resulting in faster build times and smaller CSS files.</p>
          
          <h2>4. Leverage Plugins</h2>
          <p>Use official and community plugins to extend Tailwind's functionality.</p>
          
          <h2>5. Responsive Design</h2>
          <p>Use responsive prefixes (sm:, md:, lg:, xl:) to create mobile-first designs easily.</p>
        `
      },
      'django-performance-optimization': {
        title: 'Django Performance Optimization Techniques',
        category: 'Backend',
        date: 'February 20, 2024',
        readTime: 12,
        tags: ['Django', 'Python', 'Performance', 'Optimization'],
        content: `
          <p>Django is a powerful web framework, but it needs proper optimization for production applications. Here's how to make your Django app faster.</p>
          
          <h2>Database Optimization</h2>
          <ul>
            <li>Use select_related() and prefetch_related() to reduce queries</li>
            <li>Add database indexes on frequently queried fields</li>
            <li>Use database connection pooling</li>
            <li>Implement query result caching</li>
          </ul>
          
          <h2>Caching Strategies</h2>
          <p>Implement caching at multiple levels: database queries, template fragments, and full pages. Use Redis or Memcached for distributed caching.</p>
          
          <h2>Static Files</h2>
          <p>Use a CDN for static files, enable compression, and implement browser caching headers.</p>
          
          <h2>Async Views</h2>
          <p>Use Django's async views for I/O-bound operations to improve concurrency.</p>
        `
      },
      'responsive-design-2024': {
        title: 'Responsive Web Design in 2024: A Complete Guide',
        category: 'Web Development',
        date: 'February 15, 2024',
        readTime: 7,
        tags: ['Responsive', 'CSS', 'Web Design', 'Mobile'],
        content: `
          <p>Responsive web design is more important than ever. Here's everything you need to know in 2024.</p>
          
          <h2>Mobile-First Approach</h2>
          <p>Start designing for mobile devices first, then progressively enhance for larger screens.</p>
          
          <h2>Modern CSS Features</h2>
          <ul>
            <li>CSS Grid for complex layouts</li>
            <li>Flexbox for flexible components</li>
            <li>Container queries for component-based responsiveness</li>
            <li>CSS custom properties for dynamic theming</li>
          </ul>
          
          <h2>Breakpoints</h2>
          <p>Use meaningful breakpoints based on content, not specific devices. Common breakpoints: 640px, 768px, 1024px, 1280px.</p>
          
          <h2>Testing</h2>
          <p>Test on real devices, use browser dev tools, and implement automated responsive testing.</p>
        `
      },
      'firebase-flutter-integration': {
        title: 'Integrating Firebase with Flutter: A Step-by-Step Guide',
        category: 'Mobile Development',
        date: 'February 10, 2024',
        readTime: 9,
        tags: ['Firebase', 'Flutter', 'Mobile', 'Backend'],
        content: `
          <p>Firebase provides a complete backend solution for Flutter apps. Here's how to integrate it step by step.</p>
          
          <h2>Setup Firebase Project</h2>
          <p>Create a new Firebase project in the Firebase Console, then add your Flutter app for both iOS and Android.</p>
          
          <h2>Install Dependencies</h2>
          <pre><code>flutter pub add firebase_core
flutter pub add firebase_auth
flutter pub add cloud_firestore</code></pre>
          
          <h2>Initialize Firebase</h2>
          <p>Initialize Firebase in your main.dart file before running the app.</p>
          
          <h2>Authentication</h2>
          <p>Implement email/password authentication, Google Sign-In, or other providers using Firebase Auth.</p>
          
          <h2>Firestore Database</h2>
          <p>Use Cloud Firestore for real-time data synchronization across devices.</p>
        `
      }
    }
    
    onMounted(() => {
      const slug = route.params.slug
      post.value = posts[slug] || null
    })
    
    return {
      post
    }
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
</style>
