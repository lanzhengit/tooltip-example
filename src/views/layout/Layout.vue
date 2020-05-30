<!--
 *@Description: layout页面布局
 *@author: Wangsenyang
 *@Date: 2020/4/28
-->
<template>
    <el-container class="page-module-root">
        <el-aside>
            <Menu />
        </el-aside>
        <el-container class="main-container">
            <el-header>
                <Header />
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import Header from './Header'
import Menu from './Menu'

export default {
    components: {
        Header,
        Menu,
    },
    name: 'Layout',
    data() {
        return {}
    },
    computed: {},
    methods: {},
    mounted() {},
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/themes';

.page-module-root {
    height: 100%;
    .el-divider--horizontal {
        margin: 10px 0;
    }
    .el-header {
        padding: 0;
    }
    /deep/ .el-aside {
        padding: 0;
        width: unset !important;
        background:rgba(248,249,251,1);
        overflow: hidden;
        // min-width: 100PX;
    }
}
</style>
