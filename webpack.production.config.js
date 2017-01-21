var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var AutoPrefixer = require('autoprefixer');
var AutoReset = require('postcss-autoreset');
var UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: [
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
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress:{
                warnings: false
            },
            output: {
                comments: false,  // remove all comments
            }
        }),
        new CopyWebpackPlugin([{
            from: './app/index.html',
            to: 'index.html'
        }]),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        })
    ],
    postcss: [AutoPrefixer, AutoReset({reset: {
        margin: 0, padding: 0
    }})],
    externals: {} //申明一个外部依赖，比如使用公用 CDN
};
