<template>
    <form class="px-8 py-6" @submit.prevent="onLogin">
        <span
            v-show="authStore.errorMessage && authStore.errorMessage.length !== 0"
            class="text-center text-sm text-red-500"
        >
            <p>{{ authStore.errorMessage }}</p>
        </span>
        <label class="block font-semibold">Username</label>
        <input
            v-model="form.username"
            type="text"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-5 font-semibold">Password</label>
        <input
            v-model="form.password"
            type="password"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <div class="mt-5">
            <label for="rememberMe" class="mt-5">Remember me: </label>
            <input
                v-model="form.rememberMe"
                type="checkbox"
                name="rememberMe"
                class="accent-purple-300 cursor-pointer w-3.5 h-3.5"
            />
        </div>

        <div class="flex justify-between items-baseline">
            <button
                type="submit"
                class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 cursor-pointer"
            >
                Log in
            </button>
            <router-link
                :to="{ name: 'change-password' }"
                class="text-sm text-purple-600 hover:underline hover:text-purple-500"
                >Forgot password?
            </router-link>
        </div>
    </form>
    <p class="text-center pb-5">
        Don't have an account?
        <router-link
            :to="{ name: 'register' }"
            class="text-purple-600 hover:text-purple-500 hover:underline"
            >Sign up here</router-link
        >
    </p>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useAuthStore } from '../store/authStore';

const form = reactive({
    username: '',
    password: '',
    rememberMe: false,
});

const authStore = useAuthStore();

const onLogin = () => {
    authStore.loginAction(form.username, form.password, form.rememberMe);
};

const user = ref<string | null>(localStorage.getItem('user'));

if (user.value && user.value.length !== 0) {
    form.username = user.value;
}
</script>
