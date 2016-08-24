/**
 * Created by never615 on 8/22/16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        './app/app3.js'
    ],

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    plugins: [
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }, {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader',
                query: {
                    limit: 8192    //8192表示用base64编码<=8k的图像
                }
            }, {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    }

};
