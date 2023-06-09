<template>
  <div class="w-full">
    <div
      class="min-h-[100vh] text-black lg:pt-28 pt-16 pb-10 flex flex-col items-center relative"
    >
      <h2 class="text-3xl font-semibold text-center">4. Affordance</h2>
      <div class="flex mt-4">
        <div
          class="w-1/2 text-center flex flex-col justify-center space-y-4 text-lg px-16"
        >
          <p>
            Affordance refers to the relationship between an object or system
            and the user's abilities to perceive and interact with it.
            Affordances are the physical or perceived properties of an object or
            system that suggest how it can be used. The principle of affordance
            is important in design because it helps users understand how to
            interact with a system or object and what actions are possible.
          </p>
          <p>
            Affordances can be visual, such as a button that looks clickable, or
            they can be physical, such as a lever that can be pulled or pushed.
            They can also be perceived, such as the affordance of a touchscreen
            that suggests it can be interacted with by touching.
          </p>
          <p>
            This temperature controller UI is designed in a way that suggests
            how users can interact with it to set the temperature. By
            incorporating clear physical and visual affordances, matching the
            user's mental model, and providing feedback, designers can create an
            interface that is intuitive and easy to use, leading to a more
            positive user experience.
          </p>
        </div>
        <div
          class="dial-container w-1/2 flex justify-center border-l-2 border-gray-300 pl-10"
        >
          <VueKnob></VueKnob>
        </div>
      </div>
      <div class="flex gap-4">
        <a
          class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex items-center gap-2 mt-8 flex-1"
          href="#conceptual-model"
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
          class="px-6 py-3 border-none bg-button-primary text-white rounded-lg shadow-sm hover:shadow-xl hover:text-blue-100 transition-all flex max-w-fit items-center gap-2 mt-8"
          href="#signifiers"
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
import VueKnob from "./util/VueKnob.vue";

export default {
  components: {
    VueKnob,
  },
};
// import { ref } from "vue";

// const value = ref(60);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap");

.dial-container {
  margin: 0;
  width: 50%;
  height: 80vh;

  display: grid;
  place-items: center;
}

@property --x {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 10%;
}

@property --y {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 50%;
}

input {
  transition: all 0.2s;
  position: relative;
  --x: 10%;
  --y: 50%;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 40vmin;
  height: 40vmin;
  border-radius: 50%;
  background: blue;
  box-shadow: -24.75vmin 0 0 -19.5vmin #000c,
    -23.25vmin -9vmin 0 -19.4vmin #000c, -18.75vmin -16vmin 0 -19.3vmin #000c,
    -12.25vmin -21vmin 0 -19.2vmin #000c, -4.75vmin -24vmin 0 -19.1vmin #000c,
    4.75vmin -24vmin 0 -19vmin #000c, 12.5vmin -21.25vmin 0 -18.9vmin #000c,
    19vmin -16.25vmin 0 -18.8vmin #000c, 23.25vmin -9vmin 0 -18.7vmin #000c,
    25vmin 0 0 -18.6vmin #000c, 23.25vmin 9vmin 0 -18.5vmin #000c,
    0 0 1.5vmin -0.5vmin #0007, 3vmin 3vmin 3vmin -2vmin,
    inset 0.5vmin 0.5vmin 0.5vmin #fff6, inset -0.5vmin -0.5vmin 0.5vmin #0003;
  background: radial-gradient(
      farthest-side,
      transparent calc(95% - 1px),
      #fff3 0 95%,
      #87848a88 0
    ),
    radial-gradient(#3a3a3a77, #1b213911 50%, transparent),
    radial-gradient(
        closest-side,
        #d00,
        #800 70%,
        #400 80%,
        #4444 0 calc(80% + 1px),
        transparent
      )
      var(--x) var(--y) / 10% 10%,
    repeating-radial-gradient(#fbfbfb11 0 0.625%, #3a3a3a11 0 1.25%),
    conic-gradient(
      #fbfbfb88 0,
      transparent 45deg 135deg,
      #fbfbfb88 180deg,
      transparent 225deg 315deg,
      #fbfbfb88
    ),
    conic-gradient(
      transparent 45deg,
      #3a3a3a88 90deg,
      transparent 135deg 225deg,
      #3a3a3a88 270deg,
      transparent 300deg
    ),
    linear-gradient(-45deg, #65696f, #d9d9d9aa);
  /* conic-gradient(white, gray 45deg, darkgray 90deg, gray 135deg, white 180deg, gray 225deg, darkgray 270deg, gray 315deg, white 360deg)*/
  background-color: #bbb;
  background-repeat: no-repeat;
  filter: blur(1px) contrast(1.8);
}

input[value="1"] {
  --x: 10%;
  --y: 50%;
}
input[value="2"] {
  --x: 12.5%;
  --y: 36%;
}
input[value="3"] {
  --x: 19.5%;
  --y: 23.5%;
}
input[value="4"] {
  --x: 30%;
  --y: 15%;
}
input[value="5"] {
  --x: 42%;
  --y: 10%;
}
input[value="6"] {
  --x: 58%;
  --y: 10%;
}
input[value="7"] {
  --x: 70%;
  --y: 15%;
}
input[value="8"] {
  --x: 80.5%;
  --y: 23.5%;
}
input[value="9"] {
  --x: 87.5%;
  --y: 36%;
}
input[value="10"] {
  --x: 90%;
  --y: 50%;
}
input[value="11"] {
  --x: 87.5%;
  --y: 64%;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: transparent;
  border: 0 solid transparent;
  width: 10%;
  height: 10%;
  display: block;
}

input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  background: transparent;
  border: 0 solid transparent;
  width: 10%;
  height: 10%;
  display: block;
}

input[type="range"]::-ms-track {
  width: 100%;
  cursor: pointer;

  /* Hides the slider so custom styles can be added */
  background: transparent;
  border-color: transparent;
  color: transparent;
}

input::after {
  content: "VOLUME";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 160%;
  height: 150%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  font-size: 4.5vmin;
  color: #222c;
  font-family: "Zen Kurenaido", Verdana, Helvetica, Arial, sans-serif;
  font-weight: bold;
  background: #f003;
  background: linear-gradient(
        -45deg,
        transparent 50%,
        #111a 0 60%,
        transparent 0
      )
      5% 48.5% / 0.75vmin 4vmin,
    linear-gradient(#111a, #111a) 5.75% 50% / 0.4vmin 3vmin,
    linear-gradient(-45deg, transparent 50%, #111a 0 60%, transparent 0) 90.875%
      70.5% / 0.75vmin 4vmin,
    linear-gradient(#111a, #111a) 91% 72% / 0.4vmin 3vmin,
    linear-gradient(-45deg, transparent 50%, #111a 0 60%, transparent 0) 92.875%
      70.5% / 0.75vmin 4vmin,
    linear-gradient(#111a, #111a) 93% 72% / 0.4vmin 3vmin;
  background-repeat: no-repeat;
  pointer-events: none;
}

/* input[value="1"] { transform: rotate(0) }
input[value="2"] { transform: rotate(18deg) }
input[value="3"] { transform: rotate(36deg) }
input[value="4"] { transform: rotate(54deg) }
input[value="5"] { transform: rotate(72deg) }
input[value="6"] { transform: rotate(80deg) }
input[value="7"] { transform: rotate(98deg) }
input[value="8"] { transform: rotate(116deg) }
input[value="9"] { transform: rotate(134deg) }
input[value="10"] { transform: rotate(162deg) }
input[value="11"] {transform: rotate(180deg) } */

/* input::before {
  content: "maybe?"
} */
</style>
