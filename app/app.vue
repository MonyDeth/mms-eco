<template>
  <div>
    <!-- Loading screen -->
    <div
      ref="loader"
      class="fixed inset-0 z-50 flex items-center justify-center bg-[#093E65]"
    >
      <div ref="loaderContent" class="text-center text-white">
        <img
          src="/images/logo.png"
          alt="Logo"
          class="w-40 mx-auto mb-4 flicker"
        />
        <div class="text-xl font-siemreap py-4">{{ currentMessage }}</div>
      </div>
    </div>

    <!-- Actual page content with built-in page transition -->
    <PageTransition name="fade" mode="out-in">
      <NuxtPage />
    </PageTransition>
  </div>
</template>

<script setup>
import '~/assets/css/main.css'
import { ref, nextTick, onMounted } from 'vue'
import { gsap } from 'gsap'

definePageMeta({
  title: 'MMS Main',
})

const loader = ref(null)
const loaderContent = ref(null)

const loadingMessages = [
  'ចាំតិច មេ...',
  'ពេលវេលា មិនគួរជួប...',
  'ជីវិត គឺការរង់ចាំ...',
  'អត់ឆាតមួយssហេរ?...',
  'តក់ៗ ពេញបំពង់...'
]

const currentMessage = ref('')

onMounted(async () => {
  currentMessage.value =
    loadingMessages[Math.floor(Math.random() * loadingMessages.length)]

  await nextTick()

  requestAnimationFrame(() => {
    setTimeout(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          loader.value.style.display = 'none'
        },
      })

      tl.to(loaderContent.value, {
        scale: 1.4,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      })

      tl.to(
        loader.value,
        {
          opacity: 0,
          duration: 0.2,
          ease: 'power1.inOut',
        },
        '-=0.3'
      )
    }, 1500)
  })
})
</script>

<style scoped>
.flicker {
  animation: flicker 1.2s infinite ease-in-out;
}

@keyframes flicker {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

/* Simple fade page transition */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
