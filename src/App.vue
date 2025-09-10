<script setup></script>

<template>
  <div>
    <!-- Page Content -->
    <router-view />

    <!-- Floating WhatsApp Button -->
    <a
      href="https://wa.me/447946824511"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition transform hover:scale-110"
      style="bottom: 80px"
    >
      <i class="fab fa-whatsapp text-3xl"></i>
    </a>
  </div>
</template>

<style>
/* Optional pulse animation */
a.fixed i {
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
}
</style>
