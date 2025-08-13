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
        <!-- Owner Name -->
        <div>
          <label for="ownerName" class="block font-medium mb-1">ឈ្មោះម្ចាស់ / Owner Name</label>
          <input
            id="ownerName"
            v-model="ownerName"
            type="text"
            class="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="Enter owner name"
          />
        </div>

        <!-- Plate Number -->
        <div>
          <label for="number" class="block font-medium mb-1">លេខផ្លាក / Plate Number</label>
          <input
            id="number"
            v-model="plateNumber"
            maxlength="6"
            type="text"
            inputmode="numeric"
            pattern="[0-9]*"
            class="w-full border border-gray-300 rounded-md px-4 py-2"
            placeholder="លេខអំបោស"
            @input="onInput"
          />
          <p class="text-sm text-gray-500 mt-1">លេខច្រើនបំផុត៦ខ្ទង់។ Max 6 Numeric Digits</p>
        </div>

        <!-- Upload Image -->
        <div>
          <label for="image" class="block font-medium mb-1">បង្ហោះរូបភាព</label>

          <!-- Hidden native file input -->
          <input id="image" type="file" @change="onImageUpload" accept="image/*" class="hidden" />

          <!-- Custom upload button -->
          <label
            for="image"
            class="inline-flex items-center gap-2 cursor-pointer border border-gray-200 bg-gray-100 shadow-sm text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition"
          >
            <img src="/images/image-add-line.svg" alt="Upload Icon" class="w-5 h-5" />
            Upload Image
          </label>
        </div>
        <p
          class="text-sm text-gray-500 mt-1 pt-2"
        >ទិន្នន័យរបស់អ្នកមិនត្រូវបានរក្សាទុកទេ។ Your data is not stored anywhere.</p>
        <!-- Preview Button -->
        <button
          type="button"
          class="w-full bg-[#093E65] text-white font-semibold py-3 rounded-md hover:bg-[#0063AC]"
          @click="scrollToPreview"
        >រួចរាល់</button>
      </form>
    </div>

    <!-- Plate Preview -->
    <div class="w-full md:w-1/2 flex justify-center items-center" style="min-height: 160px;">
      <div
        id="plate-preview-wrapper"
        class="relative max-w-full"
        style="width: 100%; max-width: 640px; padding-bottom: 18.75%;"
      >
        <div
          id="plate-preview"
          class="absolute inset-0 rounded-xl shadow-xl flex flex-col justify-center max-w-full"
          :style="outerStyle"
        >
          <div class="rounded-lg" :style="whiteBorderStyle">
            <div
              class="rounded-md flex flex-col items-start justify-between px-2 py-2"
              :style="coloredBorderStyle"
              style="background: linear-gradient(45deg, #0D5278, #1898DE);"
            >
              <!-- Plate Number -->
              <div class=" p-1 md:p-2 flex flex-col w-full">
                <div
                  class="text-sm md:text-md font-siemreap font-bold text-white tracking-widest select-none text-left w-full"
                >លេខអំបោស Broom Number</div>
                <div
                  class="text-3xl md:text-6xl text-shadow-md font-oswald font-bold text-white select-none text-left w-full"
                >MMS-{{ plateNumber || '000000' }}</div>
              </div>

              <!-- Top: Owner Name & Image -->
              <div class="flex items-center p-1 md:p-2 w-full">
                <div class="flex-1 text-left">
                  <p class="text-sm md:text-sm text-white mt-1 pt-2">ម្ចាស់អំបោស Broom's Owner.</p>
                  <div class="text-md md:text-xl font-semibold text-white">{{ ownerName || 'ឈ្មោះម្ចាស់' }}</div>
                </div>
                <div
                  class="w-20 h-20 rounded-xl overflow-hidden border-2 border-sky-800 flex-shrink-0 bg-gray-200 flex items-center justify-center text-gray-500"
                >
                  <template v-if="ownerImage">
                    <img :src="ownerImage" alt="Owner" class="w-full h-full object-cover" />
                  </template>
                  <template v-else>
                    <i class="ri-image-line text-xl"></i>
                  </template>
                </div>
              </div>
              <!-- Static Background -->
              <div
                class="absolute inset-0 pointer-events-none"
                style="
                  background-image: url('/images/platebg.png');
                  background-repeat: no-repeat;
                  background-position: center;
                  background-size: cover;
                  opacity: .25;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const plateNumber = ref("");
const ownerName = ref("");
const ownerImage = ref(null);

// Static color + background (removed province dependency)
const outerStyle = {
  width: "100%",
  height: "100%",
  border: "1px solid gray",
  borderRadius: "1rem",
  position: "relative"
};

const whiteBorderStyle = {
  border: "10px solid white",
  height: "100%",
  width: "100%",
  borderRadius: "1rem"
};

const coloredBorderStyle = computed(() => ({
  border: "4px solid #093E65",
  background: "#f0f8ff",
  height: "100%",
  width: "100%",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between"
}));

function scrollToPreview() {
  const el = document.getElementById("plate-preview");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

watch(plateNumber, newVal => {
  if (newVal.length > 6) {
    plateNumber.value = newVal.slice(0, 6);
  }
});

function onInput(event) {
  let value = event.target.value.replace(/\D/g, "");
  plateNumber.value = value.slice(0, 6);
  event.target.value = plateNumber.value;
}

function onImageUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = e => {
      ownerImage.value = e.target.result;
    };
    reader.readAsDataURL(file);
  }
}
</script>
