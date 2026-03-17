<template>
  <NuxtLink :to="`/du-an/${project.slug}`" class="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div class="relative overflow-hidden aspect-[4/3]">
      <NuxtImg 
        :src="project.thumbnail" 
        :alt="project.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        width="600"
        height="450"
        placeholder
        format="webp"
      />
      <div class="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full shadow-sm">
        Nổi bật
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 text-gray-500 text-sm mb-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        {{ project.location }}
      </div>
      <h3 class="text-xl font-bold mb-2 group-hover:text-yellow-600 transition-colors">{{ project.name }}</h3>
      <p class="text-gray-600 text-sm line-clamp-2 mb-4">{{ project.description }}</p>
      <div class="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
        <span class="font-bold text-gray-900 text-lg">{{ project.price }}</span>
        <span class="text-yellow-600 hover:text-yellow-700 text-sm font-medium flex items-center gap-1">
          Chi tiết <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true
  }
})
</script>
