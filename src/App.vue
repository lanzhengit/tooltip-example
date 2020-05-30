<template>
    <div id="app">
        <!-- <router-view /> -->
        <Layout />
    </div>
</template>
<script>
import Layout from './views/layout/Layout'

export default {
    components: { Layout },
    name: 'App',
    computed: {},
};
</script>
<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }
</style>
