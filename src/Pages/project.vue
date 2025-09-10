<template>
  <div>
    <Header />
    <div
      class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white"
    >
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <!-- TITLE -->
        <section class="text-center">
          <h1 class="text-3xl md:text-4xl font-bold text-white dark:text-white mt-6">
            My Projects
          </h1>
          <p class="mt-3 text-white dark:text-gray-300 max-w-2xl mx-auto">
            A selection of my work by <span class="font-semibold">Sharoon Latif</span> —
            practical business solutions, custom applications, and UI projects.
          </p>
        </section>

        <!-- PROJECT GRID -->
        <section>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <a
              v-for="project in projects"
              :key="project.name"
              :href="project.link"
              target="_blank"
              class="bg-dark dark:bg-gray-800 rounded-xl shadow border border-gray-900 dark:border-white overflow-hidden hover:shadow-lg hover:scale-105 transition transform block"
            >
              <!-- IMAGE -->
              <img
                :src="project.image"
                alt="Project image"
                class="w-full h-48 object-cover"
              />
              <!-- CONTENT -->
              <div class="p-5">
                <h3 class="font-semibold text-lg text-gray-9 dark:text-white">
                  {{ project.name }}
                </h3>
                <p class="text-sm text-white dark:text-white mt-2 leading-relaxed">
                  {{ project.description }}
                </p>
                <p class="mt-3 text-xs text-white dark:text-gray-400">
                  <strong>Tech:</strong> {{ project.tech }}
                </p>
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import ride from "../assets/ride.jpg";
import hop from "../assets/hopon.jpg";
import indoor from "../assets/indoor.jpg";
import res from "../assets/res.jpg";
import eco from "../assets/eco.jpg";
import inventory from "../assets/inventory.jpg";
import ladies from "../assets/cloth.jpg";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

const projects = [
  {
    name: "Rideon Minicabs",
    description:
      "A fast and reliable car booking platform designed for minicab services, with real-time bookings, fare estimation, and driver management.",
    tech: "Vue 3, Vite, Node.js, MongoDB",
    image: ride,
    link: "https://rideonminicabs.com", // 🔗 replace with your live link
  },
  {
    name: "Hopon Cars",
    description:
      "Car booking system providing seamless ride reservations, user-friendly UI, and secure payment integration.",
    tech: "Vue 3, Vite, Express.js, MongoDB",
    image: hop,
    link: "https://hoponcars.com", // 🔗 replace with your live link
  },
  {
    name: "Indoor Sport Booking System",
    description:
      "Online booking for sports facilities with e-commerce integration, real-time availability, memberships, and payments.",
    tech: "Nuxt.js, Node.js, MongoDB",
    image: indoor,
    link: "#", // 🔗 replace with real link
  },
  {
    name: "Restaurant Management System",
    description:
      "Complete POS, kitchen display, and inventory tracking with multi-branch support and analytics dashboard.",
    tech: "React, Express, MySQL",
    image: res,
    link: "#",
  },
  {
    name: "Shopify Inventory & Reports",
    description:
      "Custom Shopify app for inventory tracking, analytics, and automated reporting across channels.",
    tech: "Nuxt.js, Shopify API",
    image: inventory,
    link: "#",
  },
  {
    name: "Rang Mehal Clothing Store",
    description:
      "only frontend e-commerce site with product filtering, cart, checkout, and responsive UI.",
    tech: "Nuxt.js, Shopify API",
    image: ladies,
    link: "https://rang-mehal-frontend.vercel.app/",
  },
  {
    name: "E-Commerce Store",
    description:
      "Modern online store with product filtering, cart, checkout, and responsive UI.",
    tech: "Nuxt.js, Stripe API",
    image: eco,
    link: "#",
  },
];
</script>
