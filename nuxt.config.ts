// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  
  compatibilityDate: "2025-07-15",
  modules: ['motion-v/nuxt', 'shadcn-nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(), // enables Tailwind v4 in Vite
    ],
  },
  app: {
    head: {
      title: 'MMS Card', // fallback
       link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Moul&family=Siemreap&family=DM+Serif+Text&display=swap&family=Oswald:wght@200..700&'
      }
    ]
    },
  },
});