<template>
    <div class="section-wrapper w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-28 pt-16 pb-10 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">6. Mapping</h2>
            <div
                class="flex flex-1 mt-8 border-4 border-gray-300 rounded-3xl p-10 relative transition-colors"
                :class="[currentTheme['body-bg'], currentTheme['text']]"
            >
                <div
                    class="w-1/2 text-center flex flex-col justify-center space-y-4 text-lg px-16 border-r-2 border-r-gray-300"
                >
                    <p>
                        Mapping refers to the relationship between the controls
                        of a system and the results of those controls. Mapping
                        is the principle of designing the relationship between
                        the physical or digital controls of a system and the
                        functions they perform, in a way that is intuitive and
                        easy to understand.
                    </p>
                </div>
                <div class="controls-section w-1/2 h-full pl-10">
                    <form
                        class="color-picker mb-4 absolute top-0 left-1/2 translate-x-2/3"
                    >
                        <fieldset
                            class="border-b-4 border-l-4 border-r-4 flex gap-8 w-fit py-4 px-12 mx-auto rounded-b-xl transition-colors"
                            :class="[currentTheme['controls']]"
                        >
                            <input
                                type="radio"
                                :name="key"
                                :id="key"
                                :value="key"
                                v-model="selectedTheme"
                                v-for="(theme, key) in themes"
                                :key="key"
                            />
                        </fieldset>
                    </form>
                    <div class="mb-4 mt-8">
                        <h4
                            class="text-center text-3xl"
                            :class="currentTheme['heading']"
                        >
                            Theme Controls
                        </h4>
                    </div>
                    <div class="relative lg:text-lg">
                        <main>
                            <div class="wrapper">
                                <p class="mb-4">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati natus error quam
                                    suscipit architecto enim nobis vero eaque.
                                    Repudiandae quisquam impedit fugiat neque
                                    delectus doloremque!
                                </p>
                                <h2
                                    class="text-2xl font-semibold mb-6"
                                    :class="currentTheme['heading']"
                                >
                                    Something interesting
                                </h2>
                                <div
                                    class="auto-grid flex gap-4 justify-center mb-6"
                                >
                                    <div
                                        class="card p-6 max-w-[250px]"
                                        :class="currentTheme['card-bg']"
                                    >
                                        <h3
                                            class="card__title text-xl font-semibold mb-4"
                                            :class="currentTheme['heading']"
                                        >
                                            A medium-length title
                                        </h3>
                                        <p>
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Repellendus, atque.
                                        </p>
                                    </div>
                                    <div
                                        class="card p-6 max-w-[250px]"
                                        :class="currentTheme['card-bg']"
                                    >
                                        <h3
                                            class="card__title text-xl font-semibold mb-4"
                                            :class="currentTheme['heading']"
                                        >
                                            A short title
                                        </h3>
                                        <p>
                                            Voluptatem excepturi tempore quo
                                            recusandae sunt ullam earum optio
                                            cum?
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    Rerum, neque! Consequuntur obcaecati beatae
                                    dolorum, fuga itaque iusto dicta et corporis
                                    facere ea necessitatibus odit cum,
                                    voluptates harum, dolore maiores aliquid
                                    distinctio repellendus nesciunt!
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
                    href="#signifiers"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 rotate-180"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                    <span>Previous</span>
                </a>
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex max-w-fit items-center gap-2 mt-8"
                    href="#constraints"
                >
                    <span>Next</span>
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
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedTheme: "light",
            themes: {
                light: {
                    "body-bg": "bg-gray-100",
                    "card-bg": "bg-gray-50",
                    text: "text-neutral-800",
                    heading: "text-neutral-700",
                    controls: "bg-gray-100 border-gray-300",
                },
                dark: {
                    "body-bg": "bg-slate-900",
                    "card-bg": "bg-slate-800",
                    text: "text-sky-100",
                    heading: "text-sky-200",
                    controls: "bg-slate-600 border-slate-500",
                },
                pink: {
                    "body-bg": "bg-fuchsia-100",
                    "card-bg": "bg-fuchsia-50",
                    text: "text-pink-900",
                    heading: "text-pink-800",
                    controls: "bg-fuchsia-50 border-pink-200",
                },
                blue: {
                    "body-bg": "bg-sky-100",
                    "card-bg": "bg-sky-50",
                    text: "text-blue-950",
                    heading: "text-sky-800",
                    controls: "bg-sky-50 border-sky-200",
                },
                green: {
                    "body-bg": "bg-green-100",
                    "card-bg": "bg-green-50",
                    text: "text-green-900",
                    heading: "text-green-700",
                    controls: "bg-green-50 border-green-300",
                },
            },
        }
    },
    computed: {
        currentTheme() {
            return this.themes[this.selectedTheme]
        },
    },
}
</script>

<style scoped>
.color-picker input[type="radio"] {
    appearance: none;
    width: 1.5rem;
    height: 1.5rem;
    outline: 3px solid var(--radio-color, currentColor);
    outline-offset: 3px;
    border-radius: 50%;
}
.color-picker input[type="radio"]:checked {
    background-color: var(--radio-color);
}
.color-picker input[type="radio"]#light {
    --radio-color: gray;
}
.color-picker input[type="radio"]#pink {
    --radio-color: pink;
}
.color-picker input[type="radio"]#blue {
    --radio-color: blue;
}
.color-picker input[type="radio"]#green {
    --radio-color: green;
}
.color-picker input[type="radio"]#dark {
    --radio-color: #232323;
}

.card {
    padding: 1rem;
    border-block-start: 0.5rem solid;
    border-radius: 0.5rem;
}
</style>
