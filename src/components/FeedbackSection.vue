<template>
    <div class="w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-28 pt-16 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">2. Feedback</h2>

            <div class="flex items-center mt-8">
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
                    <p>
                        Play with this sign-in form to gain better
                        understanding.
                    </p>
                </div>
                <div
                    class="w-1/2 flex justify-center items-start border-l-2 border-gray-300"
                >
                    <form
                        class="w-7/12 space-y-6 px-8 py-10 my-8 shadow rounded-lg border-2"
                    >
                        <h3 class="text-center text-4xl">Sign in Form</h3>
                        <button
                            type="button"
                            class="w-full border border-gray-300 rounded px-10 py-3 space-x-4 flex items-center justify-center transition hover:bg-gray-200"
                        >
                            <img src="@/assets/images/icon-google.svg" />
                            <span>Sign in wth Google</span>
                        </button>
                        <div
                            class="w-full rounded px-10 py-3 space-x-4 flex items-center justify-center transition hover:bg-gray-200 relative"
                        >
                            <div
                                class="w-full border border-gray-300 absolute"
                            ></div>
                            <span class="relative z-10 bg-white px-3"
                                >Sign in wth your Email</span
                            >
                        </div>

                        <label for="email" class="flex flex-col gap-2">
                            <span class="ml-2">Email Address</span>
                            <input
                                type="email"
                                class="w-full border border-gray-300 rounded p-3 bg-transparent"
                            />
                        </label>
                        <label for="password" class="flex flex-col gap-2">
                            <span class="ml-2">Password</span>
                            <input
                                type="password"
                                class="w-full border border-gray-300 rounded p-3 bg-transparent"
                            />
                        </label>

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
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
