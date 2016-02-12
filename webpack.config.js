'use strict';

var webpack = require('webpack');

module.exports = {
    module: {
        loaders: [{
            test: /\.js$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/,
        }]
    },
    output: {
        library: 'ImageLayout',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ minimize: true }),
    ]
};
