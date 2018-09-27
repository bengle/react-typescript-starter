const webpack = require('webpack');
const path = require('path');
const HotModuleReplacementPlugin = require('webpack-hot-middleware');
const config = require('./webpack.base.config.js');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
const port = 8099;
config.devServer = {
    contentBase: path.join(__dirname, 'dist'),
        host: '0.0.0.0',
        port: port,
        historyApiFallback: true,
        proxy: [{
            path: '/home/**',
            target: 'http://127.0.0.1:8088',
            secure: false
        }]
}

module.exports = config;
