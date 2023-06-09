<template>
  <div class="w-full">
    <div
      class="min-h-[100vh] text-black lg:pt-36 pt-20 flex flex-col items-center relative"
    >
      <h2 class="text-3xl font-semibold text-center"> 1. Discoverability </h2>

      <div class="absolute right-[55%] top-24 w-[400px] h-64">
        <!-- <img
                    id="curvy-arrow"
                    src="@/assets/images/arrow.svg"
                    class="h-full w-full"
                    alt=""
                /> -->
        <curvy-arrow class="h-full w-full" :isVisible="isVisible"></curvy-arrow>
      </div>

      <p class="text-center w-3/4 mt-36">
        Discoverability refers to a product or system's ability to make its
        functions and features easily discoverable by users. It refers to the
        ease with which users can find and learn about the various features and
        functions of a product or system. Like the navbar above functions and
        features should be made to be easily detected by the users.
      </p>

      <p class="mt-12">
        To apply Discoverability, Use the following concepts:
      </p>

      <div
        class="flex gap-6 justify-between mt-12"
        ref="discoverability-concepts"
      >
        <div
          class="flex flex-col gap-4 flex-1 p-6 rounded-lg transition hover:shadow-lg"
          v-for="concept in conceptsList"
          :key="concept.title"
        >
          <img
            :src="`/src/assets/images/${concept.icon}.svg`"
            class="w-10 h-10"
            :alt="concept.title.toLowerCase() + ' icon'"
          />
          <h4 class="text-xl">{{ concept.title }}</h4>
        </div>
      </div>

      <a
        class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex max-w-fit items-center gap-2 mt-8"
        href="#feedback"
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
</template>

<script>
import CurvyArrow from "./util/CurvyArrow.vue";

export default {
  components: {
    CurvyArrow,
  },
  data() {
    return {
      isVisible: false,
      conceptsList: [
        {
          icon: "icon-clear-labeling",
          title: "Clear Labeling",
        },
        {
          icon: "icon-intuitive-navigation",
          title: "Intuitive Navigation",
        },
        {
          icon: "icon-navigation-cues",
          title: "Navigation Cues",
        },
      ],
    };
  },
  computed: {},
  methods: {
    handleScroll() {
      const rect =
        this.$refs["discoverability-concepts"].getBoundingClientRect();
      if (
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top >= 0
      ) {
        this.isVisible = true;
      } else {
        this.isVisible = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
#curvy-arrow {
  transform: scale(-1, 1);
}
</style>
