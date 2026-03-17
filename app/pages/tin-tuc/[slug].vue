<template>
  <div v-if="pending" class="min-h-screen pt-32 pb-12">
    <div class="container-custom max-w-4xl">
      <div class="animate-pulse flex flex-col gap-6">
        <div class="h-10 bg-gray-200 rounded w-3/4"></div>
        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
        <div class="w-full h-[400px] bg-gray-200 rounded-2xl mb-8"></div>
        <div class="h-4 bg-gray-200 rounded w-full"></div>
        <div class="h-4 bg-gray-200 rounded w-full"></div>
      </div>
    </div>
  </div>

  <article v-else-if="post" class="min-h-screen pt-32 pb-24 bg-white">
    <div class="container-custom max-w-4xl">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <NuxtLink to="/" class="hover:text-yellow-600 transition-colors">Trang chủ</NuxtLink>
        <span>/</span>
        <NuxtLink to="/tin-tuc" class="hover:text-yellow-600 transition-colors">Tin tức</NuxtLink>
        <span>/</span>
        <span class="text-gray-900 truncate">{{ post.title }}</span>
      </nav>

      <header class="mb-12">
        <div class="text-yellow-600 font-semibold tracking-wider uppercase text-sm mb-4">
          Bất động sản
        </div>
        <h1 class="text-3xl md:text-5xl font-bold mb-6 leading-tight">{{ post.title }}</h1>
        <div class="flex items-center gap-4 text-gray-500 text-sm border-y border-gray-100 py-4">
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            {{ new Date(post.created_at).toLocaleDateString('vi-VN') }}
          </div>
          <div class="flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            Ban biên tập Alize
          </div>
        </div>
      </header>

      <div class="relative w-full aspect-[2/1] rounded-2xl overflow-hidden mb-12 shadow-sm">
        <NuxtImg 
          :src="post.thumbnail" 
          :alt="post.title"
          class="w-full h-full object-cover"
          placeholder
          format="webp"
        />
      </div>

      <div class="prose prose-lg prose-gray max-w-none text-gray-700 leading-relaxed" v-html="post.content"></div>

      <!-- Share / Tags (Mock) -->
      <div class="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
        <div class="flex gap-2 text-sm font-medium">
          <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Đà Nẵng</span>
          <span class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full">Đầu tư</span>
        </div>
      </div>
    </div>
  </article>

  <div v-else class="min-h-screen pt-32 pb-12 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Không tìm thấy bài viết</h1>
      <NuxtLink to="/tin-tuc" class="btn-primary">Quay lại tin tức</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const route = useRoute()
const { data: post, pending } = await useFetch(`/api/posts/${route.params.slug}`)

// Breadcrumb Schema
const breadcrumbSchema = computed(() => {
  if (!post.value) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trang chủ',
        item: typeof window !== 'undefined' ? new URL('/', window.location.origin).href : '/'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tin tức',
        item: typeof window !== 'undefined' ? new URL('/tin-tuc', window.location.origin).href : '/tin-tuc'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.value.title
      }
    ]
  }
})

// Article Schema
const articleSchema = computed(() => {
  if (!post.value) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.value.title,
    image: post.value.thumbnail,
    datePublished: post.value.created_at,
    dateModified: post.value.created_at,
    author: [{
      '@type': 'Organization',
      name: 'Alize Đà Nẵng',
      url: typeof window !== 'undefined' ? window.location.origin : ''
    }]
  }
})

useHead({
  title: () => post.value ? post.value.title : 'Bài viết',
  meta: [
    { name: 'description', content: () => post.value ? post.value.title + ' - Đọc tiếp bài viết tại Alize Đà Nẵng.' : '' },
    { property: 'og:image', content: () => post.value ? post.value.thumbnail : '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: () => breadcrumbSchema.value ? JSON.stringify(breadcrumbSchema.value) : ''
    },
    {
      type: 'application/ld+json',
      children: () => articleSchema.value ? JSON.stringify(articleSchema.value) : ''
    }
  ]
})
</script>
