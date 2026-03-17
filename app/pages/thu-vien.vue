<template>
  <div class="pt-24 pb-24 min-h-screen bg-gray-50">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm block mb-2">Hình ảnh thực tế</span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Thư viện truyền thông</h1>
        <p class="text-gray-600 text-lg">Góc nhìn đa chiều về dự án Alize Đà Nẵng qua những khung hình tuyệt mỹ nhất.</p>
      </div>

      <!-- Categories Filter -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          @click="currentCategory = cat.id"
          class="px-5 py-2 rounded-full font-medium transition-all duration-300 text-sm"
          :class="currentCategory === cat.id ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- We re-use the Gallery component, but pass all images -->
      <Gallery :images="filteredImages" :max-display="20" class="gallery-grid-override" />
      
      <div v-if="filteredImages.length === 0" class="text-center py-20 text-gray-500">
        Không có hình ảnh cho danh mục này.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

useHead({
  title: 'Thư viện ảnh - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Thư viện hình ảnh phối cảnh, tiến độ thi công và nội thất của dự án bất động sản nghỉ dưỡng Alize Đà Nẵng.' }
  ]
})

const categories = [
  { id: 'all', label: 'Tất cả' },
  { id: 'phoicanh', label: 'Phối cảnh' },
  { id: 'noithat', label: 'Nội thất' },
  { id: 'tienich', label: 'Tiện ích' },
  { id: 'tiendo', label: 'Tiến độ' }
]

const currentCategory = ref('all')

const allImages = [
  { src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'phoicanh' },
  { src: 'https://images.unsplash.com/photo-1600607687931-cecebd802404?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'phoicanh' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'noithat' },
  { src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'tienich' },
  { src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'tienich' },
  { src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'noithat' },
  { src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'tiendo' },
  { src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'noithat' },
  { src: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80', cat: 'tienich' }
]

const filteredImages = computed(() => {
  if (currentCategory.value === 'all') {
    return allImages.map(img => img.src)
  }
  return allImages.filter(img => img.cat === currentCategory.value).map(img => img.src)
})
</script>

<style scoped>
/* Override gallery component specifically for this page so it doesn't span giant rows */
:deep(.gallery-grid-override .grid > div:first-child) {
  grid-column: span 1 !important;
  grid-row: span 1 !important;
  aspect-ratio: 4/3 !important;
}
:deep(.gallery-grid-override .grid) {
  grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
}
@media (min-width: 768px) {
  :deep(.gallery-grid-override .grid) {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}
@media (min-width: 1024px) {
  :deep(.gallery-grid-override .grid) {
    grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
  }
}
</style>
