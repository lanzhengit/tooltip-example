export default (router, store) => {
    router.beforeEach((to, from, next) => {
        // console.log(to, from);
        store.dispatch('routerTabs/addHistoryRoutes', to);
        next();
        // to do sth....
    });
}
