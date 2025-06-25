import { defineStore } from 'pinia';
import type { User } from '../interfaces/user.interface';
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { fakeUsersList } from '../helpers/fakeUsersList';
import { useRouter } from 'vue-router';
import { AuthStatus } from '../interfaces/auth-status.enum';

export const useAuthStore = defineStore('auth', () => {
    const router = useRouter();

    const currentUser = ref<User | undefined>();
    const usersList = ref<User[]>(fakeUsersList);
    const errorMessage = ref<string>('');

    // ACTIONS
    // Login Action
    const loginAction = (username: string, password: string, rememberMe: boolean) => {
        if (!username || !password) {
            errorMessage.value = 'Complete all fields, please...';
            return;
        }

        const user = usersList.value.find((u) => u.username === username);

        if (user && user.password === password) {
            alert('Log in successfully!');

            errorMessage.value = '';
            currentUser.value = user;
            currentUser.value.isAuthenticated = AuthStatus.Authenticated;

            router.replace({ name: 'shop' });

            if (rememberMe) {
                localStorage.setItem('user', username);
            }
        } else {
            errorMessage.value = 'User or password icorrect. Try again.';
        }
        return;
    };

    // Register Action
    const registerAction = (username: string, email: string, password: string) => {
        if (!username || !email || !password) {
            errorMessage.value = 'Complete all fields, please...';
            return;
        }

        const user = usersList.value.find((u) => u.username === username);

        if (!user) {
            usersList.value.push({
                id: uuidv4(),
                username,
                email,
                password,
                isActive: true,
                isAuthenticated: AuthStatus.Authenticated,
                roles: ['user'],
            });
            errorMessage.value = '';
            router.replace({ name: 'login' });
            alert('User registered. Log in, please.');
        } else {
            errorMessage.value = 'The user alredy exists.';
            return;
        }
        return;
    };

    // Change Password Action
    const changePasswordAction = (username: string, password1: string, password2: string) => {
        if (!username || !password1 || !password2) {
            errorMessage.value = 'Complete all fields, please...';
            return;
        }

        const user = usersList.value.find((u) => u.username === username);

        if (!user) {
            errorMessage.value = `User doesn't exists.`;
            return;
        }
        if (password1 !== password2) {
            errorMessage.value = `Passwords doesn't match. Try again.`;
            return;
        } else {
            errorMessage.value = '';
            user.password = password1;
            alert('Password changed successfully!');

            router.replace({ name: 'login' });
        }
        return;
    };

    return {
        currentUser,
        usersList,
        errorMessage,

        loginAction,
        registerAction,
        changePasswordAction,
    };
});
