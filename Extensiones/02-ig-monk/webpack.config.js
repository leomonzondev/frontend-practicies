const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { resolve } = require("path");
const { webpack } = require("webpack");

module.exports = {
  entry: {
    popup: "./src/popup.jsx",
    contentscript: './public/content.js'
  },
  output: {
    path: resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  mode: "production",
  module: {
    rules: [{ 
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
            }
        } 
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/popup.html',
        filename: 'popup.html'
        }),
    new CopyPlugin({
        patterns: [
            { from: 'public'}
        ]
        }),
    new CleanWebpackPlugin()
  ],
};
