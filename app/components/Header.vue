<template>
  <header class="fixed w-full z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm">
    <div class="container-custom h-20 flex items-center justify-between">
      <NuxtLink to="/" class="flex items-center gap-2">
        <span class="text-2xl font-bold tracking-tighter luxury-gradient text-transparent bg-clip-text">ALIZE</span>
        <span class="text-sm font-medium text-gray-500 uppercase tracking-widest hidden sm:inline-block">Đà Nẵng</span>
      </NuxtLink>

      <nav class="hidden md:flex items-center gap-6 text-sm font-medium">
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition-colors">Trang chủ</NuxtLink>
        <NuxtLink to="/du-an/alize-da-nang" class="text-gray-600 hover:text-gray-900 transition-colors">Dự án</NuxtLink>
        <NuxtLink to="/vi-tri" class="text-gray-600 hover:text-gray-900 transition-colors">Vị trí</NuxtLink>
        <NuxtLink to="/tien-ich" class="text-gray-600 hover:text-gray-900 transition-colors">Tiện ích</NuxtLink>
        <NuxtLink to="/mat-bang" class="text-gray-600 hover:text-gray-900 transition-colors">Mặt bằng</NuxtLink>
        <NuxtLink to="/thu-vien" class="text-gray-600 hover:text-gray-900 transition-colors">Thư viện</NuxtLink>
        <NuxtLink to="/tin-tuc" class="text-gray-600 hover:text-gray-900 transition-colors">Tin tức</NuxtLink>
        <NuxtLink to="/lien-he" class="btn-primary py-2 px-5 text-sm rounded-full bg-gray-900 hover:bg-gray-800 ml-2">Liên hệ</NuxtLink>
      </nav>

      <button class="md:hidden text-gray-900 p-2" aria-label="Menu">
        <!-- Lucide menu icon fallback -->
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </div>
  </header>
</template>
