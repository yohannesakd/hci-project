<template>
    <svg
        id="eHOLxC9hpJ11"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 153 93"
        shape-rendering="geometricPrecision"
        text-rendering="geometricPrecision"
        width="153"
        height="93"
    >
        <path
            ref="part-1"
            d="M5.037634,86.683914c0,0-3.747808-5.426514-3.521845-13.739541.177861-6.543378,3.426917-11.259871,6.853834-14.849974c3.950458-4.138575,10.443938-6.364275,18.276891-7.180207s26.762591,1.305491,31.331813,6.364274s1.795051,8.812073-1.795052,10.607124-10.933498-.979119-9.138446-8.159326s11.096684-8.975259,26.436217-7.99614s20.887876,1.795052,37.859274,0q16.971398-1.795052,29.047201-8.485699q7.99614-5.711529,10.280751-10.117565c2.284611-4.406036,3.100544-11.912616-1.795052-15.992279s-6.201087-3.100544-12.238989-5.874715q-6.037902-2.774171-3.781265-8.643688"
            transform="matrix(-1 0 0 1 154.096381-.489556)"
            fill="none"
            stroke="#0e0d0d"
            stroke-width="0.5"
            stroke-dasharray="270.113936"
            class="svg-elem-1"
        ></path>
        <path
            ref="part-2"
            d="M2.80317,85.3345L0,88.5741l.411952.8877L3.21512,86.218l.41195.8877-2.803165,3.2396.411955.8835l2.80317-3.2395.40721.8835-2.79843,3.2395L2.05976,93l2.80317-3.2437.41669.9087.87125-.3197-.42142-.9046l4.55985.5343-.41192-.8835L5.3175,88.553l-.41195-.8835l4.55515.5343-.41195-.8835-4.55516-.5343-.41195-.8835l4.55515.5343-.41195-.8877-4.55515-.5343-.86652.3197Z"
            transform="matrix(-1 0 0 1 152.900031-.137119)"
            fill="#231f20"
            class="svg-elem-2"
        ></path>
        <path
            ref="part-3"
            d="M241.577642,1.631865c-1.373.24822-3.262-.35761-4.418-.99289c2.302-.07462,4.54-.6933,6.483-1.79227-.474,1.99842,0,4.07677.7,6.00366-1.15-.79937-2.424-1.92689-2.765-3.2185Z"
            transform="matrix(-1 0 0 1 262.839004 1)"
            fill="#231f20"
            class="svg-elem-3"
        ></path>
    </svg>
</template>

<script>
export default {
    props: {
        isVisible: Object,
    },
    watch: {
        "isVisible.value"(newVal) {
            if (newVal) {
                console.log(newVal)
                this.$refs["part-1"].classList.add("svg-elem-1")
                this.$refs["part-2"].classList.add("svg-elem-2")
                this.$refs["part-3"].classList.add("svg-elem-3")
            } else {
                console.log("no new Val")
                this.$refs["part-1"].classList.remove("svg-elem-1")
                this.$refs["part-2"].classList.remove("svg-elem-2")
                this.$refs["part-3"].classList.remove("svg-elem-3")
            }
        },
    },
    methods: {
        handleVisibility() {},
    },
}
</script>

<style scoped>
@-webkit-keyframes animate-svg-stroke-1 {
    0% {
        stroke-dashoffset: 268.5124816894531px;
        stroke-dasharray: 268.5124816894531px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 268.5124816894531px;
    }
}

@keyframes animate-svg-stroke-1 {
    0% {
        stroke-dashoffset: 268.5124816894531px;
        stroke-dasharray: 268.5124816894531px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 268.5124816894531px;
    }
}

.svg-elem-1 {
    -webkit-animation: animate-svg-stroke-1 1.5s
            cubic-bezier(0.47, 0, 0.745, 0.715) 0s both,
        animate-svg-fill-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both;
    animation: animate-svg-stroke-1 1.5s cubic-bezier(0.47, 0, 0.745, 0.715) 0s
            both,
        animate-svg-fill-1 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.5s both;
}

@-webkit-keyframes animate-svg-stroke-2 {
    0% {
        stroke-dashoffset: 68.8459701538086px;
        stroke-dasharray: 68.8459701538086px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 68.8459701538086px;
    }
}

@keyframes animate-svg-stroke-2 {
    0% {
        stroke-dashoffset: 68.8459701538086px;
        stroke-dasharray: 68.8459701538086px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 68.8459701538086px;
    }
}

@-webkit-keyframes animate-svg-fill-2 {
    0% {
        fill: transparent;
    }

    100% {
        fill: rgb(35, 31, 32);
    }
}

@keyframes animate-svg-fill-2 {
    0% {
        fill: transparent;
    }

    100% {
        fill: rgb(35, 31, 32);
    }
}

.svg-elem-2 {
    -webkit-animation: animate-svg-stroke-2 1.5s
            cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s both,
        animate-svg-fill-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both;
    animation: animate-svg-stroke-2 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
            0.12s both,
        animate-svg-fill-2 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s both;
}

@-webkit-keyframes animate-svg-stroke-3 {
    0% {
        stroke-dashoffset: 23.850582122802734px;
        stroke-dasharray: 23.850582122802734px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 23.850582122802734px;
    }
}

@keyframes animate-svg-stroke-3 {
    0% {
        stroke-dashoffset: 23.850582122802734px;
        stroke-dasharray: 23.850582122802734px;
    }

    100% {
        stroke-dashoffset: 0;
        stroke-dasharray: 23.850582122802734px;
    }
}

@-webkit-keyframes animate-svg-fill-3 {
    0% {
        fill: transparent;
    }

    100% {
        fill: rgb(35, 31, 32);
    }
}

@keyframes animate-svg-fill-3 {
    0% {
        fill: transparent;
    }

    100% {
        fill: rgb(35, 31, 32);
    }
}

.svg-elem-3 {
    -webkit-animation: animate-svg-stroke-3 1.5s
            cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s both,
        animate-svg-fill-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.7s both;
    animation: animate-svg-stroke-3 1.5s cubic-bezier(0.47, 0, 0.745, 0.715)
            0.24s both,
        animate-svg-fill-3 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.7s both;
}
</style>
