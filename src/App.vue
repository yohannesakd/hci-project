<template>
    <div>
        <the-header></the-header>
        <main class="bg-primary flex flex-col items-center pt-10">
            <the-hero id="home"></the-hero>
            <disc-section id="discoverability" class="bg-white"></disc-section>
            <feedback-section id="feedback"></feedback-section>
            <cm-section id="conceptual-model" class="bg-white"></cm-section>
            <affordance-section id="affordance"></affordance-section>
            <signifiers-section
                id="signifiers"
                class="bg-white"
            ></signifiers-section>
            <mapping-section id="mapping"></mapping-section>
            <constraints-section
                id="constraints"
                class="bg-white"
            ></constraints-section>
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
}
</script>

<style>
html {
    scroll-behavior: smooth;
    @apply font-poppins;
}
</style>
