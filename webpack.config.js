const webpack = require('webpack');

module.exports = {
    entry: "./app/app.module.js",
    output: {
        path: './app',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
}