const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require ("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require ("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: {
        main: path.resolve(__dirname, './script.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    },
    mode:"development",
    // mode:"production",
    plugins:[
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./index.pug",
            filename:"index.html"
        }),
        new CopyPlugin({
            patterns: [
                { from: "img", to: "img" },
            ],
          }),
    ],
    devServer: {
        historyApiFallback: true
    },
    module:{
        rules:[
            {
                test:/\.scss$/i,
                use:[MiniCssExtractPlugin.loader,"css-loader","sass-loader"],
            },
            {
                test: /\.pug$/,
                use: 'pug-loader'
            }
        ],
        
    },
    optimization: {
        minimizer: [
          `...`,
          new CssMinimizerPlugin(),
        ],
      },  
}