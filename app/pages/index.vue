<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md px-6 py-4 flex items-center justify-between max-w-full">
      <img src="/images/logo_long_black.png" alt="MMS Logo" class="h-14 object-contain" />
    </header>
    <div class="text-right text-sm p-4">
      <p class="font-semibold">
        <i class="ri-error-warning-line text-xl text-yellow-400"></i>
        មិនមែនស្ថាប័នពិតប្រាកដ, Parody Institute
      </p>
    </div>
    <!-- Landing Section -->
    <main
      class="flex-grow bg-[#093E65] text-white px-6 py-4 md:py-18 max-w-full grid grid-cols-1 md:grid-cols-2 gap-12"
    >
      <!-- Welcome message -->
      <section
        class="flex flex-col justify-center text-center md:text-left max-w-xs mx-auto md:mx-0"
      >
        <h1 class="text-xl md:text-4xl font-moul mb-4">សូមស្វាគមន៍</h1>
        <p
          class="text-md font-base md:text-xl"
        >ទំនើបកម្មនៃប្រព័ន្ធគ្រប់គ្រងធ្មប់ និងសម្គាល់ខ្លួនបុគ្គលិកវេទមន្ត</p>
      </section>

      <!-- Services with semi-transparent white bg container spanning 3 columns -->
<section class="bg-white/20 bg-opacity-50 rounded-xl p-6 md:col-span-1 col-span-1">
  <!-- Menu Header -->
  <h2 class="text-xl font-moul text-white mb-6 text-center sm:text-left">
    ថ្នាលសេវាកម្មវេទមន្តឌីជីថល
  </h2>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    <!-- 1. Work ID -->
    <router-link
      to="/card"
      class="bg-white text-[#093E65] rounded-xl px-8 py-4 font-semibold flex flex-col items-center shadow-md hover:shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-transform"
    >
      <div
        class="flex items-center justify-center bg-[#093E65] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <img src="/images/svg/id-icon.svg" alt="ID Icon" class="w-24 h-24" />
      </div>
      <span>កាតបុគ្គលិក</span>
    </router-link>

    <!-- 2. Broom Plate -->
    <router-link
      to="/plate"
      class="relative bg-white text-[#093E65] rounded-xl px-8 py-4 font-semibold flex flex-col items-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-gray-200 transition-transform"
    >
      <div
        class="flex items-center justify-center bg-[#093E65] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <img src="/images/svg/broom-icon.svg" alt="Broom Icon" class="w-24 h-24" />
      </div>
      <span>ផ្លាកលេខ</span>
    </router-link>

    <!-- 3. Leave Request (NEW with Remix Icon) -->
    <router-link
      to="/permission-bchum"
      class="relative bg-white text-[#093E65] rounded-xl px-8 py-4 font-semibold flex flex-col items-center shadow-md hover:shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-transform"
    >
      <div
        class="flex items-center justify-center bg-[#093E65] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <i class="ri-calendar-event-line text-white text-4xl md:text-6xl"></i>
      </div>
      <span>ពាក្យសម្រាក</span>
    </router-link>

    <!-- 4. Passport (renamed from Certification) -->
    <div
      class="relative bg-gray-300 text-gray-500 rounded-xl px-8 py-4 font-semibold flex flex-col items-center cursor-not-allowed select-none"
      title="Coming Soon"
    >
      <div
        class="flex items-center justify-center bg-[#646A6E] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <i class="ri-passport-line text-white text-4xl md:text-6xl"></i>
      </div>
      <span>លិខិតឆ្លងភព</span>
      <span
        class="absolute -top-2 -right-2 bg-gray-400 text-white text-md font-bold rounded-full px-4 py-1 select-none"
      >ឆាប់ៗនេះ</span>
    </div>

    <!-- 5. Meeting (NEW with Remix Icon) -->
    <div
      class="relative bg-gray-300 text-gray-500 rounded-xl px-8 py-4 font-semibold flex flex-col items-center cursor-not-allowed select-none"
      title="Coming Soon"
    >
      <div
        class="flex items-center justify-center bg-[#646A6E] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <i class="ri-team-line text-white text-4xl md:text-6xl"></i>
      </div>
      <span>ជំនួបធ្មប់</span>
      <span
        class="absolute -top-2 -right-2 bg-gray-400 text-white text-md font-bold rounded-full px-4 py-1 select-none"
      >ឆាប់ៗនេះ</span>
    </div>

    <!-- 6. Wizard Game -->
    <div
      class="relative bg-gray-300 text-gray-500 rounded-xl px-8 py-4 font-semibold flex flex-col items-center cursor-not-allowed select-none"
      title="Coming Soon"
    >
      <div
        class="flex items-center justify-center bg-[#646A6E] rounded-xl w-20 h-20 md:w-28 md:h-28 mb-1"
      >
        <i class="ri-gamepad-line text-white text-4xl md:text-6xl"></i>
      </div>
      <span>ហ្គេមធ្មប់</span>
      <span
        class="absolute -top-2 -right-2 bg-gray-400 text-white text-md font-bold rounded-full px-4 py-1 flex items-center gap-1 select-none"
      >កំពុងអភិវឌ្ឍ</span>
    </div>
  </div>
</section>

    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 pt-6 px-6 text-center text-sm max-w-full">
      <p>
        <a
          href="https://www.facebook.com/profile.php?id=61579102732628"
          target="_blank"
          rel="noopener"
          class="text-white"
        >
          <i class="ri-facebook-circle-fill text-xl"></i> Facebook Page
        </a>
      </p>
      <p class="mt-2 max-w-xl text-gray-400 mx-auto pb-12">
        <i class="ri-error-warning-fill text-xl"></i> យើងគ្រប់គ្រងតែផេកហ្វេសប៊ុក
        <strong>មួយប៉ុណ្ណោះ</strong> មិនមានTikTok Instagram ឬផេកផ្សេងទៀតទេ។
        <br />
        <i class="ri-prohibited-2-fill text-xl"></i>យើង​
        <strong>មិនទទួលខុសត្រូវ</strong> លើសកម្មភាពដែរធ្វើរដោយជនទីបីនោះទេ។
      </p>
    </footer>
  </div>
</template>

<script setup>
import { Strong } from "gsap";
</script>
