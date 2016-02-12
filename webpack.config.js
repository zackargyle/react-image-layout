'use strict';

var webpack = require('webpack');

module.exports = {
    entry: './src/ImageLayout.js',
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        }]
    },
    output: {
        path: __dirname + "/dist",
        filename: "ImageLayout.min.js",
        library: 'ImageLayout',
        libraryTarget: 'umd'
    },
    externals: {
        react: 'react'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    ]
};
