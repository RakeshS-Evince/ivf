<template>
    <div class="py-20 py-xl-25" v-if="props.data?.fields?.content.length">
        <h1 class="mb-3 mb-md-0 mb-xl-5 text-center text-md-start">Frequently asked questions</h1>
        <div class="accordion accordion-flush text-editor" id="accordionFlushExample">
            <template v-for="(faq, i) in  props.data?.fields?.content">
                <template v-if="!faq.hide_this">
                    <div class="accordion-item">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            :data-bs-target="'#faq' + i" aria-expanded="false" :aria-controls="'faq' + i">
                            {{ faq.question }}
                        </button>
                        <div :id="'faq' + i" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <p v-html="faq.answer"></p>
                            </div>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
<script setup>
const props = defineProps(['data'])
</script>