<template>
    <el-row>
        <tooltip
            v-for="(item,index) in config"
            :key="index"
            :placement="item.placement"
            :trigger="item.trigger"
            :message="item.message"
        />
    </el-row>
</template>

<script>
    import Tooltip from './tooltip';
    export default {
        name: "test",
        components: { Tooltip },
        data(){
            return {
                config:[
                    {
                        placement:'bottom',
                        trigger:'hover',
                        message:'我是tooltip1'
                    },
                    // {
                    //     placement:'right',
                    //     trigger:'hover',
                    //     message:'我是tooltip2'
                    // },
                    // {
                    //     placement:'bottom',
                    //     trigger:'hover',
                    //     message:'我是tooltip3'
                    // },
                    // {
                    //     placement:'left',
                    //     trigger:'click',
                    //     message:'我是tooltip4'
                    // },
                ]
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
