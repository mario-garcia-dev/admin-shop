import { AuthStatus } from '../interfaces/auth-status.enum';
import type { User } from '../interfaces/user.interface';

export const fakeUsersList: User[] = [
    {
        id: 'ABC001',
        username: 'Mario123',
        email: 'garciasernamarioalberto@gmail.com',
        password: 'password1',
        isActive: true,
        isAuthenticated: AuthStatus.Unauthenticated,
        roles: ['user', 'admin'],
    },
    {
        id: 'ABC002',
        username: 'Juanito456',
        email: 'juanito.jaulas@gmail.com',
        password: 'password2',
        isActive: true,
        isAuthenticated: AuthStatus.Unauthenticated,
        roles: ['user'],
    },
];
