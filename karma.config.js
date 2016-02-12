var argv = require('yargs').argv;
var webpack = require('webpack');

module.exports = function(config) {
    config.set({
        // only use PhantomJS for our 'test' browser
        browsers: ['PhantomJS'],

        // just run once by default unless --watch flag is passed
        singleRun: !argv.watch,

        // which karma frameworks do we want integrated
        frameworks: ['mocha', 'chai'],

        // displays tests in a nice readable format
        reporters: ['spec'],

        // include some polyfills for babel and phantomjs
        files: [
            'node_modules/babel-polyfill/dist/polyfill.js',
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            './test/bootstrap.js',
            './test/**/*.spec.js'
        ],
        preprocessors: {
            // these files we want to be precompiled with webpack
            // also run tests throug sourcemap for easier debugging
            './test/**/*.js': ['webpack', 'sourcemap']
        },
        webpack: {
            plugins: [
                new webpack.optimize.OccurenceOrderPlugin(),
                new webpack.DefinePlugin({ IS_WEBPACK: false, }),
                new webpack.NoErrorsPlugin()
            ],
            resolve: {
                // required for enzyme to work properly
                alias: {
                    'sinon': 'sinon/pkg/sinon'
                }
            },
            module: {
                // don't run babel-loader through the sinon module
                noParse: [
                    /node_modules\/sinon\//
                ],
                loaders: [
                    { test: /\.js$/, loaders: ['babel-loader'], exclude: /node_modules/ }
                ]
            },
            // required for enzyme to work properly
            externals: {
                'jsdom': 'window',
                'cheerio': 'window',
                'react/lib/ExecutionEnvironment': true,
                'react/lib/ReactContext': 'window'
            },
        },
        webpackMiddleware: {
            noInfo: true
        },
        // tell karma all the plugins we're going to be using to prevent warnings
        plugins: [
            'karma-mocha',
            'karma-chai',
            'karma-webpack',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-sourcemap-loader'
        ]
    });
};
