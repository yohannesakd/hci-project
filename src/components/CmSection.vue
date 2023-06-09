<template>
    <div class="w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-28 pt-16 pb-10 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">
                3. Conceptual Model
            </h2>
            <p class="text-center mt-4 text-lg px-20">
                Conceptual Model refers to the designer's representation of the
                system that conveys how the system works and provides users with
                a mental model to understand how to interact with it. The
                conceptual model is the underlying framework of the system and
                helps users understand what the system is, what it does, and how
                it works.
            </p>
            <div
                class="bg-gray-50 border border-gray-400 rounded-3xl w-full h-full flex-1 mt-2 p-8 flex flex-col items-center relative"
            >
                <div
                    id="guide-btn"
                    class="absolute left-4 top-4 border border-blue-500 px-6 py-3 rounded-3xl transition hover:bg-blue-500 hover:text-white"
                    @click="showTutorial = !showTutorial"
                >
                    Show Guide
                </div>
                <tutorial-box
                    @close-tutorial="showTutorial = false"
                    :showTutorial="showTutorial"
                ></tutorial-box>
                <h3 class="text-3xl font-bold">To-Do Manager</h3>
                <div class="mt-10 lg:w-1/3 md:w-2/3 sm:w-80">
                    <div class="flex items-center justify-center h-full w-full">
                        <input
                            type="text"
                            name="todo"
                            id="todoInput"
                            class="h-full w-[75%] p-3 rounded-l-lg border border-gray-400 outline-none focus:border-gray-800"
                            v-model.trim="todoInput"
                        />
                        <button
                            type="button"
                            id="addTodo"
                            class="w-[25%] border border-gray-400 px-6 py-3 bg-gray-300 rounded-r-lg transition hover:bg-gray-200"
                            @click="addTodo"
                        >
                            Add Todo
                        </button>
                    </div>
                    <div class="mt-6" v-if="todoList.length">
                        <transition-group
                            name="list"
                            tag="ul"
                            class="space-y-2 overflow-y-auto max-h-80 overflow-x-hidden"
                            id="todoItems"
                        >
                            <li
                                v-for="(todo, index) in todoList"
                                :key="index"
                                class="flex justify-between items-center border border-gray-400 rounded transition py-1 px-2"
                                :class="{ 'bg-gray-200': todo.completed }"
                            >
                                <span
                                    class="transition duration-300"
                                    :class="{ 'line-through': todo.completed }"
                                    >{{ todo.text }}</span
                                >
                                <div class="space-x-2">
                                    <button
                                        id="toggleTodo"
                                        type="button"
                                        class="px-2 py-1 border rounded bg-gray-300 transition hover:bg-gray-200"
                                        @click="toggleTodo(index)"
                                    >
                                        Done
                                    </button>
                                    <button
                                        id="removeTodo"
                                        type="button"
                                        class="px-4 py-1 border rounded bg-red-500 transition hover:bg-red-700 font-bold text-white"
                                        @click="deleteTodo(index)"
                                    >
                                        X
                                    </button>
                                </div>
                            </li>
                        </transition-group>
                    </div>
                    <p v-else class="text-center text-lg mt-8">
                        No todos yet. Let's add some!
                    </p>
                </div>
            </div>
            <div class="flex gap-4">
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8"
                    href="#feedback"
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
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8"
                    href="#affordance"
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
import TutorialBox from "./util/TutorialBox.vue"
export default {
    components: {
        TutorialBox,
    },
    data() {
        return {
            todoInput: "",
            todoList: [
                {
                    text: "Buy Tomatoes",
                    completed: false,
                },
            ],
            showTutorial: false,
        }
    },
    methods: {
        addTodo() {
            if (!this.todoInput.length) return
            this.todoList.unshift({
                text: this.todoInput,
                completed: false,
            })
            this.todoInput = ""
        },
        deleteTodo(index) {
            this.todoList = this.todoList.filter((_, i) => i != index)
        },
        toggleTodo(index) {
            this.todoList[index].completed = !this.todoList[index].completed
        },
    },
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>
