<template>
  <div class="min-h-screen pt-24 pb-24 bg-white">
    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <!-- Contact Info -->
        <div>
          <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Liên hệ</span>
          <h1 class="text-4xl md:text-5xl font-bold mb-6">Kết nối để nhận<br/>tư vấn chuyên sâu</h1>
          <p class="text-gray-600 text-lg mb-12">
            Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng hỗ trợ và giải đáp mọi thắc mắc về dự án Alize Đà Nẵng.
          </p>

          <div class="space-y-8">
            <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Hotline</h3>
                <p class="text-gray-600">1800 1234 (Miễn phí cước)</p>
                <p class="text-sm text-gray-500 mt-1">Hỗ trợ 24/7</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Email</h3>
                <p class="text-gray-600">info@alizedanang.vn</p>
              </div>
            </div>

            <div class="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
              <div class="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-yellow-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h3 class="text-lg font-bold mb-1">Văn phòng bán hàng</h3>
                <p class="text-gray-600">Đường Võ Nguyên Giáp, Quận Sơn Trà, TP. Đà Nẵng</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
          <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-300 to-yellow-600"></div>
          <h2 class="text-2xl font-bold mb-8">Gửi tin nhắn cho chúng tôi</h2>
          
          <form @submit.prevent="submitContact" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Họ tên *</label>
                <input type="text" v-model="form.name" required class="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Nguyễn Văn A">
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Số điện thoại *</label>
                <input type="tel" v-model="form.phone" required class="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="0901234567">
              </div>
            </div>
            
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Nội dung *</label>
              <textarea v-model="form.message" rows="4" required class="w-full px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-shadow bg-gray-50 focus:bg-white" placeholder="Tôi muốn nhận thông tin chi tiết về dự án..."></textarea>
            </div>
            
            <button type="submit" :disabled="submitting" class="btn-primary w-full py-4 text-lg font-bold shadow-md hover:shadow-lg">
              <span v-if="submitting" class="flex items-center gap-2">
                <svg class="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                Đang gửi...
              </span>
              <span v-else>Gửi yêu cầu</span>
            </button>
            
            <div v-if="successMsg" class="mt-4 p-4 bg-green-50 border border-green-100 text-green-700 rounded-lg flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
              {{ successMsg }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useHead({
  title: 'Liên hệ - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Liên hệ với chúng tôi để nhận tư vấn chi tiết về dự án Alize Đà Nẵng.' }
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
