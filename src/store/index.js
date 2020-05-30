/**
 *@Description: store出口配置
 *@author: Wangsenyang
 *@Date: 2020/2/27
 */
import Vue from 'vue';
import Vuex from 'vuex';
import theme from './modules/theme';
import user from './modules/user';
import routerTabs from './modules/routerTabs';

Vue.use(Vuex);
const store = new Vuex.Store({
    modules: {
        theme,
        user,
        routerTabs,
    },
});

export default store;
