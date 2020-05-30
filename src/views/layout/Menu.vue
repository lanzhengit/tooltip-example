<template>
    <div class="menu">
        <el-image
            :src="logoUrl"
            fit="fill"
            @click="isCollapse=!isCollapse"
        ></el-image>
        <PerfectScrollbar class="scroll-box">
            <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                router
                @open="handleOpen"
                @close="handleClose"
            >
                <template v-for="(item,index) in routerList">
                    <el-submenu
                        v-if="item.children && item.meta.menuShow"
                        :key="index"
                        :index="item.path"
                    >
                        <template slot="title">
                            <i class="el-icon-location" />
                            <span>{{ item.meta.menuName }}</span>
                        </template>
                        <el-menu-item-group>
                            <!--item.name和item.children.name来配置菜单栏和子菜单栏的名称-->
                            <div
                                v-for="child in item.children"
                                :key="child.path"
                            >
                                <el-menu-item
                                    v-if="child && child.meta.menuShow"
                                    :index="`${item.path}/${child.path}`"
                                    :class="{'is-active': $router.path === `${item.path}/${child.path}`}"
                                >
                                    {{ child.meta.menuName }}
                                </el-menu-item>
                            </div>
                        </el-menu-item-group>
                    </el-submenu>
                    <!--当没有子路由时-->
                    <el-menu-item
                        v-if="!item.children && item.meta.menuShow"
                        :key="index"
                        :index="item.path"
                        :class="{'is-active': $router.path === item.path}"
                    >
                        <i class="el-icon-location" />
                        <span slot="title">
                            <span style="width:3px;background-color:red"></span>
                            {{ item.meta.menuName }}
                        </span>
                    </el-menu-item>
                </template>
            </el-menu>
        </PerfectScrollbar>
        <div class="personal-btn">
            <el-image
                class="personal-btn"
                :src="logoUrl"
                fit="fill"
                @click="goToPersonalPage"
            >
            </el-image>
            <div class="quit-btn">
                <i class="el-icon-switch-button" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            logoUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            isCollapse: true,
            routerList: [],
        }
    },
    components: {},
    methods: {
        handleOpen(key, keyPath) {
            // console.log(key, keyPath)
        },
        handleClose(key, keyPath) {
            // console.log(key, keyPath)
        },
        goToPersonalPage() {},
    },
    mounted() {
        this.routerList = this.$router.options.routes
    },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import '../../assets/styles/flex.scss';

.menu {
    height: 100%;
    padding: 20px 18px;
    overflow: hidden;
    box-sizing: border-box;
    .el-image {
        display: block;
        width: 50px;
        height: 50px;
        margin: 36px auto;
        border-radius: 50%;
        cursor: pointer;
    }
    .personal-btn {
        position: relative;
        cursor: pointer;
        margin: 20px auto;
        width: 50px;
        height: 50px;
        .el-image {
            display: block;
            margin: unset;
            border-radius: 50%;
            cursor: pointer;
        }
        .quit-btn {
            position: absolute;
            right: 0;
            bottom: 0;
            background: #8b8ea3;
            font-size: 18px;
            border-radius: 50%;
            color: #fff;
            cursor: pointer;
            &:hover {
                background: #356afb;
                color: #fff;
            }
        }
    }
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
    /deep/ .el-menu {
        background-color: rgba(248, 249, 251, 1);
        border: 0;
        .el-submenu__title,
        .el-menu-item {
            height: 0.8rem;
            line-height: 0.8rem;
            i:nth-of-type(1) {
                font-size: 24px;
                color: #384052;
                &:hover {
                    color: #356afb;
                }
            }
        }
        .is-active i {
            color: #356afb !important;
        }
    }
    /deep/ .el-menu-item.is-active {
        color: #356afb;
    }
    /deep/ .el-menu--collapse > .el-menu-item.is-active i {
        color: #356afb;
    }
    .scroll-box {
        height: calc(100% - 212px);
    }
}
</style>
