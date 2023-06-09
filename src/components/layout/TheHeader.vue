<template>
    <header id="navbar" class="bg-primary text-white w-full fixed py-4">
        <div class="flex justify-between items-center w-10/12 mx-auto">
            <nav class="flex-1">
                <ul class="flex w-full justify-center space-x-2">
                    <li
                        v-for="item in navItems"
                        :key="item"
                        class="header_link transition relative"
                    >
                        <a
                            :href="'#' + item.toLowerCase().replace(' ', '-')"
                            class="py-4 px-6 block"
                        >
                            {{ item }}</a
                        >
                        <span
                            class="link_underline absolute h-1 bg-gray-200 w-0 transition-all top-[90%] left-1/2 -translate-x-1/2 rounded-md"
                        ></span>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
                "Home",
                "Discoverability",
                "Feedback",
                "Conceptual Model",
                "Affordance",
                "Signifiers",
                "Mapping",
                "Constraints",
            ],
        }
    },
}
</script>

<style scoped>
.header_link:hover > span {
    width: 100%;
}
</style>
