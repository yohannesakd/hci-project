<template>
    <header class="bg-primary text-white w-full py-4 fixed">
        <div class="flex justify-evenly items-center w-8/12 mx-auto">
            <div class="logo">
                <a href="/" class="block"
                    ><img src="@/assets/images/logo/logo-white.svg" alt=""
                /></a>
            </div>
            <nav>
                <ul class="flex space-x-6">
                    <li
                        v-for="item in navItems"
                        :key="item"
                        class="hover:text-blue-900 transition"
                    >
                        <a :href="'#' + item.toLowerCase().replace(' ', '-')">
                            {{ item }}</a
                        >
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
