<template>
  <div class="min-h-screen flex flex-col md:flex-row p-4 md:p-6 gap-6 bg-gray-50 overflow-x-hidden">
    <!-- Edit Form -->
    <div class="order-1 md:order-none w-full md:w-1/2">
      <div class="flex items-center gap-4 mb-6">
        <NuxtLink to="/">
          <img src="/images/logo.png" alt="MMS Logo" class="w-16 sm:w-20 rounded-full object-cover" />
        </NuxtLink>
        <div class="text-[#093E65]">
          <h2 class="text-base sm:text-2xl">បំពេញពាក្យឈប់សម្រាក</h2>
          <h2 class="text-base sm:text-2xl font-dm-serif">Permission Slip</h2>
        </div>
      </div>

      <form @submit.prevent class="space-y-6 p-4 border border-gray-200 rounded-2xl shadow-md">
        <!-- Name -->
        <div>
          <label for="name" class="block font-medium mb-1">ឈ្មោះ</label>
          <input
            id="name"
            v-model="name"
            type="text"
            class="w-full border border-gray-200 bg-white rounded-md px-4 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
            placeholder="បញ្ចូលឈ្មោះពេញ"
            required
          />
        </div>

        <!-- Position -->
        <div>
          <label for="position" class="block font-medium mb-1">មុខតំណែង</label>
          <input
            id="position"
            v-model="position"
            type="text"
            class="w-full border border-gray-200 bg-white rounded-md px-4 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
            placeholder="បញ្ចូលមុខដំណែង"
            required
          />
        </div>

        <!-- Department -->
 <div>
    <label for="department" class="block font-medium mb-1">នាយកដ្ឋាន</label>
    <select
      id="department"
      v-model="department"
      class="w-full border border-gray-200 bg-white rounded-md px-4 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
      required
    >
      <option disabled value="">ជ្រើសរើសអគ្គនាយកដ្ឋាន នាយកដ្ឋាន</option>
      <option v-for="dep in departments" :key="dep" :value="dep">{{ dep }}</option>
    </select>
  </div>

        <div class="grid grid-cols-2 gap-4">
          <!-- From Date -->
          <div>
            <label class="block font-medium mb-1">ពីថ្ងៃ</label>
            <div class="grid grid-cols-3 gap-2">
              <input
                v-model.number="fromDay"
                type="number"
                min="1"
                max="31"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              />
              <select
                v-model.number="fromMonth"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              >
                <option v-for="m in months" :key="m.id" :value="m.id">{{ m.name }}</option>
              </select>
              <input
                v-model.number="fromYear"
                type="number"
                min="1900"
                max="2100"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>

          <!-- To Date -->
          <div>
            <label class="block font-medium mb-1">ដល់ថ្ងៃ</label>
            <div class="grid grid-cols-3 gap-2">
              <input
                v-model.number="toDay"
                type="number"
                min="1"
                max="31"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              />
              <select
                v-model.number="toMonth"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              >
                <option v-for="m in months" :key="m.id" :value="m.id">{{ m.name }}</option>
              </select>
              <input
                v-model.number="toYear"
                type="number"
                min="1900"
                max="2100"
                class="w-full border border-gray-200 bg-white rounded-md px-2 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
              />
            </div>
          </div>
        </div>

        <!-- Reason -->
        <div>
          <label for="reason" class="block font-medium mb-1">មូលហេតុ</label>
          <textarea
            id="reason"
            v-model="reason"
            rows="3"
            class="w-full border border-gray-200 bg-white rounded-md px-4 py-1 shadow-sm focus:ring-2 focus:ring-blue-900"
            placeholder="សូមបញ្ជាក់មូលហេតុ..."
          ></textarea>
        </div>
        <div>
          <label for="image" class="block font-medium mb-1">បង្ហោះរូបភាព</label>

          <!-- Hidden native file input -->
          <input id="image" type="file" @change="onImageChange" accept="image/*" class="hidden" />

          <!-- Custom upload button with your SVG icon -->
          <label
            for="image"
            class="inline-flex items-center gap-2 py-2 cursor-pointer border border-gray-200 bg-gray-100 shadow-sm text-gray-700 px-4 py-1 rounded-md hover:bg-gray-200 transition"
          >
            <img src="/images/image-add-line.svg" alt="Upload Icon" class="w-5 h-5" />
            Upload Image
          </label>
        </div>

        <p
          class="text-sm text-gray-500"
        >ទិន្នន័យរបស់អ្នកមិនត្រូវបានរក្សាទុកទេ។ Your data is not stored anywhere.</p>

        <button
          type="button"
          class="w-full bg-[#093E65] text-white font-semibold py-3 rounded-md hover:bg-[#0063AC] transition"
          onclick="document.getElementById('slip-to-download').scrollIntoView({ behavior: 'smooth' });"
        >រួចរាល់</button>
      </form>
    </div>

    <!-- Preview -->
    <div class="order-2 md:order-none w-full md:w-1/2 flex justify-center items-center my-12">
      <div
        id="slip-to-download"
        class="relative aspect-[9/16] w-full max-w-sm md:w-96 bg-white rounded-lg shadow-lg flex flex-col overflow-hidden bg-cover"
        style="background-image: url('/images/watermark4.png')"
      >
        <!-- Header -->
        <div
          class="bg-gradient-to-t from-[#fff] to-[#87D8FF] text-white h-20 flex items-center justify-center"
        >
          <img src="/images/logo_long_black.png" alt="Logo" class="h-14 object-contain" />
        </div>

        <!-- Slip content -->
        <div class="flex flex-col p-6 text-center flex-1">
          <h2 class="font-moul text-base text-[#093E65] mb-4">ពាក្យឈប់សម្រាក</h2>

<!-- Name -->
<!-- Uploaded Image -->
        <div class="flex justify-center mt-2">
          <img
            v-if="imageUrl"
            :src="imageUrl"
            alt="Uploaded Image"
            class="w-24 h-30 scale-125 object-cover border-2 border-white shadow rounded-xl"
          />
          <div
            v-else
            class="w-24 h-30 scale-125 bg-gray-300 border-2 border-white flex items-center justify-center text-gray-500 shadow rounded-xl"
          >No Image</div>
        </div>
<div class="mt-8 text-center ">
              <p class="font-semibold font-siemreap text-sm">ខ្ញុំបាទ នាងខ្ញុំឈ្មោះ</p>

  <template v-if="hasKhmer(name) && hasLatin(name)">
    <div class="font-moul text-base text-black ">{{ extractKhmer(name) }}</div>
    <div class="font-dm-serif text-base mt-1text-black ">{{ extractLatin(name) }}</div>
  </template>
  <template v-else-if="hasKhmer(name)">
    <div class="font-moul text-sl font-moul text-gray ">{{ name }}</div>
  </template>
  <template v-else>
    <div class="font-dm-serif text-sl text-gray​ mt-1">{{ name || '________' }}</div>
  </template>
</div>
          <p class="text-gray-700 mt-1">{{ position || 'មុខតំណែង' }}</p>
          <div class="px-4 mt-2">
            <div
              :class="departmentBgColor(department)"
              class="mt-auto mb-2 py-2 text-center font-moul text-sm rounded-full"
            >
              {{ department || '---' }}
            </div>
          </div>

          <!-- Dates -->
          <div class=" text-gray-700">
            សូមដាក់ពាក្យឈប់សម្រាកគិតចាប់ពី
            <p>
              ថ្ងៃទី
              <span class="font-semibold">{{ fromDateKh }}</span>
              ដល់
              <span class="font-semibold">{{ toDateKh }}</span>
            </p>
            <p class="mt-1">
              ដែលចំនួនសរុបស្មើរនឹង៖
              <span class="font-bold">{{ khDayCount }}</span>
              ថ្ងៃ
            </p>
          </div>

          <!-- Reason -->
          <div class="mt-4 text-center text-gray-700">
            <p class="font-semibold">មូលហេតុ៖</p>
            <p class="mt-1 whitespace-pre-line">{{ reason || '_____________' }}</p>
          </div>

          <div class="mt-auto pt-6">
            <p class="text-sm text-gray-500">កាលបរិច្ឆេត: {{ today2 }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import months from "@/data/months.json";

// Khmer numerals
function toKhmerNumber(num) {
  return new Intl.NumberFormat("km-KH").format(num);
}

const reason = ref("");
const name = ref("");
const position = ref(""); 
const imageUrl = ref(null);
function onImageChange(event) {
  const file = event.target.files[0];
  if (!file) {
    imageUrl.value = null;
    return;
  }
  imageUrl.value = URL.createObjectURL(file);
}

// Defaults → today
const today = new Date();
const fromDay = ref(today.getDate());
const fromMonth = ref(today.getMonth() + 1);
const fromYear = ref(today.getFullYear());
const today2 = new Date().toLocaleDateString("km-KH-u-nu-khmr", {
  year: "numeric",
  month: "long",
  day: "numeric"
});

const toDay = ref(today.getDate());
const toMonth = ref(today.getMonth() + 1);
const toYear = ref(today.getFullYear());

// Build Date objects
function makeDate(d, m, y) {
  return new Date(y, m - 1, d);
}

// Khmer + English display
function displayDate(d, m, y, lang = "kh") {
  const monthObj = months.find(mm => mm.id === m);
  if (!monthObj) return "____";
  if (lang === "kh") {
    return `${toKhmerNumber(d)} ${monthObj.name} ${toKhmerNumber(y)}`;
  } else {
    return `${d} ${monthObj.value} ${y}`;
  }
}

function isKhmer(text) {
  if (!text) return false;
  return /[\u1780-\u17FF]/.test(text);
}
// Computed values for preview
const fromDateKh = computed(() =>
  displayDate(fromDay.value, fromMonth.value, fromYear.value, "kh")
);
const toDateKh = computed(() =>
  displayDate(toDay.value, toMonth.value, toYear.value, "kh")
);

const fromDateEn = computed(() =>
  displayDate(fromDay.value, fromMonth.value, fromYear.value, "en")
);
const toDateEn = computed(() =>
  displayDate(toDay.value, toMonth.value, toYear.value, "en")
);

// Day count
const dayCount = computed(() => {
  const start = makeDate(fromDay.value, fromMonth.value, fromYear.value);
  const end = makeDate(toDay.value, toMonth.value, toYear.value);
  if (end < start) return 0;
  const diffTime = end - start;
  return Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;
});
const khDayCount = computed(() => toKhmerNumber(dayCount.value));

//customization of departments
const department = ref("");

const departments = [
  "អគ្គនាយកដ្ឋាន ទស្សន៍ទាយ និងបង្ការគ្រោះ",
  "អគ្គនាយកដ្ឋាន វត្ថុទិព",
  "នាយកដ្ឋាន ទំនាក់ទំនង",
  "នាយកដ្ឋាន ប្រហារវេទមន្ត",
  "នាយកដ្ឋាន អាកាសនិងមេឃា"
];


function departmentBgColor(dep) {
  switch (dep) {
    case "អគ្គនាយកដ្ឋាន ទស្សន៍ទាយ និងបង្ការគ្រោះ":
      return "bg-gradient-to-r from-red-500 to-orange-300 text-white text-shadow";
    case "អគ្គនាយកដ្ឋាន វត្ថុទិព":
      return "bg-gradient-to-r from-green-400 to-indigo-500 text-white text-shadow";
    case "នាយកដ្ឋាន ទំនាក់ទំនង":
      return "bg-gradient-to-r from-sky-500 to-blue-700 text-white text-shadow";
    case "នាយកដ្ឋាន ប្រហារវេទមន្ត":
      return "bg-gradient-to-r from-violet-500 to-indigo-600 text-white text-shadow"; // no shadow for dark text
      case "នាយកដ្ឋាន អាកាសនិងមេឃា":
      return "bg-gradient-to-r from-teal-500 to-orange-600 text-white text-shadow"; // no shadow for dark text
    default:
      return "bg-gradient-to-r from-gray-400 to-gray-600 text-white text-shadow";
  }
}
function hasKhmer(text) {
  return /[\u1780-\u17FF]/.test(text);
}

function hasLatin(text) {
  return /[a-zA-Z]/.test(text);
}
</script>



