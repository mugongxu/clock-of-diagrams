// webpack配置
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = {
    mode: 'production',
    entry: {
        app: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        contentBase: false,
        host: 'localhost',
        port: 3390
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader'],
                include: [resolve('src/css')]
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                include: [resolve('src/css')]
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
};
