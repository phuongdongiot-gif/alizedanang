<template>
  <div class="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
    <Header />
    <main class="flex-grow pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { useHead } from '#imports'

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Alize Đà Nẵng` : 'Alize Đà Nẵng - Căn hộ nghỉ dưỡng cao cấp';
  },
  meta: [
    { name: 'description', content: 'Alize Đà Nẵng - Dự án bất động sản nghỉ dưỡng cao cấp tại trung tâm thành phố Đà Nẵng.' },
    { property: 'og:image', content: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80' },
    // Replace these placeholder contents with actual verification codes from Google/Bing
    { name: 'google-site-verification', content: 'YOUR_GOOGLE_VERIFICATION_CODE' },
    { name: 'msvalidate.01', content: 'YOUR_BING_VERIFICATION_CODE' }
  ],
  htmlAttrs: {
    lang: 'vi'
  }
})
</script>
