<template>
    <form class="px-8 py-6" @submit.prevent="onRegister">
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
        <label class="block mt-5 font-semibold">Email</label>
        <input
            v-model="form.email"
            type="email"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-5 font-semibold">Password</label>
        <input
            v-model="form.password"
            type="password"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <div class="flex justify-between items-baseline">
            <button
                type="submit"
                class="mt-4 bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600 cursor-pointer"
            >
                Sign up
            </button>
        </div>
    </form>
    <p class="text-center pb-5">
        Already have an account?
        <router-link
            :to="{ name: 'login' }"
            class="text-purple-600 hover:text-purple-500 hover:underline"
            >Log in here</router-link
        >
    </p>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useAuthStore } from '../store/authStore';

const form = reactive({
    username: '',
    email: '',
    password: '',
});

const authStore = useAuthStore();

const onRegister = () => {
    authStore.registerAction(form.username, form.email, form.password);
};
</script>
