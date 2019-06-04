const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        app: path.join(__dirname, 'src/app', 'index.js')
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