<template>
  <div v-if="pending" class="min-h-screen pt-24 pb-12">
    <div class="container-custom">
      <div class="animate-pulse flex flex-col gap-6">
        <div class="h-10 bg-gray-200 rounded w-1/3"></div>
        <div class="h-6 bg-gray-200 rounded w-1/4"></div>
        <div class="w-full h-[500px] bg-gray-200 rounded-2xl"></div>
      </div>
    </div>
  </div>

  <div v-else-if="project" class="pb-24">
    <!-- Hero Image -->
    <section class="relative h-[60vh] min-h-[500px] w-full">
      <NuxtImg 
        :src="project.thumbnail" 
        :alt="project.name"
        class="w-full h-full object-cover"
        placeholder
        format="webp"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      <div class="absolute bottom-0 left-0 w-full p-8 md:p-16 text-white pb-12">
        <div class="container-custom">
          <div class="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500 text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
            Đang mở bán
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-4">{{ project.name }}</h1>
          <div class="flex items-center gap-6 text-sm md:text-base font-medium text-gray-200">
            <span class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-500"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              {{ project.location }}
            </span>
            <span class="flex items-center gap-2 font-bold text-yellow-500 text-xl">
              {{ project.price }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation Tabs -->
    <div class="sticky top-20 z-40 bg-white border-b border-gray-200 shadow-sm hidden md:block">
      <div class="container-custom">
        <nav class="flex gap-8">
          <a href="#tong-quan" class="py-4 text-sm font-semibold text-gray-900 border-b-2 border-yellow-600">Tổng quan</a>
          <a href="#thu-vien" class="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Thư viện ảnh</a>
          <a href="#vi-tri" class="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Vị trí</a>
          <a href="#cau-hoi" class="py-4 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Câu hỏi thường gặp</a>
        </nav>
      </div>
    </div>

    <div class="container-custom pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <div class="lg:col-span-2 space-y-16">
          <section id="tong-quan">
            <h2 class="text-3xl font-bold mb-6">Tổng quan dự án</h2>
            <div class="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed" v-html="project.content"></div>
          </section>

          <section id="thu-vien" v-if="project.gallery && project.gallery.length">
            <h2 class="text-3xl font-bold mb-6">Thư viện ảnh</h2>
            <Gallery :images="project.gallery" :max-display="5" />
          </section>

          <section id="vi-tri">
            <h2 class="text-3xl font-bold mb-6">Vị trí & Tiện ích xung quanh</h2>
            <p class="text-gray-600 mb-6">Tọa lạc tại {{ project.location }}, tâm điểm kết nối các khu vực trọng điểm của thành phố.</p>
            <MapBox :lat="project.lat" :lng="project.lng" :zoom="14" />
          </section>

          <section id="cau-hoi" v-if="faqs && faqs.length">
            <h2 class="text-3xl font-bold mb-6">Câu hỏi thường gặp</h2>
            <div class="space-y-4">
              <details v-for="faq in faqs" :key="faq.id" class="group bg-gray-50 rounded-xl">
                <summary class="flex items-center justify-between cursor-pointer p-6 font-semibold text-lg text-gray-900">
                  {{ faq.question }}
                  <span class="transition-transform group-open:rotate-180 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </span>
                </summary>
                <div class="px-6 pb-6 text-gray-600 leading-relaxed">
                  {{ faq.answer }}
                </div>
              </details>
            </div>
          </section>
        </div>

        <!-- Sidebar -->
        <div class="lg:col-span-1">
          <div class="sticky top-40 bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 class="text-2xl font-bold mb-2">Nhận thông tin</h3>
            <p class="text-gray-500 text-sm mb-6">Đăng ký để nhận báo giá và mặt bằng chi tiết của {{ project.name }}</p>
            
            <form @submit.prevent="submitContact" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Họ tên *</label>
                <input type="text" v-model="form.name" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow" placeholder="Nguyễn Văn A">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                <input type="tel" v-model="form.phone" required class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow" placeholder="0901234567">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">Nhu cầu</label>
                <textarea v-model="form.message" rows="3" class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow" placeholder="Tôi quan tâm căn 2 phòng ngủ..."></textarea>
              </div>
              <button type="submit" :disabled="submitting" class="w-full btn-primary py-4 text-lg font-bold">
                <span v-if="submitting">Đang gửi...</span>
                <span v-else>Đăng ký nhận thông tin</span>
              </button>
              
              <div v-if="successMsg" class="mt-4 p-4 bg-green-50 text-green-700 rounded-lg text-sm">
                {{ successMsg }}
              </div>
            </form>

            <div class="mt-8 pt-8 border-t border-gray-100">
              <p class="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Hotline tư vấn</p>
              <div class="flex items-center gap-4 text-2xl font-bold text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                1800 1234
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="min-h-screen pt-32 pb-12 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold mb-4">Không tìm thấy dự án</h1>
      <NuxtLink to="/" class="btn-primary">Về trang chủ</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const route = useRoute()
const { data: project, pending } = await useFetch(`/api/projects/${route.params.slug}`)
// Optimize: Use useAsyncData to fetch faqs only if project exists and prevent waterfall
const { data: faqs } = await useAsyncData(
  `faqs-${route.params.slug}`,
  () => project.value ? $fetch(`/api/faqs?project_id=${project.value.id}`) : Promise.resolve(null),
  {
    watch: [project]
  }
)

// Schema Org JSON-LD
const schemaOrg = computed(() => {
  if (!project.value) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateListing',
    name: project.value.name,
    description: project.value.description,
    image: project.value.thumbnail,
    url: typeof window !== 'undefined' ? window.location.href : '',
    datePosted: project.value.created_at
  }
})

useHead({
  title: () => project.value ? project.value.name : 'Dự án',
  meta: [
    { name: 'description', content: () => project.value ? project.value.description : '' },
    { property: 'og:image', content: () => project.value ? project.value.thumbnail : '' }
  ],
  script: [
    {
      type: 'application/ld+json',
      children: () => schemaOrg.value ? JSON.stringify(schemaOrg.value) : ''
    }
  ]
})

const form = ref({
  name: '',
  phone: '',
  message: ''
})
const submitting = ref(false)
const successMsg = ref('')

const submitContact = async () => {
  submitting.value = true
  successMsg.value = ''
  try {
    const res = await $fetch('/api/contacts', {
      method: 'POST',
      body: form.value
    })
    if (res.success) {
      successMsg.value = res.message
      form.value = { name: '', phone: '', message: '' }
    }
  } catch (error) {
    alert('Có lỗi xảy ra, vui lòng thử lại sau.')
  } finally {
    submitting.value = false
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>
