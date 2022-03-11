const {resolve} = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')


const plugins = [
    new HtmlWebpackPlugin({
    template: 'src/popup-page/popup.html',
    filename: 'popup.html',
    chunks: ['popup'],
    }),
    new CopyWebpackPlugin({
    patterns: [
        {from: "public", to: "."}
    ],
    }),
    new CleanWebpackPlugin(),
];

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: './src/popup-page/popup.js',
        contentscript: './src/contentscript.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },

    plugins,
}