/**
 *@Description:路由tabs
 *@author: Wangsenyang
 *@Date: 2020/4/29
 */

const theme = {
    state: {
        historyRoutes: [],
    },
    getters: {
        getHistoryRoutes(state) {
            return state.historyRoutes;
        },
    },

    mutations: {
        ADD_HISTORY_ROUTES(state, data) {
            const flag = state.historyRoutes.some((v) => v.name === data.name)
            if (flag) return
            state.historyRoutes.push({
                ...data,
            });
        },
        DEL_HISTORY_ROUTES(state, data) {
            // eslint-disable-next-line no-restricted-syntax
            for (const [i, v] of state.historyRoutes.entries()) {
                if (v.path === data.path) {
                  state.historyRoutes.splice(i, 1)
                  break
                }
            }
        },
    },
    actions: {
        addHistoryRoutes({ commit }, data) {
            commit('ADD_HISTORY_ROUTES', data)
        },
        delHistoryRoutes({ commit, state }, data) {
            return new Promise((resolve) => { // resolve方法：未来成功后回掉的方法
                commit('DEL_HISTORY_ROUTES', data);
                resolve([...state.historyRoutes]);
              })
        },
    },
    namespaced: true,
};

export default theme;
