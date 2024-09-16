import { createWebHistory, createRouter } from "vue-router"
import Home from './components/Home.vue'
import Resume from './components/Resume.vue'
import Work from './components/Work.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/portfolio'},
        {path: '/portfolio/', component: Home},
        {path: '/portfolio/home', component: Home},
        {path: '/portfolio/resume', component: Resume},
        {path: '/portfolio/work', component: Work},
        {path: '/portfolio/contact', component: Contact},
        {path: '/portfolio/skills', component: Skills},
    ]
})

export default router