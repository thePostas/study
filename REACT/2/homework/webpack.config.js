const path = require('path');
// module.exports = {
//     entry: path.join(__dirname, 'src', 'headerReact.js'),
//     output: {
//         path: path.join(__dirname, 'build'),
//         filename: 'bundleReact.js',
//     },
//     module: {
//         rules: [
//             { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
//         ]
//     },
//     devtool: 'source-map'
//   };

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        library: 'lib'
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    devtool: 'source-map-content'
};