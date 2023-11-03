
<template>
    <h5 class="fw-normal mb-7 text-black" v-html="props.data?.reason"></h5>
    <a :href="data.url" class="btn btn-secondary text-uppercase">{{ props.data?.button_text || 'Contact Us' }}</a>
</template>
<script setup>
import { watch } from 'vue'
const props = defineProps(['data'])
watch(props, (n) => {
    console.log('contact', n.data);
})
</script>
<style></style>