import type { AuthStatus } from './auth-status.enum';

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    roles: string[];
    isActive: boolean;
    isAuthenticated: AuthStatus;
}
