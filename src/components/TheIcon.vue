<template>
    <div v-html="svgContent"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps(['path']);
const svgContent = ref(null)
onMounted(async function () {
    try {
        const response = await fetch(props?.path);
        if (!response.ok) {
            throw new Error("Failed to fetch SVG");
        }
        svgContent.value = await response.text();
    } catch (error) {
        console.error("Error loading SVG:", error);
    }
}
)
</script>
  