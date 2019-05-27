const path = require('path');
module.exports = {
    entry: path.join(__dirname, 'src', 'App2.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle2.js',
        library: 'lib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'source-map'
  };