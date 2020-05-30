<template>
    <div class="test">
    <span
        class="trigger"
        ref="trigger"
        @click="clickFun"
        @mouseleave="mouseLeaveFun"
        @mouseenter="mouseEnterFun"
    >
    {{ message }}
    </span>
        <div
            class="tooltip"
            :class="{
                'top':     placement === 'top',
                'left':    placement === 'left',
                'right':   placement === 'right',
                'bottom':  placement === 'bottom',
              }"
            v-show="show"
            ref="popover"
            role="tooltip">
            <div class="tooltip-inner">
                {{ message }}
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        props: {
            // 需要监听的事件
            trigger: {
                type: String,
                default: 'hove'
            },
            // 位置
            placement: {
                type: String,
                default:'right'
            },
            // 传入的变量
            message:{
                type: String,
                default:'我是tooltip'
            }
        },
        data() {
            return {
                // 通过计算所得 气泡位置
                position: {
                    top: 0,
                    left: 0
                },
                show: false,
            };
        },
        watch: {
            show: function(val) {
                    if (val) {
                        const popover = this.$refs.trigger;
                        const triger = this.$refs.popover;
                        // 通过placement计算出位子
                        switch (this.placement) {
                            case 'top' :
                                this.position.left = popover.offsetWidth / 2 - triger.offsetWidth / 2 + triger.offsetLeft  ;
                                this.position.top = triger.offsetTop - popover.offsetHeight;
                                break;
                            case 'left':
                                this.position.left = triger.offsetLeft - popover.offsetWidth;
                                this.position.top = triger.offsetTop + triger.offsetHeight / 2 - popover.offsetHeight / 2;
                                break;
                            case 'right':
                                this.position.left = triger.offsetLeft + triger.offsetWidth;
                                this.position.top = popover.offsetHeight / 2-triger.offsetTop + triger.offsetHeight / 2  ;
                                break;
                            case 'bottom':
                                this.position.left = triger.offsetLeft - popover.offsetWidth / 2 + triger.offsetWidth / 2;
                                this.position.top = triger.offsetTop + triger.offsetHeight;
                                break;
                            default:
                        }
                        popover.style.top = this.position.top + 'px';
                        popover.style.left = this.position.left + 'px';
                    }
                }
        },
        methods: {
            // 鼠标移入移出
            mouseEnterFun(){
                if(this.trigger == 'hover'){
                    this.toggle();
                }
            },
            mouseLeaveFun(){
                if(this.trigger == 'hover') {
                    this.toggle();
                }
            },
            // 鼠标点击
            clickFun(){
                if(this.trigger == 'click') {
                    this.toggle();
                }
            },
            toggle() {
                this.show = !this.show;
            }
        },
       mounted() {
       }
    }

</script>

<style lang="scss" scoped>
    .test{
        width: 100px;
        height: 100px;
        .trigger{
           display: inline-block;
           width: 100%;
           /*margin-top: 150px;*/
           margin-left: 130px;
        }
        .tooltip{
            width: 100%;
            height: 50%;
            border: 1px solid #DCDFE6;
            position: relative;
        }
        .top{
            position: relative;
            //top: -80px;
        }
        .bottom{
            position: relative;
           // bottom: -10px;
        }
        .left{
            position: relative;
          //  left: 0px;
          //  top:-70px
        }
        .right{
            position: relative;
          // right: -300px;
          // top:-70px
        }
    }

</style>
