import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../src/components/layout/MainPage.vue';
import Header from '../src/components/layout/Header.vue';
import ContactPage from "@/components/pages/ContactPage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";

const routes = [
    {
        path: '/',
        components: {
            default: MainPage,
            header: Header,
        },
    },
    {
        path: '/about',
        components: {
            default: AboutPage,
            header: Header,
        },
    },
    {
        path: '/contact',
        components: {
            default: ContactPage,
            header: Header,
        },
    },
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
