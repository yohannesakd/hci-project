<template>
    <div class="w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-28 pt-16 pb-10 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">5. Signifiers</h2>
            <div class="flex flex-1 mt-8">
                <div
                    class="w-1/2 text-center flex flex-col justify-center space-y-4 text-lg px-16 border-r-2 border-r-gray-400"
                >
                    <p>
                        Signifiers refer to the visual, auditory, or tactile
                        cues that indicate the function or purpose of an object
                        or system. Signifiers are the physical or perceived
                        properties of an object that suggest how it can be used
                        or what action it will produce.
                    </p>
                    <p>
                        The principle of signifiers is important in design
                        because it helps users understand how to interact with a
                        system or object and what actions are possible. For
                        example, a visual signifier for a button might be its
                        shape, color, or label, while an auditory signifier
                        might be a beep or a chime that indicates a successful
                        action.
                    </p>
                    <p>
                        Good signifiers are clear, consistent, and match the
                        user's expectations. They should be designed to be
                        easily recognizable and distinguishable from other
                        elements of the interface. For example, a red button
                        might indicate a "stop" or "cancel" action, while a
                        green button might indicate a "go" or "confirm" action.
                    </p>
                </div>
                <div
                    class="w-1/2 text-center flex flex-col justify-center space-y-4 text-lg px-16 pl-10"
                >
                    <div
                        class="mx-auto border-2 border-gray-300 rounded-2xl p-8 shadow-xl space-y-6"
                    >
                        <h4 class="text-xl">
                            Do you agree to the Terms and Conditions?
                        </h4>
                        <div class="flex gap-4 mx-auto w-fit">
                            <button
                                type="button"
                                class="px-6 py-3 bg-red-500 text-white rounded-xl text-lg transition hover:bg-red-700"
                            >
                                No, I Decline!
                            </button>
                            <button
                                type="button"
                                class="px-6 py-3 bg-green-500 text-white rounded-xl text-lg transition hover:bg-green-600"
                            >
                                Yes, I Agree!
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex gap-4">
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
                    href="#affordance"
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
                    href="#mapping"
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
