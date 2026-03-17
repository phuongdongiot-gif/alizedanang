<template>
  <div class="pt-24 pb-24 bg-white min-h-screen">
    <div class="container-custom">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-yellow-600 font-semibold tracking-wider uppercase text-sm block mb-2">Đặc quyền sống</span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Tiện ích đẳng cấp 5 sao</h1>
        <p class="text-gray-600 text-lg">Trải nghiệm hệ sinh thái tiện ích khép kín, đáp ứng mọi nhu cầu thư giãn, giải trí và chăm sóc sức khỏe của giới tinh hoa.</p>
      </div>

      <div class="space-y-24">
        <!-- Feature 1 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-3xl font-bold mb-4">Hồ bơi vô cực ngắm trọn đại dương</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Hòa mình vào làn nước trong xanh tại hồ bơi vô cực tầng thượng, phóng tầm mắt ôm trọn cảnh sắc non nước hữu tình của bán đảo Sơn Trà và biển Mỹ Khê trải dài bất tận.
            </p>
            <ul class="space-y-3 font-medium text-gray-800">
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Hồ bơi nhiệt đới ngoài trời</li>
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Hồ bơi trẻ em an toàn</li>
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Sunbed và hệ thống Jacuzzi thư giãn</li>
            </ul>
          </div>
          <div class="order-1 md:order-2">
            <div class="aspect-square rounded-full overflow-hidden shadow-2xl relative">
              <NuxtImg src="https://images.unsplash.com/photo-1540541338287-41700207dee6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Hồ bơi vô cực" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <NuxtImg src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Spa & Wellness" class="w-full h-full object-cover"/>
            </div>
          </div>
          <div class="pl-0 md:pl-10">
            <h2 class="text-3xl font-bold mb-4">Spa & Wellness Retreat</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Tái tạo năng lượng và cân bằng tâm trí tại không gian Spa tĩnh lặng. Các liệu trình chăm sóc sức khỏe chuyên sâu đến từ những chuyên gia trị liệu hàng đầu sẽ đánh thức mọi giác quan.
            </p>
            <ul class="space-y-3 font-medium text-gray-800">
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Phòng trị liệu cao cấp</li>
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Xông hơi đá muối Himalaya</li>
              <li class="flex items-center gap-2"><svg class="text-yellow-500 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Yoga Studio ánh sáng tự nhiên</li>
            </ul>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="order-2 md:order-1">
            <h2 class="text-3xl font-bold mb-4">Fine Dining & Sky Lounge</h2>
            <p class="text-gray-600 leading-relaxed mb-6">
              Chuỗi nhà hàng ẩm thực Á - Âu sang trọng cùng Sky Lounge đỉnh cao là điểm hẹn lý tưởng cho những buổi tiệc xa hoa hay khoảnh khắc lãng mạn bên ly rượu vang dưới bầu trời đầy sao.
            </p>
          </div>
          <div class="order-1 md:order-2">
            <div class="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
              <NuxtImg src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Nhà hàng Fine Dining" class="w-full h-full object-cover"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Tiện ích - Alize Đà Nẵng',
  meta: [
    { name: 'description', content: 'Khám phá hệ thống tiện ích 5 sao tại Alize Đà Nẵng bao gồm hồ bơi vô cực, Spa, nhà hàng sang trọng và Sky lounge.' }
  ]
})
</script>
