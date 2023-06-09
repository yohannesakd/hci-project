import { createApp } from "vue";
import "./style.css";
import "animate.css";
import App from "./App.vue";
import Knob from "primevue/knob";

import PrimeVue from "primevue/config";

import ArrowRight from "@/components/util/ArrowRight.vue";

const app = createApp(App);
app.use(PrimeVue);

app.component("arrow-right", ArrowRight);
app.component("knob", Knob);
app.mount("#app");
