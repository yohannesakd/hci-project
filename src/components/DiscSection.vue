<template>
    <div class="w-full">
        <div
            class="min-h-[100vh] text-black lg:pt-36 pt-20 flex flex-col items-center relative"
        >
            <h2 class="text-3xl font-semibold text-center">
                1. Discoverability
            </h2>
            <p class="text-center text-md mt-2">
                User-generated content in real-time will have multiple
                touchpoints for offshoring
            </p>

            <div class="absolute right-[55%] top-28 w-[350px] h-60">
                <img
                    id="curvy-arrow"
                    src="@/assets/images/arrow.svg"
                    class="h-full w-full"
                    alt=""
                />
            </div>

            <p class="text-center w-3/4 mt-36">
                Discoverability refers to a product or system's ability to make
                its functions and features easily discoverable by users. It
                refers to the ease with which users can find and learn about the
                various features and functions of a product or system. Like the
                navbar above functions and features should be made to be easily
                detected by the users.
            </p>

            <p class="mt-10">
                To apply Discoverability, Use the following concepts:
            </p>

            <div class="flex gap-6 justify-between mt-14">
                <div class="flex flex-col gap-4 flex-1">
                    <img
                        src="@/assets/images/icon-clear-labeling.svg"
                        class="w-10 h-10"
                        alt=""
                    />
                    <h4 class="text-xl">Clear Labeling</h4>
                    <p>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly timely deliverables for
                        real-time schemas.
                    </p>
                    <a href="#" class="text-blue-500 flex gap-2 items-center"
                        ><span>Learn more</span>
                        <arrow-right class="w-5 h-5"></arrow-right>
                    </a>
                </div>
                <div class="flex flex-col gap-4 flex-1">
                    <img
                        src="@/assets/images/icon-clear-labeling.svg"
                        class="w-10 h-10"
                        alt=""
                    />
                    <h4 class="text-xl">Intuitive Navigation</h4>
                    <p>
                        Completely pursue scalable customer cross-media through
                        potentialities. Holistically quickly installed portals.
                    </p>
                    <a href="#" class="text-blue-500 flex gap-2 items-center"
                        ><span>Learn more</span>
                        <arrow-right class="w-5 h-5"></arrow-right>
                    </a>
                </div>
                <div class="flex flex-col gap-4 flex-1">
                    <img
                        src="@/assets/images/icon-clear-labeling.svg"
                        class="w-10 h-10"
                        alt=""
                    />
                    <h4 class="text-xl">Navigation Cues</h4>
                    <p>
                        Objectively innovate empowered scalable manufactured
                        products whereas parallel platforms predominate
                        extensible.
                    </p>
                    <a href="#" class="text-blue-500 flex gap-2 items-center"
                        ><span>Learn more</span>
                        <arrow-right class="w-5 h-5"></arrow-right>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
#curvy-arrow {
    transform: scale(-1, 1);
}
</style>
