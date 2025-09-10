<template>
  <div>
    <Header />
    <section
      id="home"
      class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24"
    >
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        <!-- Left Content -->
        <div class="flex-1 space-y-6 text-center md:text-left">
          <h2 class="text-4xl md:text-5xl font-bold">
            Hi, I'm <span class="text-cyan-400">Sharoon Latif</span>
          </h2>
          <h3 class="text-2xl font-semibold">MERN Stack Full-Stack Developer</h3>
          <p class="text-gray-300 max-w-lg">
            A passionate and detail-oriented Full-Stack Developer specializing in the MERN
            stack, with hands-on experience building modern, scalable, and user-friendly
            web applications. Skilled in designing responsive UIs, developing robust
            backends, and integrating APIs to deliver seamless user experiences.
            Enthusiastic about creating innovative solutions that combine
            <span class="text-purple-400 font-semibold">beautiful design</span> and
            <span class="text-pink-400 font-semibold">clean, maintainable code</span>.
            Always eager to learn emerging technologies, collaborate in agile teams, and
            deliver impactful digital products that solve real-world problems.
          </p>

          <div class="flex justify-center md:justify-start space-x-4">
            <RouterLink
              to="/contact"
              class="bg-cyan-500 hover:bg-cyan-400 text-white px-5 py-3 rounded-lg font-semibold transition"
            >
              Hire Me
            </RouterLink>
            <RouterLink
              to="/projects"
              class="bg-transparent border border-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-5 py-3 rounded-lg font-semibold transition"
            >
              View Work
            </RouterLink>
          </div>
        </div>

        <!-- Right Image -->
        <div class="flex-1 flex justify-center mt-10 md:mt-0">
          <div
            class="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-lg shadow-cyan-500/50"
          >
            <img :src="Sharoon" alt="Sharoon Latif" class="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import Sharoon from "../assets/sharoon.jpg";
</script>
