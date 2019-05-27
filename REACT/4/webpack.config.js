const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        vendors: path.join(__dirname, 'src', 'vendors'),
        app: path.join(__dirname, 'src', 'App3')
    },
    output: {
        path: path.join(__dirname, 'HomeWorkBuild'),
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
            template: path.join(__dirname, 'src', 'index2.html'),
            filename: path.join(__dirname, 'HomeWorkBuild', 'index.html')
        })]
  };