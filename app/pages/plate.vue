<template>
  <div
    class="min-h-screen flex flex-col md:flex-row p-4 md:p-6 gap-6 bg-gray-100 overflow-x-hidden font-siemreap"
  >
    <!-- Form -->
    <div class="w-full md:w-1/2">
      <div class="flex items-center gap-4 mb-6">
        <NuxtLink to="/">
          <img
            src="/images/logo.png"
            alt="MMS Logo"
            class="w-16 sm:w-20 rounded-full object-cover"
          />
        </NuxtLink>
        <div class="text-[#093E65]">
          <h2 class="text-xl sm:text-2xl font-bold">បញ្ចូលព័ត៌មានផ្លាកលេខ</h2>
          <h2 class="text-lg sm:text-2xl font-dm-serif font-semibold">
            Plate Number Information
          </h2>
        </div>
      </div>

      <form class="space-y-6 p-4 border border-gray-200 rounded-2xl shadow-md bg-white">
        <!-- Province -->
        <div>
          <label for="province" class="block font-medium mb-1">ខេត្ត / Province</label>
          <select
            id="province"
            v-model="province"
            class="w-full border border-gray-300 rounded-md px-4 py-2"
          >
            <option disabled value="">Select Province</option>
            <option v-for="p in provinces" :key="p.code" :value="p">
              {{ p.name_kh }} / {{ p.name }}
            </option>
          </select>
        </div>

        <!-- Plate Number -->
        <div>
          <label for="number" class="block font-medium mb-1">លេខផ្លាក / Plate Number</label>
          <input
            id="number"
            v-model="plateNumber"
            maxlength="6"
            type="text"
            class="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Enter up to 6 characters"
          />
        </div>

        <!-- Preview Button -->
        <button
          type="button"
          class="w-full bg-[#093E65] text-white font-semibold py-3 rounded-md hover:bg-[#0063AC]"
          @click="scrollToPreview"
        >
          Preview Plate
        </button>
      </form>
    </div>

    <!-- Plate Preview -->
    <div
      class="w-full md:w-1/2 flex justify-center items-center"
      :style="{ minHeight: '320px' }"
    >
      <div
        id="plate-preview"
        class="relative rounded-xl shadow-xl flex flex-col items-center justify-center max-w-full"
        :style="outerStyle"
      >
        <!-- White inner border -->
        <div class="rounded-lg" :style="whiteBorderStyle">
          <!-- Colored border + bg from province -->
          <div
            class="rounded-md flex flex-col items-center justify-between"
            :style="coloredBorderStyle"
          >
            <!-- Logo -->
            <img
              src="/images/logo_long_black.png"
              alt="MMS Logo"
              class="h-14 object-contain mb-4"
            />

            <!-- Plate Number -->
            <div
              class="text-6xl font-oswald font-bold text-sky-900 tracking-widest mb-6 select-none"
              style="letter-spacing: 0.35em; word-break: break-word; text-align: center;"
            >
              MMS-{{ plateNumber || '000000' }}
            </div>

            <!-- Province Names -->
            <div class="text-center mb-2">
              <div class="text-blue-700 font-moul text-2xl font-semibold">
                {{ province.name_kh || 'ខេត្ត' }}
              </div>
              <div class="text-red-600 text-lg italic font-light">
                {{ province.name || 'Province' }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { provinces } from '@/data/provinces.js'

const plateNumber = ref('')

// Default province (Phnom Penh example)
const defaultProvince = provinces.find((p) => p.code === 'KH-12')
const province = ref(defaultProvince)

// Outer black border, responsive width (full on mobile, max 640px on desktop)
const outerStyle = {
  width: '100%',
  maxWidth: '640px',
  height: '320px',
  border: '8px solid black',
  borderRadius: '1rem',
  boxSizing: 'border-box',
}

// White border inside outer black border
const whiteBorderStyle = {
  border: '8px solid white',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '0.75rem',
}

// Colored border + background from province JSON
const coloredBorderStyle = computed(() => ({
  border: province.value?.color ? `8px solid ${province.value.color}` : '8px solid #000',
  background: province.value?.bg || '#fff',
  height: '100%',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '0.5rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1.5rem',
}))

function scrollToPreview() {
  const el = document.getElementById('plate-preview')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
