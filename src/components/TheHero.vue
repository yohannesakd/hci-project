<template>
    <section id="hero" class="bg-primary text-white relative overflow-x-hidden">
        <div class="flex items-center justify-normal w-10/12 mx-auto relative">
            <div
                id="hero_left"
                class="flex flex-col justify-center ml-6 w-1/2 mr-8"
            >
                <h1 class="text-6xl font-semibold leading-tight">
                    Norman's 7 Design Principles
                </h1>
                <p class="mt-8 text-lg text-blue-100">
                    This website illustrates Norman's 7 design principles in a
                    practical and interactive way.
                </p>
                <div class="mt-4">
                    <a
                        class="px-6 py-3 border-none bg-button-primary text-blue-100 rounded-lg shadow-sm hover:shadow-2xl hover:text-white transition-all flex max-w-fit items-center gap-2"
                        href="#discoverability"
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
                    </a>
                </div>
            </div>
            <div id="hero_right" class="w-1/2 relative z-10 min-h-full">
                <img
                    src="@/assets/images/hero-graphics.svg"
                    alt=""
                    class="mx-auto my-12 w-3/4"
                />
            </div>
            <div
                class="absolute -right-[33.5%] w-2/3 h-full bg-button-primary text-center -z-1"
            ></div>
        </div>
    </section>
</template>

<script>
export default {
    props: ["navbarHeight"],
    data() {
        return {}
    },
}
</script>
