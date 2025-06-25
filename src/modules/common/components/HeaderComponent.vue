<template>
    <nav class="flex justify-between items-center px-5 w-full h-15 bg-gray-200">
        <div
            class="text-3xl italic underline text-purple-700 hover:text-purple-500 cursor-pointer transition-all"
        >
            <b>Tienda Shop</b>
        </div>
        <div>
            <div v-if="!authStore.currentUser" class="right-nav">
                <p>Please, log in to your account</p>
                <button
                    @click="$router.push({ name: 'login' })"
                    class="bg-purple-500 text-white py-2 px-3 rounded-md hover:bg-purple-600 cursor-pointer transition-all"
                >
                    Log in
                </button>
            </div>
            <div v-else class="right-nav">
                <p>Welcome {{ authStore.currentUser.username }}</p>
                <button
                    class="bg-red-500 text-white py-2 px-3 rounded-md hover:bg-red-600 cursor-pointer transition-all"
                >
                    Log out
                </button>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useAuthStore } from '@/modules/auth/store/authStore';

const authStore = useAuthStore();
</script>

<style scoped>
@reference '@/assets/main.css';

.right-nav {
    @apply flex justify-around items-center w-80;
}
</style>
