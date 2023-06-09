<template>
  <div class="card flex justify-content-center">
    <Knob v-model="value" :min="-50" :max="50" :size="200" />
  </div>
</template>

<script>
import Knob from "primevue/knob";

export default {
  components: {
    Knob,
  },
  data() {
    return {
      value: 0,
    };
  },
};
</script>
