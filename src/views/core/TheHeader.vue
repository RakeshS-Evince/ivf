<template>
    <header :class="[offsetFlag === false ? 'bg-white header-scroll' : 'bg-white', { 'open': classNav }]" id="header">
        <div class="container-fluid">
            <div class="d-flex flex-wrap w-100 justify-content-between">
                <!-- LOGO -->
                <div class="d-flex align-items-center position-relative">
                    <AppLink to="/" class="brand-logo">
                        <TheIcon :path="app_image" />
                    </AppLink>
                    <AppLink to="/" class="brand-logo-mobile">
                        <TheIcon :path="app_mobile_image" />
                    </AppLink>
                </div>
                <!-- LOGO END-->

                <div class="d-flex flex-wrap align-items-center">
                    <!-- Navigation buttons -->
                    <template v-for=" button in headerData?.fields?.buttons">
                        <template v-if="!button.label && button?.image">
                            <AppLink :to="'/' + button?.href"
                                class="icon btn btn-outline-secondary rounded-circle ms-2 ms-xl-5 p-0">
                                <TheIcon :path="button?.image" />
                            </AppLink>
                        </template>
                        <template v-else>
                            <AppLink :to="'/' + button?.href"
                                :class="{ 'ms-2 p-0': button?.is_phone, 'btn btn-secondary ms-10': !button?.is_phone && button?.label }"
                                class="d-none d-xl-inline-block" v-sl>
                                {{ button.label }}
                            </AppLink>
                        </template>
                    </template>
                    <!-- Navigation buttons end -->
                    <!-- Toggler -->
                    <div class="nav-toggle d-inline-block d-xl-none ms-5 ms-xl-12" @click="toggleNav()">
                        <div class="bar"></div>
                        <div class="bar"></div>
                        <div class="bar"></div>
                    </div>
                    <!-- Toggler -->
                </div>
            </div>
            <nav>
                <!-- Navigation buttons on mobile screen -->
                <div class="d-flex justify-content-between d-inline-block d-xl-none">
                    <template v-for="(button) in  headerData?.fields?.buttons ">
                        <template> </template>
                        <template v-if="button.label && !/\d/.test(button.label)">
                            <AppLink :to="'/' + button?.href" class="btn btn-secondary">
                                {{ button.label }}
                            </AppLink>
                        </template>
                    </template>
                </div>
                <!-- Navigation buttons on mobile screen end -->

                <!-- Main Navigations links -->
                <ul class="d-flex flex-column flex-xl-row flex-wrap justify-content-end">
                    <template v-for=" (item, index)  in  navItems">
                        <!-- Nav links -->
                        <li v-if="!item.hide_this" ref="itemRefs" @click="toggleIcon(index)">
                            <AppLink data-bs-toggle="collapse" class="d-inline-block d-xl-none"
                                :data-bs-target="'#id' + item.meta.id" :to="'/' + item.href" aria-expanded="false">{{
                                    item.label }}
                                <i aria-expanded="false"></i>
                            </AppLink>
                            <AppLink class="d-none d-xl-inline-block" :to="'/' + item.href">
                                {{ item.label }}
                            </AppLink>
                            <!-- Nav child links -->
                            <template v-if="item?.nav_item_child.length">
                                <div class="collapse" :id="'id' + item.meta.id">
                                    <ul>
                                        <template v-for="(child_item)  in  item?.nav_item_child ">
                                            <!-- Nav child single -->
                                            <li v-if="!getSubMenu(child_item.sub_menu).length">
                                                <AppLink :to="'/' + child_item.href">{{ child_item.label }}</AppLink>
                                            </li>
                                            <!-- Nav child single end -->

                                            <!-- Nav child Multiple -->
                                            <template v-else>
                                                <li class="nav-sub">
                                                    <AppLink :to="'/' + child_item?.href" class="d-inline-block d-xl-none"
                                                        aria-expanded="true" data-bs-toggle="collapse"
                                                        :data-bs-target="'#id' + child_item.meta.id">
                                                        {{
                                                            child_item?.label }}
                                                    </AppLink>
                                                    <AppLink :to="'/' + child_item?.href" class="d-none d-xl-inline-block">
                                                        {{ child_item?.label }}
                                                    </AppLink>
                                                    <!-- Nav child's child -->
                                                    <ul class="collapse" :id="'id' + child_item.meta.id">
                                                        <template v-for="sub_menu  in  getSubMenu(child_item.sub_menu)">
                                                            <li>
                                                                <AppLink :to="'/' + sub_menu?.href">{{ sub_menu?.label }}
                                                                </AppLink>
                                                            </li>
                                                        </template>
                                                    </ul>
                                                    <!-- Nav child's child end -->
                                                </li>
                                            </template>
                                            <!-- Nav child Multiple end -->
                                        </template>
                                    </ul>
                                </div>
                                <!-- Nav child links end-->
                            </template>
                        </li>
                    </template>
                </ul>
                <!-- Main Navigations links end -->
            </nav>
        </div>
        <div class="nav-backdrop" @click="toggleNav()"></div>
    </header>
</template>

<script setup>
import app_image from '../../assets/images/brand-logo.svg'
import app_mobile_image from '../../assets/images/icon-logo.svg'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useButterCms } from '../../composables/useButterCms';
import TheIcon from '../../components/TheIcon.vue';
import AppLink from '../../components/AppLink.vue';
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
const itemRefs = ref([])
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
onBeforeUnmount(() => {
    document.removeEventListener('scroll', () => {
        console.log('event removed')
    })
})
function getSubMenu(item) {
    let output = [];
    item.split(';').map(el => {
        let [label, href] = el.split(':');
        if (!label || !href) return;
        output.push({ label: label?.trim(), href: href?.trim().startsWith('/') ? href.trim().slice(1) : href.trim() });
    });
    return output;
}
function toggleIcon(index) {
    let isExpanded = itemRefs.value[index].firstChild.nextElementSibling?.getAttribute('aria-expanded');
    let icon = itemRefs.value[index].firstChild.nextElementSibling.firstChild.nextElementSibling
    icon?.setAttribute('aria-expanded', isExpanded)
}
</script>
<style></style>