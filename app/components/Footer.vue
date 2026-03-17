<template>
  <footer class="bg-gray-900 text-white pt-16 pb-8">
    <div class="container-custom">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-1">
          <span class="text-2xl font-bold tracking-tighter text-white mb-4 block">ALIZE</span>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Dự án căn hộ nghỉ dưỡng cao cấp tại trung tâm thành phố biển Đà Nẵng, mang đến trải nghiệm sống thượng lưu.
          </p>
        </div>
        
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 gold-accent">Dự án</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><NuxtLink to="/du-an/alize-da-nang" class="hover:text-white transition-colors">Tổng quan</NuxtLink></li>
            <li><NuxtLink to="/du-an/alize-da-nang#vi-tri" class="hover:text-white transition-colors">Vị trí</NuxtLink></li>
            <li><NuxtLink to="/du-an/alize-da-nang#tien-ich" class="hover:text-white transition-colors">Tiện ích</NuxtLink></li>
            <li><NuxtLink to="/du-an/alize-da-nang#mat-bang" class="hover:text-white transition-colors">Mặt bằng</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 gold-accent">Khám phá</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li><NuxtLink to="/tin-tuc" class="hover:text-white transition-colors">Tin tức & Sự kiện</NuxtLink></li>
            <li><NuxtLink to="/thu-vien" class="hover:text-white transition-colors">Thư viện ảnh</NuxtLink></li>
            <li><NuxtLink to="/tai-tai-lieu" class="hover:text-white transition-colors">Tải tài liệu</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h4 class="text-sm font-semibold uppercase tracking-wider mb-4 gold-accent">Liên hệ</h4>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-3">
              <span class="shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></span>
              <span>1800 1234</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg></span>
              <span>info@alizedanang.vn</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="shrink-0 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></span>
              <span>Mỹ Khê, Sơn Trà, TP. Đà Nẵng</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Alize Đà Nẵng. All rights reserved.</p>
        <div class="flex items-center gap-4 text-sm text-gray-500">
          <NuxtLink to="/dieu-khoan" class="hover:text-white transition-colors">Điều khoản</NuxtLink>
          <NuxtLink to="/bao-mat" class="hover:text-white transition-colors">Bảo mật</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
