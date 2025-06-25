import { authRoutes } from '@/modules/auth/routes';
import { useAuthStore } from '@/modules/auth/store/authStore';
import ShopLayout from '@/modules/shop/layouts/ShopLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'shop',
            component: ShopLayout,
        },
        ...authRoutes,
    ],
});

// Resets the value of errorMessage when the route change
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    authStore.errorMessage = '';
    next();
});

export default router;
