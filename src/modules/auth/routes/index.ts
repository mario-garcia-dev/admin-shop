import type { RouteRecordRaw } from 'vue-router';
import isAuthenticatedGuard from '../guards/is-authenticated.guard';

export const authRoutes: RouteRecordRaw[] = [
    {
        path: '/auth',
        name: 'auth',
        redirect: { name: 'login' },
        beforeEnter: isAuthenticatedGuard,
        component: () => import('../layouts/AuthLayout.vue'),
        children: [
            {
                path: 'login',
                name: 'login',
                component: () => import('../pages/LoginPage.vue'),
            },
            {
                path: 'register',
                name: 'register',
                component: () => import('../pages/RegisterPage.vue'),
            },
            {
                path: 'change-password',
                name: 'change-password',
                component: () => import('../pages/ChangePasswordPage.vue'),
            },
        ],
    },
];
