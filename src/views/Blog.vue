<template>
  <div class="min-h-screen pt-20 pb-12 px-4 sm:px-6 lg:px-8 w-full overflow-x-hidden bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12" data-aos="fade-up">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-900 dark:text-white">
          Technical Blog
        </h1>
        <p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          Insights, tutorials, and best practices from my development journey. 
          Sharing knowledge about modern web development, mobile apps, and software architecture.
        </p>
        
        <!-- Newsletter Signup -->
        <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Stay Updated
          </h3>
          <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
            Get notified when I publish new articles
          </p>
          <form @submit.prevent="subscribeNewsletter" class="flex gap-2">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              class="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-sm"
              required
            />
            <button
              type="submit"
              :disabled="isSubscribing"
              class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium disabled:opacity-50"
            >
              {{ isSubscribing ? 'Subscribing...' : 'Subscribe' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Featured Posts -->
      <section v-if="featuredPosts.length > 0" class="mb-16" data-aos="fade-up">
        <h2 class="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Featured Articles</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <article
            v-for="post in featuredPosts"
            :key="post.id"
            class="group cursor-pointer"
            @click="navigateToPost(post.slug)"
          >
            <div class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700">
              <div class="relative h-64 overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div class="absolute bottom-4 left-4">
                  <span class="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {{ post.category }}
                  </span>
                </div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>•</span>
                  <span>{{ post.readingTime }} min read</span>
                  <span>•</span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ post.views }}
                  </span>
                </div>
                
                <h3 class="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {{ post.excerpt }}
                </p>
                
                <div class="flex flex-wrap gap-2 mb-4">
                  <span
                    v-for="tag in post.tags.slice(0, 3)"
                    :key="tag"
                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                  >
                    {{ tag }}
                  </span>
                </div>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <img
                      src="/download.png"
                      alt="Semre Demssie"
                      class="w-8 h-8 rounded-full"
                    />
                    <span class="text-sm text-gray-700 dark:text-gray-300">{{ post.author }}</span>
                  </div>
                  
                  <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <button @click.stop="toggleLike(post)" class="flex items-center gap-1 hover:text-red-500 transition-colors">
                      <svg class="w-4 h-4" :class="post.liked ? 'text-red-500 fill-current' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                      </svg>
                      {{ post.likes }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Filters and Search -->
      <div class="flex flex-col lg:flex-row gap-8 mb-8" data-aos="fade-up">
        <!-- Categories Filter -->
        <div class="lg:w-1/4">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 sticky top-24">
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Categories</h3>
            <div class="space-y-2">
              <button
                v-for="category in blogCategories"
                :key="category.name"
                @click="selectedCategory = category.name"
                class="w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between"
                :class="selectedCategory === category.name 
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200' 
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                <span>{{ category.name }}</span>
                <span class="text-sm">{{ category.count }}</span>
              </button>
            </div>
            
            <hr class="my-6 border-gray-200 dark:border-gray-700">
            
            <h3 class="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Popular Tags</h3>
            <div class="flex flex-wrap gap-2">
              <button
                v-for="tag in popularTags.slice(0, 12)"
                :key="tag"
                @click="toggleTag(tag)"
                class="px-3 py-1 text-sm rounded-full transition-colors"
                :class="selectedTags.includes(tag)
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'"
              >
                {{ tag }}
              </button>
            </div>
          </div>
        </div>

        <!-- Main Content -->
        <div class="lg:w-3/4">
          <!-- Search Bar -->
          <div class="mb-8">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search articles..."
                class="w-full px-4 py-3 pl-12 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
              <svg class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>

          <!-- Sort Options -->
          <div class="flex items-center justify-between mb-8">
            <p class="text-gray-600 dark:text-gray-400">
              Showing {{ filteredPosts.length }} article{{ filteredPosts.length !== 1 ? 's' : '' }}
            </p>
            <select
              v-model="sortBy"
              class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="popular">Most Popular</option>
              <option value="reading-time">Reading Time</option>
            </select>
          </div>

          <!-- Blog Posts Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article
              v-for="post in paginatedPosts"
              :key="post.id"
              class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 cursor-pointer group"
              @click="navigateToPost(post.slug)"
            >
              <div class="relative h-48 overflow-hidden">
                <img
                  :src="post.image"
                  :alt="post.title"
                  class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div class="absolute top-4 left-4">
                  <span class="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {{ post.category }}
                  </span>
                </div>
              </div>
              
              <div class="p-6">
                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span>•</span>
                  <span>{{ post.readingTime }} min read</span>
                </div>
                
                <h3 class="text-lg font-bold mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {{ post.title }}
                </h3>
                
                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                  {{ post.excerpt }}
                </p>
                
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                    </svg>
                    {{ post.views }}
                  </div>
                  
                  <button @click.stop="toggleLike(post)" class="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-red-500 transition-colors">
                    <svg class="w-4 h-4" :class="post.liked ? 'text-red-500 fill-current' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    {{ post.likes }}
                  </button>
                </div>
              </div>
            </article>
          </div>

          <!-- Pagination -->
          <div v-if="totalPages > 1" class="flex justify-center mt-12">
            <div class="flex gap-2">
              <button
                @click="currentPage = Math.max(1, currentPage - 1)"
                :disabled="currentPage === 1"
                class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Previous
              </button>
              
              <button
                v-for="page in visiblePages"
                :key="page"
                @click="currentPage = page"
                class="px-3 py-2 border rounded-lg transition-colors"
                :class="currentPage === page 
                  ? 'bg-blue-600 text-white border-blue-600' 
                  : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'"
              >
                {{ page }}
              </button>
              
              <button
                @click="currentPage = Math.min(totalPages, currentPage + 1)"
                :disabled="currentPage === totalPages"
                class="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import { blogPosts, blogCategories, popularTags } from '../data/blogData.js'

export default {
  name: 'Blog',
  setup() {
    const router = useRouter()
    
    // Reactive state
    const searchQuery = ref('')
    const selectedCategory = ref('All')
    const selectedTags = ref([])
    const sortBy = ref('newest')
    const currentPage = ref(1)
    const postsPerPage = 6
    const email = ref('')
    const isSubscribing = ref(false)

    // Featured posts
    const featuredPosts = computed(() => 
      blogPosts.filter(post => post.featured)
    )

    // Filtered posts
    const filteredPosts = computed(() => {
      let posts = [...blogPosts]

      // Filter by category
      if (selectedCategory.value !== 'All') {
        posts = posts.filter(post => post.category === selectedCategory.value)
      }

      // Filter by tags
      if (selectedTags.value.length > 0) {
        posts = posts.filter(post => 
          selectedTags.value.some(tag => post.tags.includes(tag))
        )
      }

      // Filter by search query
      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase()
        posts = posts.filter(post =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some(tag => tag.toLowerCase().includes(query))
        )
      }

      // Sort posts
      switch (sortBy.value) {
        case 'newest':
          posts.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
          break
        case 'oldest':
          posts.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt))
          break
        case 'popular':
          posts.sort((a, b) => b.views - a.views)
          break
        case 'reading-time':
          posts.sort((a, b) => a.readingTime - b.readingTime)
          break
      }

      return posts
    })

    // Pagination
    const totalPages = computed(() => Math.ceil(filteredPosts.value.length / postsPerPage))
    
    const paginatedPosts = computed(() => {
      const start = (currentPage.value - 1) * postsPerPage
      return filteredPosts.value.slice(start, start + postsPerPage)
    })

    const visiblePages = computed(() => {
      const pages = []
      const start = Math.max(1, currentPage.value - 2)
      const end = Math.min(totalPages.value, start + 4)
      
      for (let i = start; i <= end; i++) {
        pages.push(i)
      }
      return pages
    })

    // Watch for filter changes to reset pagination
    watch([selectedCategory, selectedTags, searchQuery, sortBy], () => {
      currentPage.value = 1
    })

    // Methods
    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    const navigateToPost = (slug) => {
      router.push(`/blog/${slug}`)
    }

    const toggleTag = (tag) => {
      const index = selectedTags.value.indexOf(tag)
      if (index > -1) {
        selectedTags.value.splice(index, 1)
      } else {
        selectedTags.value.push(tag)
      }
    }

    const toggleLike = (post) => {
      post.liked = !post.liked
      post.likes += post.liked ? 1 : -1
    }

    const subscribeNewsletter = async () => {
      isSubscribing.value = true
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        alert('Thank you for subscribing! You\'ll receive notifications about new articles.')
        email.value = ''
      } catch (error) {
        alert('Failed to subscribe. Please try again.')
      } finally {
        isSubscribing.value = false
      }
    }

    return {
      // Data
      blogPosts,
      blogCategories,
      popularTags,
      featuredPosts,
      filteredPosts,
      paginatedPosts,
      totalPages,
      visiblePages,
      
      // State
      searchQuery,
      selectedCategory,
      selectedTags,
      sortBy,
      currentPage,
      email,
      isSubscribing,
      
      // Methods
      formatDate,
      navigateToPost,
      toggleTag,
      toggleLike,
      subscribeNewsletter
    }
  }
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>