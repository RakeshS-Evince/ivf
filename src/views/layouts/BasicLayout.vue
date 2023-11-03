<template>
    <TheHeader />
    <RouterView />
    <TheFooter />
</template>
<script setup>
import TheFooter from '../core/TheFooter.vue';
import TheHeader from '../core/TheHeader.vue';
import { RouterView } from 'vue-router'
</script>

<style></style>