<template>
  <div class="pt-24 pb-24 bg-gray-50 min-h-screen">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm block mb-2">Thiết kế hoàn mỹ</span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Mặt bằng tổng thể</h1>
        <p class="text-gray-600 text-lg">Alize Đà Nẵng được quy hoạch đồng bộ mang đến không gian mở tối ưu, kết nối mượt mà giữa thiên nhiên và kiến trúc hiện đại.</p>
      </div>

      <!-- Tabs -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          @click="activeTab = tab.id"
          class="px-6 py-3 rounded-full font-medium transition-all duration-300"
          :class="activeTab === tab.id ? 'bg-gray-900 text-white shadow-md' : 'bg-white text-gray-600 hover:bg-gray-100'"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Content -->
      <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100">
        <div v-show="activeTab === 'master'" class="animate-fadeIn">
          <h2 class="text-2xl font-bold mb-6 text-center">Mặt bằng tổng thể dự án</h2>
          <div class="aspect-video relative rounded-2xl overflow-hidden bg-gray-100 mb-8">
            <NuxtImg 
              src="https://images.unsplash.com/photo-1600607687931-cecebd802404?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Mặt bằng tổng thể"
              class="w-full h-full object-cover"
              placeholder
              format="webp"
            />
          </div>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div class="p-4 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-yellow-600 mb-1">02</div>
              <div class="text-sm font-medium text-gray-600">Tháp căn hộ</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-yellow-600 mb-1">45</div>
              <div class="text-sm font-medium text-gray-600">Tầng cao</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-yellow-600 mb-1">68%</div>
              <div class="text-sm font-medium text-gray-600">Mảng xanh & tiện ích</div>
            </div>
            <div class="p-4 bg-gray-50 rounded-xl">
              <div class="text-3xl font-bold text-yellow-600 mb-1">500+</div>
              <div class="text-sm font-medium text-gray-600">Căn hộ cao cấp</div>
            </div>
          </div>
        </div>

        <div v-show="activeTab === 'floor'" class="animate-fadeIn">
          <h2 class="text-2xl font-bold mb-6 text-center">Mặt bằng tầng điển hình</h2>
          <div class="aspect-video relative rounded-2xl overflow-hidden bg-gray-100">
            <NuxtImg 
              src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              alt="Mặt bằng tầng điển hình"
              class="w-full h-full object-cover"
              placeholder
              format="webp"
            />
          </div>
        </div>

        <div v-show="activeTab === 'apartment'" class="animate-fadeIn">
          <h2 class="text-2xl font-bold mb-6 text-center">Mặt bằng căn hộ</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="text-xl font-bold mb-4">Căn hộ 1 Phòng ngủ</h3>
              <ul class="text-gray-600 mb-6 space-y-2">
                <li>Diện tích tim tường: 55 m²</li>
                <li>Diện tích thông thủy: 50 m²</li>
                <li>Công năng: 1 PN, 1 WC, Phòng khách, Bếp, Logia</li>
              </ul>
              <div class="aspect-[4/3] rounded-xl overflow-hidden">
                 <NuxtImg src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Căn 1PN" class="w-full h-full object-cover"/>
              </div>
            </div>
            <div class="bg-gray-50 rounded-2xl p-6 border border-gray-100">
              <h3 class="text-xl font-bold mb-4">Căn hộ 2 Phòng ngủ</h3>
              <ul class="text-gray-600 mb-6 space-y-2">
                <li>Diện tích tim tường: 85 m²</li>
                <li>Diện tích thông thủy: 78 m²</li>
                <li>Công năng: 2 PN, 2 WC, Phòng khách, Bếp, Logia rộng</li>
              </ul>
              <div class="aspect-[4/3] rounded-xl overflow-hidden">
                 <NuxtImg src="https://images.unsplash.com/photo-1502672260266-1c1de2d9d000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Căn 2PN" class="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Mặt bằng - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Xem chi tiết mặt bằng tổng thể, mặt bằng tầng và thiết kế căn hộ cao cấp tại dự án Alize Đà Nẵng.' }
  ]
})

const tabs = [
  { id: 'master', label: 'Tổng thể' },
  { id: 'floor', label: 'Tầng điển hình' },
  { id: 'apartment', label: 'Căn hộ chi tiết' }
]

const activeTab = ref('master')
</script>

<style scoped>
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
