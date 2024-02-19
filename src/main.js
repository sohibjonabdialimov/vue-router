import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"
import About from "@/views/About.vue"

const route = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/", name: "Home", component: Home
    },
    {
      path: "/about", name: "About", component: About
    }
  ]
})
createApp(App).use(route).mount('#app')
