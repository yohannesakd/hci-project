<template>
    <div class="w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-32 pt-24 pb-10 flex flex-col items-center justify-between relative"
        >
            <div>
                <h2 class="text-3xl font-semibold text-center">
                    7. Constraints
                </h2>
                <div>
                    <p class="text-lg text-center mt-8 max-w-5xl">
                        Constraints refers to the physical, logical, or cultural
                        limits that prevent users from taking certain actions or
                        performing certain operations. Constraints are the
                        principle of designing a system or object to limit or
                        guide user behavior in a way that is intuitive and easy
                        to understand. For example, disabled buttons or
                        grayed-out menu items can indicate that certain actions
                        are not currently available. Since we have finished
                        describing the principles we applied the disabled button
                        here.
                    </p>
                </div>
            </div>
            <div class="flex gap-4">
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
                    href="#mapping"
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
                    class="px-6 py-3 border-none bg-button-primary text-gray-300 pointer-events-none rounded-lg shadow-sm transition-all flex max-w-fit items-center gap-2 mt-8"
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
