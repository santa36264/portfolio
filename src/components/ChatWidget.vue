<template>
  <!-- Floating Chat Button -->
  <div class="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3">

    <!-- Chat Panel -->
    <Transition name="chat-slide">
      <div
        v-if="isOpen"
        class="w-80 sm:w-96 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
        style="height: min(520px, calc(100vh - 100px)); transform-origin: bottom left;"
      >
        <!-- Header -->
        <div class="flex items-center justify-between px-4 py-3 bg-blue-600 dark:bg-blue-700">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <p class="text-white font-semibold text-sm">Groq AI</p>
              <p class="text-blue-200 text-xs">Fast & Free</p>
            </div>
          </div>
          <button @click="isOpen = false" class="text-white/70 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Messages -->
        <div ref="messagesContainer" class="flex-1 overflow-y-auto p-4 space-y-3 scroll-smooth min-h-0">
          <!-- Welcome message -->
          <div class="flex items-start gap-2">
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-3 py-2 max-w-[85%]">
              <p class="text-sm text-gray-800 dark:text-gray-200">
                Hi! I'm powered by Groq AI. Ask me anything about Semre's work, skills, or projects!
              </p>
            </div>
          </div>

          <!-- Chat messages -->
          <div
            v-for="(msg, i) in messages"
            :key="i"
            class="flex items-start gap-2"
            :class="msg.role === 'user' ? 'flex-row-reverse' : ''"
          >
            <!-- Avatar -->
            <div
              class="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
              :class="msg.role === 'user' ? 'bg-purple-600' : 'bg-blue-600'"
            >
              <svg v-if="msg.role === 'user'" class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <svg v-else class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <!-- Bubble -->
            <div
              class="px-3 py-2 rounded-2xl max-w-[85%] text-sm leading-relaxed whitespace-pre-wrap"
              :class="msg.role === 'user'
                ? 'bg-blue-600 text-white rounded-tr-none'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-tl-none'"
            >
              {{ msg.content }}
            </div>
          </div>

          <!-- Typing indicator -->
          <div v-if="isLoading" class="flex items-start gap-2">
            <div class="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl rounded-tl-none px-4 py-3">
              <div class="flex gap-1 items-center">
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 150ms"></span>
                <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 300ms"></span>
              </div>
            </div>
          </div>

          <!-- Error message -->
          <div v-if="errorMsg" class="text-center">
            <p class="text-xs text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/20 rounded-lg px-3 py-2">
              {{ errorMsg }}
            </p>
          </div>
        </div>

        <!-- Input Area -->
        <div class="p-3 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          <div class="flex gap-2 items-end">
            <textarea
              v-model="userInput"
              placeholder="Type a message..."
              rows="1"
              class="flex-1 text-sm px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
              style="max-height: 100px;"
              @keydown.enter.exact.prevent="sendMessage"
              @input="autoResize"
              ref="textareaRef"
            ></textarea>
            <button
              @click="sendMessage"
              :disabled="isLoading || !userInput.trim()"
              class="p-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex-shrink-0"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>

          <!-- Clear chat -->
          <div v-if="messages.length > 0" class="flex justify-end mt-2 px-1">
            <button @click="clearChat" class="text-xs text-gray-400 hover:text-red-500 transition-colors">
              Clear chat
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Toggle Button -->
    <button
      @click="isOpen = !isOpen"
      class="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 relative"
      :title="isOpen ? 'Close chat' : 'Chat with Groq AI'"
    >
      <!-- Pulse ring when closed -->
      <span v-if="!isOpen" class="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-30"></span>

      <Transition name="icon-swap" mode="out-in">
        <svg v-if="!isOpen" key="open" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <svg v-else key="close" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </Transition>
    </button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'

export default {
  name: 'ChatWidget',
  setup() {
    const isOpen = ref(false)
    const isLoading = ref(false)
    const userInput = ref('')
    const messages = ref([])
    const errorMsg = ref('')
    const messagesContainer = ref(null)
    const textareaRef = ref(null)

    const apiKey = import.meta.env.VITE_GROQ_API_KEY

    const systemPrompt = `You are a helpful AI assistant on Semre Demssie's portfolio website.
Semre is a Full-Stack Developer and Flutter Mobile Developer.
He specializes in Vue.js, Django, Node.js, Laravel, Flutter, and Firebase.
His projects include a Hotel Booking System, Task Manager App, E-Commerce Dashboard, Flutter Chat App, and Weather Dashboard.
You can answer questions about his skills, projects, and services, or help with general programming questions.
Keep responses concise and friendly.`

    const scrollToBottom = async () => {
      await nextTick()
      if (messagesContainer.value) {
        messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
      }
    }

    const autoResize = () => {
      const el = textareaRef.value
      if (el) {
        el.style.height = 'auto'
        el.style.height = Math.min(el.scrollHeight, 100) + 'px'
      }
    }

    const clearChat = () => {
      messages.value = []
      errorMsg.value = ''
    }

    const sendMessage = async () => {
      const text = userInput.value.trim()
      if (!text || isLoading.value) return

      errorMsg.value = ''
      messages.value.push({ role: 'user', content: text })
      userInput.value = ''

      if (textareaRef.value) {
        textareaRef.value.style.height = 'auto'
      }

      await scrollToBottom()
      isLoading.value = true

      try {
        // Groq uses OpenAI-compatible API format
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: systemPrompt },
              ...messages.value.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.content }))
            ],
            max_tokens: 1024,
            temperature: 0.7
          })
        })

        if (!response.ok) {
          const err = await response.json().catch(() => ({}))
          if (response.status === 401) {
            throw new Error('Invalid API key.')
          } else if (response.status === 429) {
            throw new Error('Rate limit reached. Please wait a moment and try again.')
          } else {
            throw new Error(err?.error?.message || `API error (${response.status})`)
          }
        }

        const data = await response.json()
        const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.'
        messages.value.push({ role: 'assistant', content: reply })
      } catch (err) {
        errorMsg.value = err.message || 'Something went wrong. Please try again.'
        messages.value.pop()
      } finally {
        isLoading.value = false
        await scrollToBottom()
      }
    }

    return {
      isOpen,
      isLoading,
      userInput,
      messages,
      errorMsg,
      messagesContainer,
      textareaRef,
      clearChat,
      sendMessage,
      autoResize
    }
  }
}
</script>

<style scoped>
.chat-slide-enter-active,
.chat-slide-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.chat-slide-enter-from,
.chat-slide-leave-to {
  opacity: 0;
  transform: translateY(16px) scale(0.97);
  transform-origin: bottom left;
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.15s ease;
}

.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.7) rotate(15deg);
}
</style>
