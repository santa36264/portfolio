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
            <span>{{ formatDate(post.publishedAt) }}</span>
            <span>•</span>
            <span>{{ post.readingTime }} min read</span>
            <span>•</span>
            <span class="flex items-center gap-1">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
              {{ post.views }} views
            </span>
          </div>
        </div>

        <!-- Featured Image -->
        <div class="mb-12 rounded-2xl overflow-hidden shadow-2xl" data-aos="zoom-in">
          <img 
            :src="post.image" 
            :alt="post.title"
            class="w-full h-96 object-cover"
          />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300 leading-relaxed space-y-6" v-html="post.content"></div>

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
import { blogPosts } from '../data/blogData.js'

export default {
  name: 'BlogPost',
  setup() {
    const route = useRoute()
    const post = ref(null)
    
    onMounted(() => {
      const slug = route.params.slug
      post.value = blogPosts.find(p => p.slug === slug) || null
    })

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
    
    return {
      post,
      formatDate
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
