<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden relative">
    <!-- Animated Background -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob"></div>
      <div class="absolute top-40 right-10 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div class="absolute bottom-20 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-400 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
    </div>
    
    <div class="max-w-7xl mx-auto relative z-10">
      <!-- Page Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Blog & Articles
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Thoughts, tutorials, and insights about web development and technology
        </p>
      </div>

      <!-- Featured Post -->
      <div v-if="featuredPost" class="mb-16" data-aos="fade-up">
        <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl cursor-pointer transform hover:scale-105 transition-all duration-300" @click="goToPost(featuredPost.slug)">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="h-64 lg:h-auto overflow-hidden">
              <img 
                src="https://picsum.photos/seed/coding/800/600" 
                alt="Featured Article"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <span class="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">FEATURED</span>
              <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {{ featuredPost.title }}
              </h2>
              <p class="text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                {{ featuredPost.excerpt }}
              </p>
              <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>{{ featuredPost.date }}</span>
                <span>•</span>
                <span>{{ featuredPost.readTime }} min read</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Blog Posts Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="(post, index) in posts" 
          :key="post.slug"
          class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
          @click="goToPost(post.slug)"
        >
          <div class="h-48 overflow-hidden">
            <img 
              :src="post.image" 
              :alt="post.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          <div class="p-6">
            <span class="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">
              {{ post.category }}
            </span>
            
            <h3 class="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white line-clamp-2">
              {{ post.title }}
            </h3>
            
            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
              {{ post.excerpt }}
            </p>
            
            <div class="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
              <span>{{ post.date }}</span>
              <span>{{ post.readTime }} min read</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Newsletter Section -->
      <div class="mt-16 text-center bg-blue-600 dark:bg-blue-700 rounded-2xl p-12" data-aos="zoom-in">
        <h2 class="text-3xl font-bold text-white mb-4">
          Subscribe to My Newsletter
        </h2>
        <p class="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
          Get the latest articles and tutorials delivered to your inbox
        </p>
        <div class="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            placeholder="Your email address"
            class="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button class="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: 'Blog',
  setup() {
    const router = useRouter()
    
    const featuredPost = {
      slug: 'building-modern-web-apps-with-vue',
      title: 'Building Modern Web Applications with Vue.js 3',
      excerpt: 'Learn how to build scalable and performant web applications using Vue.js 3 Composition API, Vite, and modern development practices.',
      date: 'March 15, 2024',
      readTime: 8,
      category: 'Web Development'
    }
    
    const posts = [
      {
        slug: 'flutter-best-practices',
        title: 'Flutter Development Best Practices for 2024',
        excerpt: 'Discover the latest best practices and patterns for building production-ready Flutter applications.',
        date: 'March 10, 2024',
        readTime: 6,
        category: 'Mobile Development',
        image: 'https://picsum.photos/seed/flutter/800/600'
      },
      {
        slug: 'rest-api-design-principles',
        title: 'RESTful API Design Principles Every Developer Should Know',
        excerpt: 'A comprehensive guide to designing clean, maintainable, and scalable REST APIs.',
        date: 'March 5, 2024',
        readTime: 10,
        category: 'Backend',
        image: 'https://picsum.photos/seed/api/800/600'
      },
      {
        slug: 'tailwind-css-tips',
        title: '10 Tailwind CSS Tips to Speed Up Your Development',
        excerpt: 'Boost your productivity with these essential Tailwind CSS tips and tricks.',
        date: 'February 28, 2024',
        readTime: 5,
        category: 'CSS',
        image: 'https://picsum.photos/seed/css/800/600'
      },
      {
        slug: 'django-performance-optimization',
        title: 'Django Performance Optimization Techniques',
        excerpt: 'Learn how to optimize your Django applications for better performance and scalability.',
        date: 'February 20, 2024',
        readTime: 12,
        category: 'Backend',
        image: 'https://picsum.photos/seed/django/800/600'
      },
      {
        slug: 'responsive-design-2024',
        title: 'Responsive Web Design in 2024: A Complete Guide',
        excerpt: 'Master responsive design with modern CSS techniques and best practices.',
        date: 'February 15, 2024',
        readTime: 7,
        category: 'Web Development',
        image: 'https://picsum.photos/seed/responsive/800/600'
      },
      {
        slug: 'firebase-flutter-integration',
        title: 'Integrating Firebase with Flutter: A Step-by-Step Guide',
        excerpt: 'Complete guide to integrating Firebase services in your Flutter applications.',
        date: 'February 10, 2024',
        readTime: 9,
        category: 'Mobile Development',
        image: 'https://picsum.photos/seed/firebase/800/600'
      }
    ]
    
    const goToPost = (slug) => {
      router.push({ name: 'BlogPost', params: { slug } })
    }
    
    return {
      featuredPost,
      posts,
      goToPost
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
</style>
