<template>
  <div>
    <Header />
    <div
      class="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <main class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <!-- HERO -->
        <section class="flex flex-col md:flex-row items-center md:items-start gap-8 mt-6">
          <div class="flex-shrink-0">
            <img
              :src="SharoonImg"
              alt="Sharoon Latif"
              class="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-indigo-600"
            />
          </div>
          <div class="flex-1">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
              Sharoon Latif
            </h1>
            <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
              MERN Stack Full-Stack Developer
            </p>
            <p class="mt-4 text-gray-700 dark:text-gray-400 leading-relaxed">
              I’m a full-stack developer passionate about crafting modern, scalable, and
              elegant web applications. Experienced in React, Vue/Nuxt, Node.js, Express,
              MongoDB, and API integrations. I enjoy building responsive, user-friendly
              designs with Tailwind CSS and delivering clean, maintainable code. Always
              eager to learn and explore new technologies that push boundaries in web
              development.
            </p>
            <div class="mt-6 flex flex-wrap gap-4">
              <a
                href="/contact"
                class="px-5 py-2 bg-indigo-600 text-white rounded-lg font-medium shadow hover:bg-indigo-500"
                >Contact Me</a
              >
            </div>
          </div>
        </section>

        <!-- SKILLS -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h2>
          <div class="flex flex-wrap gap-3">
            <span
              v-for="skill in skills"
              :key="skill"
              class="px-4 py-2 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 rounded-full text-sm font-medium shadow-sm hover:bg-indigo-200 dark:hover:bg-indigo-700 transition"
            >
              {{ skill }}
            </span>
          </div>
        </section>

        <!-- EXPERIENCE -->
        <section>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience & Education
          </h2>
          <ol class="relative border-l border-gray-300 dark:border-gray-700">
            <li v-for="exp in experiences" :key="exp.title" class="mb-10 ml-6">
              <div
                class="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white dark:border-gray-900"
              ></div>
              <time class="mb-1 text-sm font-normal text-gray-400">{{ exp.period }}</time>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                {{ exp.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-300">{{ exp.company }}</p>
              <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {{ exp.description }}
              </p>
            </li>
          </ol>
        </section>
      </main>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";

// ✅ Import image
import SharoonImg from "../assets/sharoon.jpg";

const skills = [
  "Python / Django / Flask / FastAPI",
  "React / Next.js",
  "Vue / Nuxt",
  "Node.js / Express",
  "MongoDB / SQL",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "RESTful APIs",
  "GraphQL",
  "Git & GitHub",
  "Agile Methodologies",
  "Testing & Debugging",
  "CI/CD",
  "Docker",
  "AWS / Cloud Services",
  "Problem Solving",
  "Communication",
  "Team Collaboration",
  "Project Management",
  "UI/UX Design",
  "Vercel / Netlify",
  "Hosting & Deployment",
  "ngrok",
  "Postman",
  "Figma",
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company: "Freelance / Projects",
    period: "2022 - Present",
    description:
      "Worked on multiple freelance and personal projects using the MERN stack, building scalable APIs and interactive UIs.",
  },
  {
    title: "BSc Computer Science",
    company: "De Montfort University, UK",
    period: "Graduated 2021",
    description:
      "Focused on software engineering, web development, databases, and AI. Developed multiple academic projects and gained strong problem-solving skills.",
  },
];
</script>
<style scoped></style>
