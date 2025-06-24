// import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
// // import { useAuthStore } from '../stores/auth.store';
// // import { AuthStatus } from '../interfaces';

// const isAuthenticatedGuard = async (
//     to: RouteLocationNormalized,
//     from: RouteLocationNormalized,
//     next: NavigationGuardNext,
// ) => {
//     const authStore = useAuthStore();

//     await authStore.checkAuthStatus();

//     // USED IN ADMIN
//     /* If the user is unauthenticated will be redirected to home,
//         if is authenticated, runs next to the route the user wants to go. */
//     if (authStore.authStatus === AuthStatus.Unauthenticated) {
//         next({ name: 'home' });
//     } else {
//         next();
//     }
// };

// export default isAuthenticatedGuard;
