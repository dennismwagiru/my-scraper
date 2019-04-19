var path = require('path');
var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
    mode: process.env.NODE_ENV || 'development'
};

module.exports = (env, args) => {
    config.context = __dirname;

    config.entry = {
        main:   './assets/js/static/index'
    };

    config.output = {
        path:   path.resolve('./assets/js'),
        filename: "[name].js"
    };

    config.module = {
        rules:  [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                // loader: require.resolve('css-loader'),
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
        ],
    };

    config.plugins = [
        new webpack.ProvidePlugin({
            $:  'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ];

    config.performance = {
        hints: 'error'
    };

    config.resolve = {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.jsx', 'css']
    };

    if (args.mode === 'production') {
        config.optimization = {
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true, // Must be set to true if using source-maps in production
                    terserOptions: {
                        ecma: undefined,
                        warnings: false,
                        comments: false,
                        beautify: false,
                        parse: {},
                        compress: {
                            drop_console: true,
                            warnings: false,
                        },
                        mangle: true, // Note `mangle.properties` is `false` by default.
                        module: false,
                        output: null,
                        toplevel: false,
                        nameCache: null,
                        ie8: false,
                        keep_classnames: undefined,
                        keep_fnames: false,
                        safari10: false,
                    }
                }),
            ],
        }
    }

    return config;

};