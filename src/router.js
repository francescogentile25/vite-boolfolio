import { createRouter, createWebHistory } from 'vue-router'

import Home from './pages/Home.vue'
import ChiSono from './pages/ChiSono.vue'
import Contacts from './pages/Contacts.vue'
import Portfolio from './pages/Portfolio.vue'

const history = createWebHistory()
console.log('history: ', history)

const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/chi-sono',
            name: 'chisono',
            component: ChiSono,
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: Contacts,
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: Portfolio,
        },
    ],
})

export { router }