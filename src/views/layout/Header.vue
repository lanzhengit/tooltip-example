<template>
    <div class="enc-Header flex-y-center">
        <el-tag
            v-for="tag in getHistoryRoutes"
            :key="tag.name"
            closable
            :type="isActive(tag)?'':'info'"
            @click="navigateRoute(tag)"
            @close="delRoute(tag)"
        >
            {{ tag.meta.menuName }}
        </el-tag>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'Header',
    computed: {
        ...mapGetters('routerTabs', ['getHistoryRoutes']),
    },
    methods: {
        ...mapActions('routerTabs', ['delHistoryRoutes']),
        navigateRoute(route) {
            this.$router.push(route.path)
        },
        delRoute(route) {
            this.delHistoryRoutes(route).then((routes) => {
                console.log(routes)
                if (this.isActive(route) && routes.length !== 0) {
                    const lastRoute = routes[routes.length - 1]
                    console.log(lastRoute)
                    if (lastRoute) {
                        this.$router.push(lastRoute.path)
                    } else {
                        this.$router.push('/')
                    }
                }
            })
        },
        isActive(route) {
            return route.path === this.$route.path
        },
    },
}
</script>

<style lang="scss" scoped>
.enc-Header {
    height: 100%;
    background-color: #fff;
    padding: 0 10px;
    .delete-btn {
        display: inline-block;
    }
    /deep/ .el-tag{
        cursor: pointer;
        margin: 0 10px;
    }
}
</style>
