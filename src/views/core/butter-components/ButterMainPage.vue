<template></template>
<script setup>
import {onMounted,ref} from 'vue'
import { useRoute } from 'vue-router';
const slug=ref('')
onMounted(()=>{
    slug.value=useRoute().path.slice(1)
    console.log(slug.value)
})
</script>
<style></style>