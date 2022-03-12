const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { resolve } = require('path');





module.exports = {
    entry:{
        popup: './src/popup.jsx',
        contentscript: './public/contentscript.js',
        
    },
    output: {
        path: resolve(__dirname, '/dist'),
        filename: '[name].js',
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
