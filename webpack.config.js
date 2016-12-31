const webpack = require('webpack');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: './',
        filename: 'bundle.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.json$/,
                include: /node_modules/,
                loader: 'json-loader'
            }
        ]
    },
    node: {
        fs: "empty"
    }
    // , plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
}
