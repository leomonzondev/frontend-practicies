const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path');





module.exports = {
    mode: 'development',
    devtool:'cheap-module-source-map',
    entry:{
        popup: './src/popup.js',
        contentscript: './src/contentscript.js',
        
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, '/dist'),
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets:['@babel/preset-env', ['@babel/preset-react', {"runtime":"automatic"}]]
                    }
                }
            }],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/popup.html',
                filename: 'popup.html',
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: 'public' }
                ],
            }),
            new CleanWebpackPlugin()
        ],
}
