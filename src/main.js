import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"

import ArrowRight from "@/components/util/ArrowRight.vue"

createApp(App).component("arrow-right", ArrowRight).mount("#app")
