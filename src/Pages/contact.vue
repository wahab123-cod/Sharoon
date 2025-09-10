<template>
  <div
    class="flex flex-col min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white"
  >
    <Header />

    <section class="flex-grow py-16 px-6 mt-12">
      <!-- Heading -->
      <div class="max-w-6xl mx-auto text-center mb-14 mt-12">
        <h1 class="text-4xl md:text-5xl font-bold tracking-wide">
          Let’s <span class="text-cyan-400">Connect</span>
        </h1>
        <p class="text-white mt-4 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind, want to collaborate, or just say hello? I’m always
          excited to connect with like-minded people and explore new ideas. Here’s how you
          can reach me:
        </p>
      </div>

      <!-- Contact Cards -->
      <div
        class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        <!-- WhatsApp -->
        <div
          class="bg-gray-800 hover:bg-gray-700 hover:scale-105 transform transition duration-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg"
        >
          <font-awesome-icon
            :icon="['fab', 'whatsapp']"
            class="text-green-400 text-5xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">WhatsApp</h3>
          <p class="text-white">07946824511</p>
          <p class="text-white text-sm mt-2">Quick responses guaranteed</p>
        </div>

        <!-- Email -->
        <div
          class="bg-gray-800 hover:bg-gray-700 hover:scale-105 transform transition duration-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg"
        >
          <font-awesome-icon
            :icon="['fas', 'envelope']"
            class="text-cyan-400 text-5xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Email</h3>
          <p class="text-white">Sharoonlatif32@gmail.com</p>
          <p class="text-white text-sm mt-2">Replies within 24 hours</p>
        </div>

        <!-- Address -->
        <div
          class="bg-gray-800 hover:bg-gray-700 hover:scale-105 transform transition duration-300 rounded-xl p-8 flex flex-col items-center text-center shadow-lg"
        >
          <font-awesome-icon
            :icon="['fas', 'map-marker-alt']"
            class="text-cyan-400 text-5xl mb-4"
          />
          <h3 class="text-xl font-semibold mb-2">Location</h3>
          <p class="text-white">United Kingdom</p>
          <p class="text-white text-sm mt-2">Available for collaborations worldwide</p>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClock,
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faGithub,
  faWhatsapp,
  faTelegram
);
</script>
