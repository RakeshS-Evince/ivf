<template>
    <header :class="offsetFlag === false ? 'bg-white header-scroll' : 'bg-white'" :class.open="classNav" id="header">
        <div class="container-fluid">
            <div class="d-flex flex-wrap w-100 justify-content-between">
                <!-- LOGO -->
                <div class="d-flex align-items-center position-relative">
                    <a href="/" class="brand-logo">
                        <TheIcon :path="app_image" />
                    </a>
                    <a href="/" class="brand-logo-mobile">
                        <TheIcon :path="app_mobile_image" />
                    </a>
                </div>

                <!-- Navigation buttons -->
                <div class="d-flex flex-wrap align-items-center">
                    <template v-for=" button in headerData?.fields?.buttons">
                        <template v-if="!button.label && button?.image">
                            <a :href="button?.href" class="icon btn btn-outline-secondary rounded-circle ms-2 ms-xl-5 p-0">
                                <TheIcon :path="button?.image" />
                            </a>
                        </template>
                        <template v-else>
                            <a :href="button?.href"
                                :class="{ 'ms-2 p-0': button?.is_phone, 'btn btn-secondary ms-10': !button?.is_phone && button?.label }"
                                class="d-none d-xl-inline-block">
                                {{ button.label }}
                            </a>
                        </template>
                    </template>
                    <!-- Toggler -->
                    <div class="nav-toggle d-inline-block d-xl-none ms-5 ms-xl-12" @click="toggleNav()">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                </div>
            </div>
            <nav>
                <!-- Navigation buttons on mobile screen -->
                <template v-for=" button in headerData?.fields?.buttons">
                    <div class="d-flex justify-content-between d-inline-block d-xl-none">
                        <template v-if="!button.label && button?.image"> </template>
                        <template v-else>
                            <a :href="button?.href"
                                :class="{ 'ms-2 p-0': button?.is_phone, 'btn btn-secondary ms-10': !button?.is_phone && button?.label }"
                                class="d-none d-xl-inline-block">
                                {{ button.label }}
                            </a>
                        </template>
                    </div>
                </template>
                <!-- Main Navigations -->
                <ul class="d-flex flex-column flex-xl-row flex-wrap justify-content-end">
                    <template v-for="item in navItems">
                        <template v-if="!item.hide_this">
                            <!-- Nav links -->
                            <li>
                                <RouterLink :to="'/' + item.href">{{ item.label }}</RouterLink>
                                <i data-bs-toggle="collapse" v-bind:data-bs-target="'#' + item.href" aria-expanded="false"
                                    v-bind:aria-controls="item.href"></i>
                                <div class="collapse" :id="item.href" v-if="item?.nav_item_child.length">
                                    <ul>
                                        <!-- Nav child links -->
                                        <li v-for="child_item in item?.nav_item_child">
                                            <RouterLink :to="'/' + child_item.href" data-bs-toggle="collapse"
                                                v-bind:data-bs-target="'#' + child_item.href" aria-expanded="false"
                                                v-bind:aria-controls="child_item.href">{{ child_item.label }}
                                            </RouterLink>
                                            <ul v-if="getSubMenu(child_item.sub_menu).length" class="collapse"
                                                :id="child_item.href">
                                                <!-- Nav child sub links -->
                                                <li v-for="sub_menu in getSubMenu(child_item.sub_menu)"
                                                    class="d-inline-block d-xl-none">
                                                    <RouterLink :to="sub_menu.href">{{ sub_menu.href }}</RouterLink>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </template>
                    </template>
                </ul>
            </nav>
        </div>
        <div class="nav-backdrop" @click="toggleNav()"></div>
    </header>
</template>

<script setup>
import app_image from '../../assets/images/brand-logo.svg'
import app_mobile_image from '../../assets/images/icon-logo.svg'
import { computed, onBeforeMount, onMounted, ref } from 'vue'
import { useButterCms } from '../../composables/useButterCms';
import TheIcon from '../../components/TheIcon.vue';
const offsetFlag = ref(true)
const classNav = ref(false);
function toggleNav() {
    classNav.value = !classNav.value;
    if (classNav.value) {
        document.querySelector('body').classList.add('overflow-hidden');
    } else {
        document.querySelector('body').classList.remove('overflow-hidden');
    }
}
//fetch content
const headerData = ref(null);
const navLinks = ref([])
const butter = useButterCms();
const getHeader = async () => {
    try {
        let headerResponse = await butter.getPage('header', 'header')
        headerData.value = headerResponse?.data?.data
        let navResponse = await butter.getCollections('nav_items');
        navLinks.value = navResponse.data.data?.nav_items
    } catch (e) {
        console.log(e)
    }
}
const navItems = computed(() => {
    return navLinks.value.sort((a, b) => a.order - b.order)
})
onMounted(() => {
    getHeader()
    document.addEventListener('scroll', (e) => {
        if (window.scrollY > 0) {
            offsetFlag.value = false;
        }
        else {
            offsetFlag.value = true;
        }
    }
    )
})
onBeforeMount(() => {
    document.removeEventListener('scroll', () => {
        console.log('event removed')
    })
})

function getSubMenu(item) {
    let output = [];
    item.split(';').map(el => {
        let [label, href] = el.split(':');
        if (!label || !href) return;
        output.push({ label: label?.trim(), href: href?.trim() });
    });
    return output;
}
</script>
<style></style>