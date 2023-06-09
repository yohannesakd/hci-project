<template>
    <div class="w-full">
        <div
            class="h-[100vh] text-black lg:pt-28 pt-16 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">2. Feedback</h2>

            <div class="flex items-center mt-4">
                <div class="w-1/2 text-center space-y-4 text-lg px-16">
                    <p>
                        Feedback refers to the system's ability to provide users
                        with clear and immediate information about the actions
                        they have taken or the state of the system.
                    </p>
                    <p>
                        In the context of sign-in forms on a website, feedback
                        is an essential component of effective communication
                        because it allows the user to understand whether their
                        login attempt was successful or not.
                    </p>
                    <p>
                        When a user attempts to sign in to a website, the system
                        should provide immediate feedback to the user about the
                        success or failure of their login attempt. This feedback
                        can take many forms, such as a message that says
                        "incorrect password" if the user entered the wrong
                        password, or a message that says "account locked" if the
                        user has made too many incorrect attempts.
                    </p>
                    <div class="mt-4 italic font-semibold flex items-center">
                        <div>
                            Play with this sign-in form to gain better
                            understanding.
                        </div>
                        <arrow-right
                            class="h-8 w-10 animate-point"
                        ></arrow-right>
                    </div>
                </div>
                <div
                    class="w-1/2 flex justify-center items-start border-l-2 border-gray-300"
                >
                    <div class="w-7/12 relative">
                        <form
                            class="w-full space-y-6 px-8 py-10 shadow rounded-lg border-2 relative"
                            :class="formSuccess ? 'border-green-500' : ''"
                        >
                            <h3 class="text-center text-4xl">Sign in Form</h3>
                            <button
                                type="button"
                                class="w-full border border-gray-300 rounded px-10 py-3 space-x-4 flex items-center justify-center transition hover:bg-gray-100"
                            >
                                <img src="@/assets/images/icon-google.svg" />
                                <span>Sign in wth Google</span>
                            </button>
                            <div
                                class="w-full rounded px-10 py-3 space-x-4 flex items-center justify-center relative -z-10"
                            >
                                <div
                                    class="w-full border border-gray-300 absolute -z-10"
                                ></div>
                                <span class="z-1 bg-white px-3"
                                    >Sign in wth your Email</span
                                >
                            </div>
                            <div>
                                <label for="email" class="flex flex-col gap-2">
                                    <span class="ml-2">Email Address</span>
                                    <input
                                        ref="emailInput"
                                        type="email"
                                        class="w-full border-2 outline-none focus:border-blue-500 rounded p-3 bg-transparent transition hover:bg-gray-100"
                                        :class="{
                                            'border-red-500 focus:border-red-500 animate-shake':
                                                emailError,
                                            'border-gray-300': emailError,
                                            'border-green-500': formSuccess,
                                        }"
                                        v-model="emailAddress"
                                        @blur="checkEmail"
                                        @focus="clearEmailErrors()"
                                    />
                                </label>
                                <span class="text-red-500 ml-2 mt-1 block">{{
                                    emailErrorText
                                }}</span>
                            </div>
                            <div>
                                <label
                                    for="password"
                                    class="flex flex-col gap-2"
                                >
                                    <span class="ml-2">Password</span>
                                    <input
                                        ref="passwordInput"
                                        type="password"
                                        class="w-full border-2 outline-none focus:border-blue-500 rounded p-3 bg-transparent transition hover:bg-gray-100"
                                        :class="{
                                            'border-red-500 focus:border-red-500 outline-none animate-shake':
                                                passwordError,
                                            'border-gray-300 ': passwordError,
                                            'border-green-500': formSuccess,
                                        }"
                                        v-model="password"
                                        @blur="checkPassword"
                                        @focus="clearPasswordErrors()"
                                    />
                                </label>
                                <span class="text-red-500 ml-2 mt-1 block">{{
                                    passwordErrorText
                                }}</span>
                            </div>
                            <div class="flex justify-between px-2">
                                <label class="flex gap-2">
                                    <input
                                        type="checkbox"
                                        name="logged-in"
                                        id="logged-in"
                                    />
                                    <span>Keep me logged in</span>
                                </label>
                                <a
                                    href="#"
                                    class="text-blue-500 font-semibold transition hover:text-blue-700"
                                    >Forgot Password?</a
                                >
                            </div>
                            <button
                                type="button"
                                class="w-full border bg-blue-500 text-white rounded-lg text-lg px-10 py-3 space-x-4 text-center transition hover:bg-blue-700"
                                @click="verifyInputs"
                            >
                                Sign in
                            </button>
                            <div class="flex items-center gap-4">
                                <p>Dont have an Account?</p>
                                <a
                                    href="#"
                                    class="text-blue-500 font-semibold transition hover:text-blue-700"
                                    >Register</a
                                >
                            </div>
                            <div
                                class="absolute bg-gray-100 border w-48 grid place-items-center h-32 rounded-2xl -right-6 top-1/2 translate-x-full -translate-y-1/2 transition-opacity duration-1000"
                                :class="{ 'opacity-0': !passwordAttempted }"
                            >
                                <svg
                                    width="36"
                                    height="28"
                                    viewBox="0 0 9 7"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="rotate-[-120deg] absolute left-0 top-1/2 -translate-x-3.5 -translate-y-1/2"
                                >
                                    <path
                                        d="M5.24613 2.78516C3.87296 3.03338 1.98365 2.42755 0.828293 1.79227C3.13 1.71765 5.36767 1.09897 7.31062 0C6.83711 1.99842 7.31063 4.07677 8.01142 6.00366C6.8608 5.20429 5.58706 4.07677 5.24613 2.78516Z"
                                        class="fill-gray-100"
                                    />
                                </svg>
                                <div class="italic text-sm">
                                    <h4 class="text-center mb-2">Hint</h4>
                                    <p>realemail@mail.com</p>
                                    <p>Password123</p>
                                    <button
                                        type="button"
                                        class="mx-auto block border border-gray-400 px-4 py-1 mt-2 rounded-lg transition hover:bg-gray-200"
                                        @click="fillInputs"
                                    >
                                        Click to fill
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div
                            class="success-container border-2 border-green-500 absolute top-0 left-0 w-full h-full rounded-lg grid place-items-center transition"
                            :class="formSuccess ? 'block' : 'hidden'"
                        >
                            <p class="text-green-500 text-3xl">Success!</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-4">
                <a
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
                    href="#discoverability"
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
                    class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
                    href="#conceptual-model"
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
            emailAddress: "",
            password: "",
            emailError: false,
            passwordError: false,
            emailErrorText: "",
            passwordErrorText: "",
            formSuccess: false,
            validEmail: "realemail@mail.com",
            validPassword: "Password123",
            passwordAttempted: false,
            animationClass: false,
        }
    },
    methods: {
        checkEmail() {
            let emailRegex =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
            if (!this.emailAddress.length) {
                this.emailError = true
                this.emailErrorText = "Email is Required!"
                return false
            } else if (!emailRegex.test(this.emailAddress)) {
                this.emailError = true
                this.emailErrorText = "Enter a proper Email Address!"
                return false
            } else return true
        },
        checkPassword() {
            if (!this.password.length) {
                this.passwordError = true
                this.passwordErrorText = "Password is Required!"
                return false
            } else return true
        },
        clearEmailErrors() {
            this.emailError = false
            this.emailErrorText = ""
        },
        clearPasswordErrors() {
            this.passwordError = false
            this.passwordErrorText = ""
        },
        verifyInputs() {
            let emailerr = this.checkEmail()
            let passerr = this.checkPassword()

            if (emailerr && passerr) {
                if (
                    this.emailAddress == this.validEmail &&
                    this.password == this.validPassword
                ) {
                    this.formSuccess = true
                    this.clearEmailErrors()
                    this.clearPasswordErrors()
                } else {
                    this.emailErrorText = "Invalid Credentials"
                    this.emailError = true
                    this.passwordErrorText = "Invalid Credentials"
                    this.passwordError = true

                    if (!this.passwordAttempted) this.passwordAttempted = true
                }
            }
        },
        fillInputs() {
            this.emailAddress = this.validEmail
            this.password = this.validPassword
            this.passwordAttempted = false
        },
    },
}
</script>

<style scoped>
.animate-shake {
    animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}
.animate-point {
    animation: point 1.5s ease-in-out both infinite;
}
@keyframes shake {
    10%,
    90% {
        transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
        transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
        transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
        transform: translate3d(4px, 0, 0);
    }
}
@keyframes point {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateX(0);
    }
    40% {
        transform: translateX(15px);
    }
    60% {
        transform: translateX(7px);
    }
}

.success-container {
    backdrop-filter: blur(5px);
}
</style>
