<template v-if="props.data?.content?.field.show_this">
    <section class="pt-10 pt-md-12 pt-xl-15 pb-25">
        <div class="container-fluid">
            <!-- Heading block -->
            <div class="row mb-5 mb-md-10">
                <div class="col-xl-9 col-xxl-8 col-xxxl-7">
                    <h1>{{ props.data?.content?.fields.heading }}</h1>
                </div>
            </div>
            <!-- Heading end -->
            <!-- Sections -->
            <div class="row justify-content-between mb-20 mb-xl-25">
                <!-- Content Section -->

                <div class="col-md-7 col-xl-7">
                    <!-- Main Contents  -->
                    <template v-for="content in props.data?.content?.fields.content">
                        <template v-if="!content.hide_this">
                            <h2 v-if="content?.heading">{{ content?.heading }}</h2>
                            <div v-html="content?.content"></div>
                        </template>
                    </template>
                    <!-- FAQ -->

                    <PageFaq :data="props.data?.faq" />

                    <!-- Related Contents -->


                </div>

                <!-- Content Section end-->

                <div class="col-md-5 col-xl-4 pt-20 pt-md-0" v-if="props.data?.contact_us.fields?.show_this">
                    <template v-for="contact of  props.data?.contact_us.fields?.content">
                        <div v-if="!contact.hide_this"
                            class="border border-secondary border-3 px-3 py-9 p-md-9 border-radius-md text-center">
                            <PageContactUs :data="contact" />
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { watch } from 'vue'
import PageContactUs from './PageContactUs.vue';
import PageFaq from './PageFaq.vue';
const props = defineProps(['data']);
watch(props, (n) => {
    console.log(n.data.faq);
})
</script>
<style></style>