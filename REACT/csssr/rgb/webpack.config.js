const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors'),
        app: path.join(__dirname, 'src', 'index.js')
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].js',
        library: 'lib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },
    devtool: 'source-map',
    plugins:[
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'build', 'index.html')
        })]
  };