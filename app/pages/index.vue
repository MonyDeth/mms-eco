<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <header class="bg-white shadow-md px-6 py-4 flex items-center justify-between max-w-full">
      <img src="/images/logo_long_black.png" alt="MMS Logo" class="h-14 object-contain" />
      <div class="text-right text-sm">
        <p class="font-semibold">មិនមែនស្ថាប័នពិតប្រាកដ, Parody Institute</p>
      </div>
    </header>

    <!-- Landing Section -->
    <main
  class="flex-grow bg-[#093E65] text-white px-6 py-16 max-w-full grid grid-cols-1 md:grid-cols-2 gap-12"
>
  <!-- Welcome message -->
  <section
    class="flex flex-col justify-center text-center md:text-left max-w-xs mx-auto md:mx-0"
  >
    <h1 class="text-4xl font-moul mb-4">សូមស្វាគមន៍</h1>
    <p>ទំនើបកម្មនៃប្រព័ន្ធគ្រប់គ្រងធ្មប់ និងសម្គាល់ខ្លួនបុគ្គលិកវេទមន្ត</p>
  </section>

  <!-- Services with semi-transparent white bg container spanning 2 columns -->
  <section class="bg-white/20 bg-opacity-50 rounded-xl p-6 md:col-span-1">
    <!-- Menu Header -->
    <h2 class="text-xl font-moul text-white mb-6 text-center sm:text-left">
      សេវាកម្មវេទមន្តឌីជីថល
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
      <!-- Work ID -->
      <router-link
        to="/card"
        class="bg-white text-[#093E65] rounded-xl px-8 py-4 font-semibold flex flex-col items-center shadow-md hover:shadow-lg hover:bg-gray-200 hover:-translate-y-1 transition-transform"
      >
        <div
          class="flex items-center justify-center bg-[#093E65] rounded-xl p-4 w-28 h-28 mb-2"
        >
          <img src="/images/svg/id-icon.svg" alt="ID Icon" class="w-24 h-24" />
        </div>
        <span>កាតបុគ្គលិក</span>
      </router-link>

      <!-- Broom Plate -->
<router-link
  to="/plate"
  class="relative bg-white text-[#093E65] rounded-xl px-8 py-4 font-semibold flex flex-col items-center shadow-md hover:shadow-lg hover:-translate-y-1 hover:bg-gray-200 transition-transform"
>
  <div
    class="flex items-center justify-center bg-[#093E65] rounded-xl p-4 w-28 h-28 mb-2"
  >
    <img src="/images/svg/broom-icon.svg" alt="Broom Icon" class="w-24 h-24" />
  </div>
  <span>ផ្លាកលេខអំបោស</span>

  <!-- Green tag -->
  <span
    class="absolute -top-2 -right-2 bg-linear-to-r from-cyan-500 to-blue-500 shadow-xl/20 text-white text-md font-bold rounded-full px-4 py-1 select-none"
  >
    សេវាថ្មី
  </span>
</router-link>


      <!-- Certification (disabled) spans two columns -->
      <div
        class="relative bg-gray-300 text-gray-500 rounded-xl px-8 py-4 font-semibold flex flex-col items-center cursor-not-allowed select-none col-span-1 sm:col-span-2"
        title="Coming Soon"
      >
        <div
          class="flex items-center justify-center bg-[#646A6E] rounded-xl p-4 w-28 h-28 mb-2"
        >
          <img src="/images/svg/certificate-icon.svg" alt="ID Icon" class="w-24 h-24" />
        </div>
        <span>វិញាបណ្ណបត្រ</span>
        <span
          class="absolute -top-2 -right-2 bg-gray-400 text-white text-xs font-bold rounded-full px-2 py-0.5 select-none"
        >Coming Soon</span>
      </div>
    </div>
  </section>
</main>


    <!-- Footer -->
    <footer class="bg-gray-800 text-gray-300 pt-6  px-6 text-center text-sm max-w-full">
      <p>
        <a
          href="https://www.facebook.com/profile.php?id=61579102732628"
          target="_blank"
          rel="noopener"
          class="text-white"
        >
          <i class="ri-facebook-circle-fill text-xl"></i> Official Facebook Page
        </a>
      </p>
     <p class="mt-2 max-w-xl text-gray-400 mx-auto pb-12">
  <i class="ri-error-warning-fill text-xl"></i> យើងគ្រប់គ្រងតែទំព័រហ្វេសប៊ុកផ្លូវការតែ <strong>មួយប៉ុណ្ណោះ</strong> ។
  <br /><i class="ri-prohibited-2-fill text-xl"></i>យើង​<strong>មិនទទួលខុសត្រូវ</strong> លើសកម្មភាពដែរមិនមែនចេញពីហ្វេសប៊ុកផ្លូវការរបស់យើងទេ។
  <br /><i class="ri-hearts-fill text-xl"></i>ពួកយើង មិនទទួលបានប្រាក់ចំណេញ ឬចំណូលអ្វីឡើយ។
</p>
    </footer>
  </div>
</template>

<script setup>
import { Strong } from 'gsap';

</script>
