const path = require('path');
const webpack = require('webpack');
module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                use: [{
                    loader: 'html-loader',
                }],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015', 'react'],
                        },
                    },
                ],
            },
            {
                test: /\.(png|jpg|svg|cur|gif|eot|svg|ttf|woff|woff2)$/,
                use: ['url-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',

                query: {
                    presets: ['es2015', 'react'],
                    compact: false,
                    sourceMap: true
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },

        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public"),
        publicPath: '/dist/'
    }
};