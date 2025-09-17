<template>
  <div>
    <Header />

    <section
      id="home"
      class="min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-24"
    >
      <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <!-- HERO -->
        <section class="flex flex-col md:flex-row items-center gap-10">
          <div class="flex-1 space-y-6 text-center md:text-left">
            <h1 class="text-4xl md:text-5xl font-bold leading-tight">
              Hi, I’m <span class="text-indigo-400">Sharoon Latif</span>
            </h1>
            <p class="text-lg text-gray-300">
              Full-Stack Developer | MERN & Vue/Nuxt Specialist
            </p>
            <p class="text-gray-400 max-w-xl">
              I help businesses build
              <span class="text-indigo-400 font-semibold">scalable</span>,
              <span class="text-pink-400 font-semibold">modern</span> and
              <span class="text-green-400 font-semibold">user-friendly</span> digital
              products.
            </p>

            <div class="flex justify-center md:justify-start gap-4 mt-6">
              <RouterLink
                to="/projects"
                class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow font-semibold"
              >
                View My Work
              </RouterLink>
              <RouterLink
                to="/contact"
                class="px-6 py-3 border border-indigo-400 hover:bg-indigo-400 hover:text-gray-900 rounded-lg shadow font-semibold"
              >
                Hire Me
              </RouterLink>
            </div>
          </div>

          <!-- Hero Image -->
          <div class="flex-1 flex justify-center">
            <img
              :src="SharoonImg"
              alt="Sharoon Latif"
              class="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl border-4 border-indigo-600"
            />
          </div>
        </section>

        <!-- SERVICES -->
        <section>
          <h2 class="text-3xl font-bold text-center text-indigo-400 mb-10">Services</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/40">
              <h3 class="font-semibold text-xl mb-3">Web Development</h3>
              <p class="text-gray-400">
                Full-stack web apps with React, Vue/Nuxt, Node.js, and MongoDB. From idea
                to deployment.
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/40">
              <h3 class="font-semibold text-xl mb-3">API & Integrations</h3>
              <p class="text-gray-400">
                Secure REST & GraphQL APIs, third-party integrations (Stripe, Shopify,
                etc.).
              </p>
            </div>
            <div class="bg-gray-800 p-6 rounded-xl shadow hover:shadow-indigo-500/40">
              <h3 class="font-semibold text-xl mb-3">UI/UX & Deployment</h3>
              <p class="text-gray-400">
                Responsive designs with Tailwind & Figma. Deployment on Vercel, AWS, and
                cloud hosting.
              </p>
            </div>
          </div>
        </section>

        <!-- SKILLS -->
        <section>
          <h2 class="text-3xl font-bold text-center text-indigo-400 mb-10">Tech Stack</h2>
          <div class="flex flex-wrap justify-center gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-gray-800 text-gray-200 rounded-full text-sm font-medium hover:bg-indigo-600 transition"
            >
              {{ skill }}
            </span>
          </div>
        </section>

        <!-- EXPERIENCE -->
        <section>
          <h2 class="text-3xl font-bold text-center text-indigo-400 mb-10">Experience</h2>
          <ol class="relative border-l border-gray-700 max-w-3xl mx-auto">
            <li v-for="exp in experiences" :key="exp.title" class="mb-10 ml-6">
              <div class="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5"></div>
              <time class="text-sm text-gray-400">{{ exp.period }}</time>
              <h3 class="text-lg font-semibold">{{ exp.title }}</h3>
              <p class="text-gray-400">{{ exp.company }}</p>
              <p class="mt-2 text-sm text-gray-300">{{ exp.description }}</p>
            </li>
          </ol>
        </section>

        <!-- FEATURED PROJECTS -->
        <section>
          <h2 class="text-3xl font-bold text-center text-indigo-400 mb-10">
            Featured Projects
          </h2>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="project in featuredProjects"
              :key="project.name"
              class="bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-indigo-500/40 hover:scale-105 transition"
            >
              <img
                :src="project.image"
                alt="Project image"
                class="w-full h-40 object-cover"
              />
              <div class="p-5">
                <h3 class="font-semibold text-lg">{{ project.name }}</h3>
                <p class="text-sm text-gray-400 mt-2">{{ project.description }}</p>
              </div>
            </div>
          </div>
          <div class="text-center mt-8">
            <RouterLink
              to="/projects"
              class="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow font-semibold"
            >
              See All Projects
            </RouterLink>
          </div>
        </section>

        <!-- CONTACT CTA -->
        <section class="text-center bg-gray-800 py-12 rounded-xl shadow-lg">
          <h2 class="text-3xl font-bold text-indigo-400">Let’s Work Together</h2>
          <p class="mt-3 text-gray-300">
            Have a project idea? I’d love to hear about it.
          </p>
          <RouterLink
            to="/contact"
            class="mt-6 inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow font-semibold"
          >
            Contact Me
          </RouterLink>
        </section>
      </main>
    </section>

    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import SharoonImg from "../assets/sharoon.jpg";
import ride from "../assets/ride.jpg";
import hop from "../assets/hopon.jpg";
import eco from "../assets/eco.jpg";

const skills = [
  "React / Next.js",
  "Vue / Nuxt",
  "Node.js / Express",
  "MongoDB / SQL",
  "Tailwind CSS",
  "TypeScript",
  "RESTful APIs",
  "GraphQL",
  "Docker",
  "AWS",
  "Git & GitHub",
  "UI/UX Design",
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance / Projects",
    period: "2022 - Present",
    description:
      "Developed scalable APIs, modern UIs, and custom business solutions using MERN and Vue/Nuxt stack.",
  },
  {
    title: "BSc Computer Science",
    company: "De Montfort University, UK",
    period: "Graduated 2021",
    description:
      "Specialized in web development, databases, and AI. Built multiple academic and freelance projects.",
  },
];

const featuredProjects = [
  {
    name: "Rideon Minicabs",
    description:
      "Car booking platform with real-time rides, fare estimation, and driver management.",
    image: ride,
  },
  {
    name: "Hopon Cars",
    description: "Seamless ride reservation system with secure payments.",
    image: hop,
  },
  {
    name: "E-Commerce Store",
    description: "Modern online shop with cart, checkout, and responsive UI.",
    image: eco,
  },
];
</script>
