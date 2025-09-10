import { createRouter, createWebHistory } from "vue-router"

// Import your pages
import Home from "../Pages/home.vue"
import About from "../Pages/about.vue"
import Projects from "../Pages/project.vue"
import contact from "../Pages/contact.vue"


const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/projects", name: "Projects", component: Projects },
    { path: "/contact", name: "contact", component: contact },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
