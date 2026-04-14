<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0 z-0">
        <NuxtImg 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Alize Da Nang Hero" 
          class="w-full h-full object-cover"
          placeholder
          format="webp"
          preload
        />
        <div class="absolute inset-0 bg-gray-900/40"></div>
      </div>
      
      <div class="container-custom relative z-10 text-center text-white">
        <h1 class="text-5xl md:text-7xl font-bold mb-6 tracking-tight">Khu nghỉ dưỡng<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-500">Đẳng cấp bậc nhất</span></h1>
        <p class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto font-light text-gray-200">
          Chạm đến tầm cao mới của cuộc sống phồn vinh ngay giữa lòng thành phố biển Đà Nẵng xinh đẹp.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink to="/du-an/alize-da-nang" class="btn-primary bg-yellow-600 hover:bg-yellow-700 text-white border-none py-4 px-8 text-lg shadow-lg">Khám phá ngay</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Featured Projects / Overview -->
    <section class="py-24 bg-white">
      <div class="container-custom">
        <div class="text-center max-w-3xl mx-auto mb-16">
          <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Về dự án</span>
          <h2 class="text-4xl font-bold mt-3 mb-6">Biểu tượng mới của Đà Nẵng</h2>
          <p class="text-gray-600 text-lg">
            Khám phá những căn hộ nghỉ dưỡng với tầm nhìn toàn cảnh biển Mỹ Khê. Thiết kế tinh tế, tiện nghi 5 sao, mang đến không gian sống hoàn hảo cho giới tinh hoa.
          </p>
        </div>

        <div v-if="pending" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="i in 3" :key="i" class="animate-pulse flex flex-col gap-4">
            <div class="bg-gray-200 aspect-[4/3] rounded-xl"></div>
            <div class="h-6 bg-gray-200 rounded w-3/4"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>

        <div v-else-if="projects && projects.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>

    <!-- Latest News -->
    <section class="py-24 bg-gray-50">
      <div class="container-custom">
        <div class="flex items-end justify-between mb-12">
          <div>
            <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm">Tin tức</span>
            <h2 class="text-4xl font-bold mt-3">Sự kiện nổi bật</h2>
          </div>
          <NuxtLink to="/tin-tuc" class="text-gray-600 hover:text-gray-900 font-medium hidden sm:flex items-center gap-1">
            Xem tất cả <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>

        <div v-if="postsPending" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="i in 2" :key="i" class="animate-pulse flex gap-4">
            <div class="bg-gray-200 aspect-[4/3] w-1/3 rounded-xl"></div>
            <div class="flex-1 flex flex-col gap-2">
              <div class="h-6 bg-gray-200 rounded w-full"></div>
              <div class="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        </div>

        <div v-else-if="posts && posts.length" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <PostCard v-for="post in posts.slice(0, 2)" :key="post.id" :post="post" />
        </div>
        
        <div class="mt-8 text-center sm:hidden">
          <NuxtLink to="/tin-tuc" class="btn-outline">Xem tất cả tin tức</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const { data: projects, pending } = await useFetch('/api/projects')
const { data: posts, pending: postsPending } = await useFetch('/api/posts')

useHead({
  title: 'Trang chủ',
  meta: [
    { name: 'description', content: 'Khám phá Alize Đà Nẵng - Căn hộ nghỉ dưỡng cao cấp tại trung tâm thành phố biển Đà Nẵng với tiện ích 5 sao và view biển ngoạn mục.' }
  ]
})
</script>
