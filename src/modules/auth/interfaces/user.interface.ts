export interface User {
    id: string;
    username: string;
    email: string;
    roles: string[];
    isActive: boolean;
    isAuthenticated: boolean;
}
