<template>
<div class="min-h-screen flex flex-col bg-gradient-to-br from-[#09203F] to-[#1A4C8B]">
    
    <header class="sticky top-0 z-50 bg-white/10 backdrop-blur-md justify-between shadow-md px-6 py-3 flex items-center justify-between">
      <img src="/images/logo_long_white.png" alt="MMS Logo" class="h-18 object-contain" />\
       <div class="text-right text-sm p-4 text-gray-300">
      <p class="font-base">
        <i class="ri-error-warning-line text-xl align-middle"></i>
        មិនមែនស្ថាប័នពិតប្រាកដ, Parody Institute
      </p>
    </div>
    </header>

   

    <main class="flex-grow flex flex-col items-center justify-center p-6 text-white text-center">

      <section class="mb-12">
        <h1 class="text-4xl md:text-6xl font-moul mb-4 text-sky-300">
          សូមស្វាគមន៍
        </h1>
        <p class="text-lg md:text-xl max-w-2xl mx-auto font-light text-gray-300">
          ទំនើបកម្មនៃប្រព័ន្ធគ្រប់គ្រងធ្មប់ និងសម្គាល់ខ្លួនបុគ្គលិកវេទមន្ត
        </p>
      </section>

      <section class="w-full max-w-5xl">
        <h2 class="text-2xl font-moul text-white mb-8 text-center">
          ថ្នាលសេវាកម្មវេទមន្តឌីជីថល
        </h2>

        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

          <router-link
            to="/card"
            class="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white font-semibold flex flex-col items-center shadow-lg hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div class="flex items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl w-24 h-24 mb-4 shadow-md group-hover:shadow-sky-400/30 transition-shadow">
              <img src="/images/svg/id-icon.svg" alt="ID Icon" class="w-20 h-20" />
            </div>
            <span class="text-lg">កាតបុគ្គលិក</span>
          </router-link>

          <router-link
            to="/plate"
            class="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white font-semibold flex flex-col items-center shadow-lg hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div class="flex items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl w-24 h-24 mb-4 shadow-md group-hover:shadow-sky-400/30 transition-shadow">
              <img src="/images/svg/broom-icon.svg" alt="Broom Icon" class="w-20 h-20" />
            </div>
            <span class="text-lg">ផ្លាកលេខ</span>
          </router-link>

          <router-link
            to="/permission-bchum"
            class="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-white font-semibold flex flex-col items-center shadow-lg hover:border-sky-400 hover:-translate-y-2 transition-all duration-300"
          >
            <div class="flex items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 rounded-xl w-24 h-24 mb-4 shadow-md group-hover:shadow-sky-400/30 transition-shadow">
              <i class="ri-calendar-event-line text-white text-6xl"></i>
            </div>
            <span class="text-lg">ពាក្យសម្រាក</span>
          </router-link>

          <div
            class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-gray-400 font-semibold flex flex-col items-center cursor-not-allowed select-none"
            title="Coming Soon"
          >
             <span class="absolute top-3 right-3 bg-yellow-400/80 text-black text-xs font-bold rounded-full px-3 py-1 select-none">ឆាប់ៗនេះ</span>
            <div class="flex items-center justify-center bg-gray-700 rounded-xl w-24 h-24 mb-4">
              <i class="ri-passport-line text-gray-400 text-6xl"></i>
            </div>
            <span class="text-lg">លិខិតឆ្លងភព</span>
          </div>

          <div
            class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-gray-400 font-semibold flex flex-col items-center cursor-not-allowed select-none"
            title="Coming Soon"
          >
            <span class="absolute top-3 right-3 bg-yellow-400/80 text-black text-xs font-bold rounded-full px-3 py-1 select-none">ឆាប់ៗនេះ</span>
            <div class="flex items-center justify-center bg-gray-700 rounded-xl w-24 h-24 mb-4">
              <i class="ri-team-line text-gray-400 text-6xl"></i>
            </div>
            <span class="text-lg">ជំនួបធ្មប់</span>
          </div>

          <div
            class="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-gray-400 font-semibold flex flex-col items-center cursor-not-allowed select-none"
            title="Coming Soon"
          >
            <span class="absolute top-3 right-3 bg-orange-400/80 text-black text-xs font-bold rounded-full px-3 py-1 select-none">កំពុងអភិវឌ្ឍ</span>
            <div class="flex items-center justify-center bg-gray-700 rounded-xl w-24 h-24 mb-4">
              <i class="ri-gamepad-line text-gray-400 text-6xl"></i>
            </div>
            <span class="text-lg">ហ្គេមធ្មប់</span>
          </div>
        </div>
      </section>

    </main>

<footer
  class="bg-[#09203F]/50 rounded-t-2xl text-gray-400 pt-8 pb-12 px-6 text-center text-sm shadow-lg"
>      <p>
        <a
          href="https://www.facebook.com/profile.php?id=61579102732628"
          target="_blank"
          rel="noopener"
          class="text-gray-300 hover:text-sky-400 transition-colors flex items-center justify-center gap-2"
        >
          <i class="ri-facebook-circle-fill text-2xl"></i>
          <span>Facebook Page</span>
        </a>
      </p>
      <div class="mt-4 max-w-2xl mx-auto space-y-2">
        <p>
          <i class="ri-error-warning-fill text-yellow-400 align-middle"></i> យើងគ្រប់គ្រងតែផេកហ្វេសប៊ុក
          <strong>មួយប៉ុណ្ណោះ</strong> មិនមានTikTok Instagram ឬផេកផ្សេងទៀតទេ។
        </p>
        <p>
          <i class="ri-prohibited-2-fill text-red-400 align-middle"></i> យើង​
          <strong>មិនទទួលខុសត្រូវ</strong> លើសកម្មភាពដែរធ្វើរដោយជនទីបីនោះទេ។
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { Strong } from "gsap";
</script>
