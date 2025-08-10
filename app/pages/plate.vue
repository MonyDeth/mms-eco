<template>
  <div
    class="min-h-screen flex flex-col md:flex-row p-4 md:p-6 gap-6 bg-gray-100 overflow-x-hidden font-siemreap"
  >
    <!-- Form -->
    <div class="w-full md:w-1/2">
      <div class="flex items-center gap-4 mb-6">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="MMS Logo" class="w-16 sm:w-20 rounded-full object-cover" />
        </NuxtLink>
        <div class="text-[#093E65]">
          <h2 class="text-xl sm:text-2xl font-base">ចុះបញ្ជីលេខអំបោស</h2>
          <h2 class="text-lg sm:text-2xl font-dm-serif">Broom Plate Number</h2>
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
            <option disabled value>Select Province</option>
            <option v-for="p in provinces" :key="p.code" :value="p">{{ p.name_kh }} / {{ p.name }}</option>
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
        >Preview Plate</button>
      </form>
    </div>

    <!-- Plate Preview -->
    <div class="w-full md:w-1/2 flex justify-center items-center" :style="{ minHeight: '160px' }">
      <div
        id="plate-preview"
        class="relative rounded-xl shadow-xl flex flex-col justify-center max-w-full"
        :style="outerStyle"
      >
        <!-- Watermark background -->

        <!-- White inner border -->
        <div class="rounded-lg" :style="whiteBorderStyle">
          <!-- Colored border + bg from province -->

          <div
            class="rounded-md flex flex-col items-start justify-between px-6 py-4"
            :style="coloredBorderStyle"
          >
            <!-- Plate Number (top, full width) -->
            <div class="space-y-1 p-2 md:p-4 flex item-start flex-col w-full">
              <div
                class="text-sm md:text-md font-siemreap font-bold text-sky-900 tracking-widest select-none text-left w-full"
                style="letter-spacing: -.03em; word-break: break-word;"
              >ស្លាកលេខអំបោស Broom Number</div>

              <div
                class="text-5xl md:text-6xl font-oswald font-bold text-sky-900 tracking-widest select-none truncate text-left w-full"
                style="letter-spacing: -.03em; word-break: break-word;"
              >MMS-{{ plateNumber || '000000' }}</div>
            </div>

            <!-- Bottom row: logo left, province right -->
            <div class="flex w-full justify-between p-2 items-center mt-4">
              <img src="/images/logo.png" alt="MMS Logo" class="h-12 md:h-14 object-contain" />

              <div class="text-right">
                <div
                  class="text-sky-800 font-siemreap text-base md:text-xl font-semibold whitespace-nowrap"
                  style="max-width: 120px;"
                >{{ province.name_kh || 'ខេត្ត' }}</div>
                <div
                  class="text-red-600 text-sm font-dm-serif md:text-lg whitespace-nowrap"
                  style="max-width: 120px;"
                >{{ province.name || 'Province' }}</div>
                <div
                  class="absolute inset-0 pointer-events-none"
                  style="
                        background-image: url('/images/platebg.png');
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;
                        opacity: 1;
                        "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { provinces } from "@/data/provinces.js";

const plateNumber = ref("");

// Default province (Phnom Penh example)
const defaultProvince = provinces.find(p => p.code === "KH-12");
const province = ref(defaultProvince);

// Outer black border, responsive width (full on mobile, max 640px on desktop)
const outerStyle = {
  width: "100%",
  maxWidth: "640px",
  height: "320px",
  border: "1px solid gray",
  borderRadius: ".75rem",
  boxSizing: "border-box"
};

// White border inside outer black border
const whiteBorderStyle = {
  border: "10px solid white",
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "1rem"
};

// Colored border + background from province JSON
const coloredBorderStyle = computed(() => ({
  border: province.value?.color
    ? `8px solid ${province.value.color}`
    : "8px solid #000",
  background: province.value?.bg || "#fff",
  height: "100%",
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  padding: ".2rem"
}));

function scrollToPreview() {
  const el = document.getElementById("plate-preview");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}
</script>
