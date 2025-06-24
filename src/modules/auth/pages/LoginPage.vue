<template>
    <form class="px-8 py-6">
        <label class="block font-semibold">Username or Email</label>
        <input
            v-model="username"
            type="text"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <label class="block mt-5 font-semibold">Password</label>
        <input
            v-model="password"
            type="password"
            class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md"
        />
        <div class="mt-5">
            <label for="rememberMe" class="mt-5">Remember me: </label>
            <input
                v-model="rememberMe"
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
            <a href="#" class="text-sm text-purple-600 hover:underline hover:text-purple-500"
                >Forgot password?</a
            >
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
import { ref } from 'vue';

const username = ref('');
const password = ref('');
const rememberMe = ref(false);
</script>
