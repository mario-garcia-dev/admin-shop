<template>
    <SpinnerComponent v-if="isLoading" />
    <RouterView v-else />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SpinnerComponent from './modules/common/components/SpinnerComponent.vue';

const isLoading = ref(false);
</script>
