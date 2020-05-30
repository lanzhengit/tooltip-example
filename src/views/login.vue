<template>
    <div class="mid-center">
        <div class="stack-wrapper">
            <stack
                ref="stack"
                :pages="someList"
                :stackinit="stackinit"
            ></stack>
        </div>
        <div class="controls">
            <button
                class="button"
                @click="prev"
            >
                <i class="prev"></i>
                <span class="text-hidden">prev</span>
            </button>
            <button
                class="button"
                @click="next"
            >
                <i class="next" />
                <span class="text-hidden">next</span>
            </button>
        </div>
    </div>
</template>

<script>
import stack from 'vue-tantan-stack'

export default {
    name: 'Login',
    components: {
        stack,
    },
    data() {
        return {
            someList: [
                {
                    html: '<div class="test"></div>',
                    // style: {
                    //     background: '#1bbc9b',
                    // },
                },
                {
                    html: '<div class="test1"></div>',
                    // style: {
                    //     background: '#1bbc9b',
                    // },
                },
                {
                    html: '<div class="test2"></div>',
                    // style: {
                    //     background: '#1bbc9b',
                    // },
                },
            ],
            stackinit: {
                visible: 3,
            },
        }
    },
    methods: {
        prev() {
            this.$refs.stack.$emit('prev')
        },
        next() {
            this.$refs.stack.$emit('next')
        },
    },
}
</script>

<style lang="scss" >
.test {
    width: 320px;
    height: 320px;
    background-color: red;
}
.test1 {
    width: 320px;
    height: 320px;
    background-color: yellow;
}
.test2 {
    width: 320px;
    height: 320px;
    background-color: blue;
}
i {
    font-size: 70px;
    color: #409eff;
}

.register {
    color: red;
}
.stack-wrapper {
    margin: 0 auto;
    position: relative;
    z-index: 1000;
    width: 320px;
    height: 320px;
    padding: 0;
    list-style: none;
    pointer-events: none;
}
.controls {
    position: relative;
    width: 200px;
    text-align: center;
    display: flex; /*Flex布局*/
    display: -webkit-flex; /* Safari */
    justify-content: space-around;
    margin: 0 auto;
    margin-top: 50px;
}
.controls .button {
    border: none;
    background: none;
    position: relative;
    display: inline-block;
    cursor: pointer;
    font-size: 16px;
    width: 50px;
    height: 50px;
    z-index: 100;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    border-radius: 50%;
    background: #fff;
}
.button .next {
    display: inline-block;
    width: 10px;
    height: 5px;
    background: rgb(129, 212, 125);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
    left: -5px;
    top: 2px;
    position: relative;
}
.button .next:after {
    content: '/';
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(129, 212, 125);
    -webkit-transform: rotate(-90deg) translateY(-50%) translateX(50%);
}
.button .prev {
    display: inline-block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    line-height: 0;
    font-size: 0;
    vertical-align: middle;
    -webkit-transform: rotate(45deg);
}
.button .prev:after {
    content: '/';
    display: block;
    width: 20px;
    height: 5px;
    background: rgb(230, 104, 104);
    -webkit-transform: rotate(-90deg);
}
.controls .text-hidden {
    position: absolute;
    overflow: hidden;
    width: 0;
    height: 0;
    color: transparent;
    display: block;
}
</style>
