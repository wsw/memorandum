var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AutoPrefixer = require('autoprefixer');
var AutoReset = require('postcss-autoreset');
/*
* 测试环境配置
* 使用autoprefixer自动添加CSS前缀
* 使用url-loader加载静态资源模块
* 使用babel-loader进行ES6代码转义
* 使用open-browser-webpack-plugin插件自动打开默认浏览器查看结果
* 使用webpack-dev-server进行代码热替换
* 运行端口：8080
*/
module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './bundle.js'
    },
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            include: path.resolve(__dirname, 'app'),
            loader: 'url-loader'
        }, {
            test: /\.css$/,
            // include: path.resolve(__dirname, 'app'),
            loader: ExtractTextPlugin.extract("style-loader", "css-loader")
        },{
            test: /\.js[x]?$/,
            include: path.resolve(__dirname, 'app'),
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    plugins: [
        new ExtractTextPlugin("[name].css"),
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
    postcss: [AutoPrefixer, AutoReset({reset: {
        margin: 0, padding: 0
    }})],
    externals: {} //申明一个外部依赖，比如使用公用 CDN
};
