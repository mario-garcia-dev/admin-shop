// import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
// import { useAuthStore } from '../store/authStore';
// import { AuthStatus } from '../interfaces/auth-status.enum';

const isUnauthenticatedGuard = async () =>
    // to: RouteLocationNormalized,
    // from: RouteLocationNormalized,
    // next: NavigationGuardNext,
    {
        // TODO: Redirect the user to the login if is unauthenticated.
        // const authStore = useAuthStore();
        // if (authStore.currentUser?.isAuthenticated === AuthStatus.Unauthenticated) {
        //     next({ name: 'login' });
        // } else {
        //     next();
        // }
    };

export default isUnauthenticatedGuard;
