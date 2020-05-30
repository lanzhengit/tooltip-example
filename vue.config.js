const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const resolve = dir => {
    return path.join(__dirname, dir);
};
module.exports = {
    lintOnSave: true, //eslint检查
    runtimeCompiler: true, // 允许compiler模式
    devServer: {
        hot: true,
        clientLogLevel: "warning",
        overlay: {
            warning: true,
            error: true
        },
        disableHostCheck: true,
        proxy: {
            // 本地跨域代理设置
            "/api": {
                target: "http://10.19.151.196:8020", //http://10.19.151.196:8020
                changeOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    transpileDependencies: ["vue-echarts", "resize-detector"],
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    publicPath: "./",
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-plugin-px2rem")({
                        rootValue: 100, //换算基数， 默认100  ，这样的话把根标签的字体规定为1rem为100px,这样就可以从设计稿上量出多少个px直接在代码中写多上px了。
                        // unitPrecision: 5, //允许REM单位增长到的十进制数字。
                        //propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
                        // propBlackList: [], //黑名单
                        exclude: false,
                        // exclude: /(node_modules)/, //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)\/如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
                        // selectorBlackList: [], //要忽略并保留为px的选择器
                        // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
                        // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
                        mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
                        minPixelValue: 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
                    })
                ]
            }
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            // 为生产环境修改配置...
            config.plugins.push(
                new TerserPlugin({
                    terserOptions: {
                        compress: {
                            warnings: false,
                            drop_debugger: true, // console
                            drop_console: true, //注释console
                            pure_funcs: ["console.log"] // 移除console
                        }
                    },
                    sourceMap: false,
                    parallel: true
                })
            );
        } else {
            // 为开发环境修改配置...
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src")) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set("src", resolve("src"));
        // .set('components', resolve('src/components'))   //根据实际需要设置
        // .set('api', resolve('src/api'))
        // .set('assets', resolve('src/assets'))
        // .set('lang', resolve('src/lang'))
        // .set('router', resolve('src/router'))
        // .set('store', resolve('src/store'))
        // .set('utils', resolve('src/utils'))
        // .set('views', resolve('src/views'));
        config.plugin("provide").use(webpack.ProvidePlugin, [
            {
                $: "jquery",
                jquery: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }
        ]);
    }
};
