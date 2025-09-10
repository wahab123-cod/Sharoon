<template>
  <footer
    class="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-400 py-8 mt-auto"
  >
    <div class="container mx-auto text-center space-y-4">
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Sharoon Latif. All rights reserved.
      </p>
      <div class="flex justify-center gap-8 text-2xl">
        <!-- GitHub -->
        <a
          href="https://github.com/"
          target="_blank"
          class="hover:opacity-80 transition"
          style="color: gray"
        >
          <i class="fab fa-github"></i>
        </a>

        <!-- LinkedIn -->
        <a
          href="https://www.linkedin.com/in/sharoon-latif-8814701bb"
          target="_blank"
          class="hover:opacity-80 transition"
          style="color: #0a66c2"
        >
          <i class="fab fa-linkedin"></i>
        </a>

        <!-- Upwork -->
        <a
          href="https://www.upwork.com/freelancers/~0191f68f891b196ec6"
          target="_blank"
          class="hover:opacity-80 transition"
          style="color: #6fda44"
        >
          <i class="fas fa-briefcase"></i>
        </a>

        <!-- Email -->
        <a
          href="mailto:sharoon@example.com"
          class="hover:opacity-80 transition"
          style="color: #d14836"
        >
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
