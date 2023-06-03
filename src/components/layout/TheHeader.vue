<template>
    <header id="navbar" class="bg-primary text-white w-full fixed py-4">
        <div class="flex justify-between items-center w-10/12 mx-auto">
            <nav class="">
                <ul class="flex space-x-2">
                    <li
                        v-for="item in navItems"
                        :key="item"
                        class="hover:text-blue-900 transition"
                    >
                        <a
                            :href="'#' + item.toLowerCase().replace(' ', '-')"
                            class="py-2 px-6 block"
                        >
                            {{ item }}</a
                        >
                    </li>
                </ul>
            </nav>

            <button
                type="button"
                class="px-6 py-3 border-none bg-button-primary text-blue-100 rounded-lg shadow-sm hover:shadow-2xl hover:text-white transition-all flex items-center gap-2"
            >
                <span>Get Started</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                </svg>
            </button>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            navItems: [
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
