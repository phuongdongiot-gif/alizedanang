<template>
  <div class="pt-24 pb-24 bg-gray-50 min-h-screen">
    <div class="container-custom">
      <div class="max-w-3xl mb-12">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">Tin tức & Sự kiện</h1>
        <p class="text-gray-600 text-lg">Cập nhật những thông tin mới nhất về thị trường bất động sản và các dự án của Alize Đà Nẵng.</p>
      </div>

      <div v-if="pending" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="animate-pulse bg-white rounded-2xl p-4">
          <div class="bg-gray-200 aspect-[4/3] w-full rounded-xl mb-4"></div>
          <div class="h-6 bg-gray-200 rounded w-full mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-1/2"></div>
        </div>
      </div>

      <div v-else-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PostCard v-for="post in posts" :key="post.id" :post="post" class="flex-col !p-0 border-none shadow-sm hover:shadow-xl group" />
      </div>

      <div v-else class="text-center py-20">
        <p class="text-gray-500 text-lg">Chưa có bài viết nào.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: posts, pending } = await useFetch('/api/posts')

useHead({
  title: 'Tin tức & Sự kiện - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Cập nhật những thông tin mới nhất về dự án Alize Đà Nẵng và thị trường bất động sản.' }
  ]
})
</script>

<style scoped>
/* Adjust postcard for grid layout in this page specifically if needed */
:deep(.group) {
  display: flex !important;
  flex-direction: column !important;
}
:deep(.group > div:first-child) {
  width: 100% !important;
  border-radius: 1rem 1rem 0 0 !important;
}
:deep(.group > div:last-child) {
  padding: 1.5rem !important;
}
</style>
