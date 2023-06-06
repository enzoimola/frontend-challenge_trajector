import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../src/components/layout/MainPage.vue';

const routes = [
    { path: '/', component: MainPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
