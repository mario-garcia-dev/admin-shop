import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '../store/authStore';
import { AuthStatus } from '../interfaces/auth-status.enum';

const isAuthenticatedGuard = async (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext,
) => {
    const authStore = useAuthStore();
    /* If the user is alredy authenticated, is redirected to the shop. */
    if (authStore.currentUser?.isAuthenticated === AuthStatus.Authenticated) {
        next({ name: 'shop' });
    } else {
        next();
    }
};

export default isAuthenticatedGuard;
