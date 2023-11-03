<template v-if="props.data">
    <template v-if="showImage()">
        <section class="section-banner bg-light position-relative">
            <picture class="absolute-div picture figure">
                <source :srcset="props.data?.fields.image_webp" type="image/webp">
                <source :srcset="props.data?.fields.image_jpg" type="image/jpeg">
                <img :src="props.data?.fields.image_jpg" alt="Banner">
            </picture>
        </section>
    </template>
    <template v-else>
        <section class="bg-primary head-section d-flex align-items-center py-8 py-md-12">
            <div class="container-fluid">
                <h1 class="text-secondary">{{ props?.data?.fields.page_heading }}</h1>
            </div>
        </section>
    </template>
</template>
<script setup>
const props = defineProps(['data'])
function showImage() {
    return (props.data?.fields.image_webp || props.data?.fields.image_jpg) && (!props.data?.fields.page_heading || !props.data?.fields.show_image)
}

</script>
<style></style>