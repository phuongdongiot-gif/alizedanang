<template>
  <div class="pt-24 pb-24 min-h-screen bg-white">
    <!-- Hero Image for Location -->
    <div class="relative w-full h-[40vh] min-h-[400px] mb-16">
      <NuxtImg 
        src="https://images.unsplash.com/photo-1551882547-ff40c0d5843b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
        alt="Vị trí Alize Đà Nẵng" 
        class="w-full h-full object-cover"
        placeholder
        format="webp"
        preload
      />
      <div class="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-4">Vị trí Kim Cương</h1>
        <p class="text-xl text-gray-200 max-w-2xl font-light">Tâm điểm phồn hoa, ôm trọn bờ biển Mỹ Khê quyến rũ</p>
      </div>
    </div>

    <div class="container-custom">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div>
          <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Kết nối hoàn mỹ</span>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Tọa độ sinh lời vượt trội</h2>
          <div class="prose prose-lg prose-gray text-gray-600">
            <p>Alize Đà Nẵng vươn mình kiêu hãnh trên cung đường tỷ đô Võ Nguyên Giáp, nơi hội tụ của những thương hiệu nghỉ dưỡng quốc tế danh giá nhất. Từ đây, cư dân không chỉ tận hưởng trọn vẹn hơi thở của đại dương mà còn dễ dàng kết nối tới các nhịp giao thương sầm uất.</p>
            <p>Sở hữu vị trí được đánh giá là "vàng mười" của thành phố đáng sống nhất Việt Nam, dự án mang đến đặc quyền di chuyển vô song:</p>
            <ul class="space-y-4 font-medium text-gray-800 mt-6 list-none pl-0">
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <span><strong>1 phút</strong> - Chạm bước đến bãi biển Mỹ Khê</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <span><strong>5 phút</strong> - Cầu Rồng, Cầu Sông Hàn, Trung tâm Hành chính</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <span><strong>10 phút</strong> - Sân bay Quốc tế Đà Nẵng</span>
              </li>
              <li class="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-yellow-600 shrink-0"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                <span><strong>30 phút</strong> - Phố cổ Hội An (Di sản Văn hóa Thế giới)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
          <MapBox :lat="16.0544" :lng="108.2022" :zoom="14" class="h-[600px] w-full" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Vị trí - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Khám phá vị trí đắc địa của Alize Đà Nẵng trên cung đường Võ Nguyên Giáp, kết nối dễ dàng đến các tiện ích trọng điểm.' }
  ]
})
</script>
