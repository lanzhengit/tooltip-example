/**
 *@Description: 路由列表
 *@author: Wangsenyang
 *@Date: 2020/4/27
 */

    // import routerFactory from './routerFactory'

const _import = require(`./_import_${process.env.NODE_ENV}`); // eslint-disable-line

const Info = { template: '<router-view></router-view>' };

const routes = [

    { path: '/', redirect: '/audioTest2', meta: { menuShow: false } },
    // { path: '/login', name: 'login', component: _import('login'), meta: { menuShow: false } },
    // {
    //     path: '/test',
    //     name: 'test',
    //     component: Info,
    //     meta: {
    //         menuShow: true,
    //         menuName: '测试demo',
    //     },
    //     children: [
    //         {
    //             path: 'autosize',
    //             name: 'autosize',
    //             component: _import('test/Audio'),
    //             meta: { menuShow: true, menuName: '自适应测试' },
    //         },
    //         {
    //             path: 'threeJsCube',
    //             name: 'Cube',
    //             component: _import('test/Audio'),
    //             meta: { menuShow: true, menuName: 'webGL立方体' },
    //         },
    //         {
    //             path: 'audioTest',
    //             name: 'audio',
    //             component: _import('test/Audio'),
    //             meta: { menuShow: true, menuName: '音频采集测试' },
    //         },
    //     ],
    // },
    {
        path: '/audioTest2',
        name: 'audio2',
        component: _import('test/test'),
        meta: { menuShow: true, menuName: 'tooltip' },
    },
];

export default routes;
