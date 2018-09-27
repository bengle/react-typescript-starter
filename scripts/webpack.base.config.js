const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HotModuleReplacementPlugin = require('webpack-hot-middleware');
const port = 8099;
module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../src/app.tsx'), 'webpack/hot/dev-server', 'webpack-dev-server/client?http://localhost:' + port + '/'],
        vender: ['react', 'react-dom','redux','react-redux']
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use:{
                    loader:"ts-loader"
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: '/node_modules/',
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "less-loader"
                ]
            }
        ]
    },
    optimization: {
        runtimeChunk: true,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: true,
                    minChunks: 2,
                    chunks: 'initial'
                }
            }
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "src/public/index.html",
            filename: "index.html"
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../src/public/sw.js')
        }]),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
};
