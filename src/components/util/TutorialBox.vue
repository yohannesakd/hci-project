<template>
    <div
        class="tutorial fixed top-0 left-0 w-full h-full bg-black bg-opacity-10 -z-1"
        v-if="showTutorial"
    >
        <div
            class="tutorial-step relative border-2 border-white bg-white min-w-fit min-h-fit p-4 rounded-2xl"
            :style="stepStyle"
        >
            <svg
                width="36"
                height="28"
                viewBox="0 0 9 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="rotate-[-120deg] absolute left-0 -translate-x-3.5 -translate-y-2"
            >
                <path
                    d="M5.24613 2.78516C3.87296 3.03338 1.98365 2.42755 0.828293 1.79227C3.13 1.71765 5.36767 1.09897 7.31062 0C6.83711 1.99842 7.31063 4.07677 8.01142 6.00366C6.8608 5.20429 5.58706 4.07677 5.24613 2.78516Z"
                    class="fill-white"
                />
            </svg>
            <div class="space-y-1">
                <h2 class="text-lg font-semibold text-center">
                    {{ currentStep.title }}
                </h2>
                <p class="max-w-xs text-center">
                    {{ currentStep.description }}
                </p>
                <div class="flex gap-2">
                    <button
                        v-if="currentStepIndex < steps.length - 1"
                        @click="nextStep"
                        class="border border-gray-300 px-3 py-0.5 rounded-md block mx-auto transition hover:bg-gray-200"
                    >
                        Next
                    </button>
                    <button
                        @click="$emit('closeTutorial')"
                        class="border border-gray-300 px-3 py-0.5 rounded-md block mx-auto transition hover:bg-gray-200"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        showTutorial: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        showTutorial(newVal) {
            if (newVal) {
                ;(document.body.scroll = "no"),
                    (document.body.style.overflow = "hidden")
            } else {
                ;(document.body.scroll = "yes"),
                    (document.body.style.overflow = "scroll")
            }
        },
    },
    data() {
        return {
            currentStepIndex: 0,
            steps: [
                {
                    title: "To do Manager",
                    description:
                        "This is a simple application to track your todos",
                    targetElement: "#guide-btn",
                },
                {
                    title: "Adding Todos",
                    description: "You can type your todos in this field",
                    targetElement: "#todoInput",
                },
                {
                    title: "Adding Todos",
                    description: "Click this to add your new todo to the list!",
                    targetElement: "#addTodo",
                },
                {
                    title: "Managing Todos",
                    description: "You can find your todo list here",
                    targetElement: "#todoItems",
                },
                {
                    title: "Managing Todos",
                    description:
                        "When you complete your todos, you can click this button to mark it as completed!",
                    targetElement: "#toggleTodo",
                },
                {
                    title: "Managing Todos",
                    description: "Or remove your todo by clicking this!",
                    targetElement: "#removeTodo",
                },
                {
                    title: "All Done!",
                    description: "Have fun managing your todos!",
                    targetElement: "#guide-btn",
                },

                // Add more steps here
            ],
        }
    },
    computed: {
        currentStep() {
            return this.steps[this.currentStepIndex]
        },
        stepStyle() {
            const target = document.querySelector(
                this.currentStep.targetElement
            )
            if (!target) return {}
            const rect = target.getBoundingClientRect()
            console.log(rect)
            return {
                top: `${rect.top}px`,
                left: `${rect.right + 15}px`,
                // width: `${rect.width > 300 ? 300 : rect.width}px`,
                // height: `${rect.height}px`,
            }
        },
    },
    methods: {
        nextStep() {
            this.currentStepIndex++
            if (this.currentStepIndex >= this.steps.length) {
                this.$emit("closeTutorial")
            }
        },
    },
}
</script>

<style scoped>
.tutorial-step {
    position: absolute;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;
}
</style>
