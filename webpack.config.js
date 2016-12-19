const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './app/app.module.js',
    output: {
        path: './',
        filename: 'bundle.js'
    }
    , module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.html$/,
                loader: "html"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.png$/,
                loader: "url-loader?mimetype=image/png"
            }
        ],
        htmlLoader: {
            ignoreCustomFragments: [/\{\{.*?}}/],
            root: path.resolve(__dirname, 'assets'),
            attrs: ['img:src', 'link:href']
        }
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