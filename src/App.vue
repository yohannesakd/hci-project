<template>
    <div>
        <the-header class="z-20"></the-header>
        <main class="flex flex-col pt-20">
            <the-hero id="home"></the-hero>
            <div class="w-10/12 mx-auto">
                <disc-section id="discoverability"></disc-section>
                <feedback-section id="feedback"></feedback-section>
                <cm-section id="conceptual-model"></cm-section>
                <affordance-section id="affordance"></affordance-section>
                <signifiers-section id="signifiers"></signifiers-section>
                <mapping-section id="mapping"></mapping-section>
                <constraints-section id="constraints"></constraints-section>
            </div>
        </main>
    </div>
</template>

<script>
import TheHeader from "./components/layout/TheHeader.vue"
import TheHero from "./components/TheHero.vue"
import DiscSection from "./components/DiscSection.vue"
import AffordanceSection from "./components/AffordanceSection.vue"
import CmSection from "./components/CmSection.vue"
import FeedbackSection from "./components/FeedbackSection.vue"
import MappingSection from "./components/MappingSection.vue"
import SignifiersSection from "./components/SignifiersSection.vue"
import ConstraintsSection from "./components/ConstraintsSection.vue"

export default {
    components: {
        TheHeader,
        TheHero,
        DiscSection,
        AffordanceSection,
        CmSection,
        FeedbackSection,
        MappingSection,
        SignifiersSection,
        ConstraintsSection,
    },
    data() {
        return {}
    },
    methods: {
        handleScroll() {
            console.log(this.$refs)
        },
    },
}
</script>

<style>
html {
    @apply font-poppins;
    scroll-behavior: smooth;
}
</style>
