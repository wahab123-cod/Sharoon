<template>
  <a
    :href="`https://wa.me/${phone}`"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition transform hover:scale-110 flex items-center justify-center"
  >
    <i class="fa-brands fa-whatsapp text-5xl"></i>
  </a>
</template>

<script setup>
const phone = "447946824511" 
</script>
