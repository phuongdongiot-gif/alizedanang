<template>
  <NuxtLink :to="`/tin-tuc/${post.slug}`" class="group flex flex-col sm:flex-row gap-6 bg-white p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-gray-100">
    <div class="sm:w-1/3 aspect-[4/3] rounded-xl overflow-hidden shrink-0">
      <NuxtImg 
        :src="post.thumbnail" 
        :alt="post.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        width="400"
        height="300"
        placeholder
        format="webp"
        loading="lazy"
      />
    </div>
    <div class="flex flex-col justify-center flex-1">
      <div class="text-sm font-semibold text-yellow-600 tracking-wider uppercase mb-2">
        Tin tức
      </div>
      <h3 class="text-xl font-bold mb-3 group-hover:text-yellow-600 transition-colors line-clamp-2">{{ post.title }}</h3>
      <div class="text-gray-500 text-sm flex items-center gap-2 mt-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        {{ new Date(post.created_at).toLocaleDateString('vi-VN') }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>
