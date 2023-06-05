<template>
  <div class="w-full" :style="{ backgroundColor: colorValueBg }">
    <div class="min-h-[100vh] flex items-center justify-center">
      <h1 class="text-2xl" :style="{ color: colorValueText }">6. Mapping</h1>
    </div>
    <div class="flex items-center gap-4">
      <p class="w-1/2 text-center" :style="{ color: colorValueText }"
        >Mapping refers to the relationship between the controls of a system and
        the results of those controls. Mapping is the principle of designing the
        relationship between the physical or digital controls of a system and
        the functions they perform, in a way that is intuitive and easy to
        understand.</p
      >
      <div class="flex flex-col justify-center items-center w-1/3">
        <div class="flex justify-center items-center gap-4">
          <p :style="{ color: colorValueText }">Change Background Color:</p>
          <input
            class="cursor-pointer h-10 outline-none w-10"
            type="color"
            v-model="colorValueBg"
          />
        </div>
        <div class="flex justify-center items-center gap-4"
          ><p :style="{ color: colorValueText }">Change Text Color:</p>
          <input
            class="cursor-pointer h-10 outline-none w-10"
            type="color"
            v-model="colorValueText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorValueBg: "#ffffff",
      colorValueText: "#000000",
    };
  },
};
</script>
