import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from "../views/First";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'First',
        component: First,
        children: [
            {
                path: '/a',
                name: 'A',
                component: () => import(/* webpackChunkName: "about" */ '../views/A.vue'),
                children: [
                    {
                        path: '/a1',
                        component: () => import(/* webpackChunkName: "about" */ '../views/A1.vue')
                    }
                ]
            },
            {
                path: '/b',
                name: 'B',
                component: () => import(/* webpackChunkName: "about" */ '../views/B.vue')
            }
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
