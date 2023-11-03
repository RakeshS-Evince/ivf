<template v-if="pageData">
    <PageHeading :data="pageData?.fields.header" />
    <PageContent :data="pageData?.fields" />
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import PageHeading from './PageHeading.vue';
import PageContent from './PageContent.vue';
import { useButterCms } from '../../../composables/useButterCms';
const pageData = ref();
const butter = useButterCms()
onMounted(() => {
    getPage(useRoute().fullPath.split('/').reverse()[0])
    useRouter().beforeResolve(async (to, from, next) => {
        let slug = to.fullPath.split('/').reverse()[0]
        getPage(slug)
        next()
    })
})
const getPage = async (slug) => {
    if (slug) {
        let res = await butter.getPage('about-us');
        let obj = {}
        res.data.data?.fields.body.forEach(element => {
            obj[element.type] = element
        })
        res.data.data.fields = obj
        pageData.value = res.data.data
    }
}
</script>
<style></style>

