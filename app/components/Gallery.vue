<template>
  <div>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div 
        v-for="(image, index) in displayImages" 
        :key="index"
        class="relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group"
        :class="{ 'md:col-span-2 md:row-span-2 aspect-auto': index === 0 }"
        @click="openLightbox(index)"
      >
        <NuxtImg 
          :src="image" 
          alt="Gallery image" 
          class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          placeholder
          format="webp"
        />
        <div v-if="index === maxDisplay - 1 && hasMore" class="absolute inset-0 bg-black/60 flex items-center justify-center transition-colors group-hover:bg-black/70">
          <span class="text-white font-bold text-xl">+{{ images.length - maxDisplay }}</span>
        </div>
      </div>
    </div>

    <!-- Lightbox (Basic implementation) -->
    <Teleport to="body">
      <div v-if="lightboxOpen" class="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
        <button @click="closeLightbox" class="absolute top-6 right-6 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-[101]">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
        
        <button @click="prevImage" class="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 p-4 rounded-full transition-colors z-[101]" v-if="images.length > 1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        
        <div class="relative max-w-5xl w-full h-[80vh] flex items-center justify-center">
          <NuxtImg 
            :src="images[currentIndex]" 
            alt="Expanded gallery image"
            class="max-w-full max-h-full object-contain"
            format="webp"
            quality="90"
          />
        </div>
        
        <button @click="nextImage" class="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white bg-black/50 p-4 rounded-full transition-colors z-[101]" v-if="images.length > 1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/50 text-sm tracking-widest">
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  images: {
    type: Array,
    required: true,
    default: () => []
  },
  maxDisplay: {
    type: Number,
    default: 5
  }
})

const lightboxOpen = ref(false)
const currentIndex = ref(0) // Start at 0, not mapped id

const displayImages = computed(() => {
  return props.images.slice(0, props.maxDisplay)
})

const hasMore = computed(() => {
  return props.images.length > props.maxDisplay
})

const openLightbox = (index) => {
  currentIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = 'auto'
}

const prevImage = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = props.images.length - 1
  }
}

const nextImage = () => {
  if (currentIndex.value < props.images.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0
  }
}

const handleKeydown = (e) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowLeft') prevImage()
  if (e.key === 'ArrowRight') nextImage()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
