<template>
    <div class="section-wrapper w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-28 pt-16 pb-10 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">6. Mapping</h2>
            <div
                class="flex flex-1 mt-8 border-4 border-gray-300 rounded-3xl p-10"
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
                <div class="controls-section w-1/2 h-full">
                    <div class="mb-4">
                        <h4 class="text-center text-3xl">Theme Controls</h4>
                    </div>
                    <div class="relative">
                        <form class="color-picker" action="">
                            <fieldset>
                                <legend class="visually-hidden">
                                    Pick a color scheme
                                </legend>
                                <label for="light" class="visually-hidden"
                                    >Light</label
                                >
                                <input
                                    type="radio"
                                    name="theme"
                                    id="light"
                                    checked
                                />

                                <label for="pink" class="visually-hidden"
                                    >Pink theme</label
                                >
                                <input type="radio" id="pink" name="theme" />

                                <label for="blue" class="visually-hidden"
                                    >Blue theme</label
                                >
                                <input type="radio" id="blue" name="theme" />

                                <label for="green" class="visually-hidden"
                                    >Green theme</label
                                >
                                <input type="radio" id="green" name="theme" />

                                <label for="dark" class="visually-hidden"
                                    >Dark theme</label
                                >
                                <input type="radio" id="dark" name="theme" />
                            </fieldset>
                        </form>

                        <main>
                            <div class="wrapper">
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Obcaecati natus error quam
                                    suscipit architecto enim nobis vero eaque.
                                    Repudiandae quisquam impedit fugiat neque
                                    delectus doloremque!
                                </p>
                                <h2>Something interesting</h2>
                                <div class="auto-grid">
                                    <div class="card">
                                        <h3 class="card__title">
                                            A medium-length title
                                        </h3>
                                        <p>
                                            Lorem ipsum, dolor sit amet
                                            consectetur adipisicing elit.
                                            Repellendus, atque.
                                        </p>
                                    </div>
                                    <div class="card">
                                        <h3 class="card__title">
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
        </div>
    </div>
</template>

<script></script>

<style scoped>
:root {
    --clr-body-bg: hsl(0 0% 90%);
    --clr-card-bg: hsl(0 0% 100%);
    --clr-text: hsl(0 0% 15%);
    --clr-heading: hsl(0 0% 25%);
}

body {
    margin: 0;
    font-family: system-ui, sans-serif;
    font-size: 1.25rem;
    line-height: 1.5;
    background: var(--clr-body-bg);
    color: var(--clr-text);
}

h1,
h2,
h3 {
    color: var(--clr-heading);
    line-height: 1.1;
}

.visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
}

.color-picker > fieldset {
    border: 0;
    display: flex;
    gap: 2rem;
    width: fit-content;
    background: #fff;
    padding: 1rem 3rem;
    margin-inline: auto;
    border-radius: 0 0 1rem 1rem;
}
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

.auto-grid {
    --min-column-size: 225px;

    display: grid;
    gap: clamp(1rem, 5vmax, 1.625rem);
    grid-template-columns: repeat(
        auto-fit,
        minmax(min(100%, var(--min-column-size)), 1fr)
    );
}

.wrapper {
    --max-width: 55rem;
    width: min(100% - 2rem, var(--max-width));
    margin-inline: auto;
}

.card {
    padding: 1rem;
    background-color: var(--clr-card-bg);
    border-block-start: 0.5rem solid;
    border-radius: 0.5rem;
}

.pink {
    --clr-body-bg: hsl(310 50% 90%);
    --clr-card-bg: hsl(310 50% 100%);
    --clr-text: hsl(310 50% 15%);
    --clr-heading: hsl(310 50% 25%);
}

.blue {
    --clr-body-bg: hsl(209 50% 90%);
    --clr-card-bg: hsl(209 50% 100%);
    --clr-text: hsl(209 50% 15%);
    --clr-heading: hsl(209 50% 25%);
}

.green {
    --clr-body-bg: hsl(109 50% 90%);
    --clr-card-bg: hsl(109 50% 100%);
    --clr-text: hsl(109 50% 15%);
    --clr-heading: hsl(109 50% 25%);
}

.dark {
    --clr-body-bg: hsl(209 50% 10%);
    --clr-card-bg: hsl(209 50% 5%);
    --clr-text: hsl(209 50% 90%);
    --clr-heading: hsl(209 50% 80%);
}
</style>
