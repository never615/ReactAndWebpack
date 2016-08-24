/**
 * Created by never615 on 8/22/16.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {


    entry: [
        'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        app = './app/app.js'
    ],

    output: {

        path: path.resolve(__dirname, 'build'),
        filename: '[name].bundle.js',
        publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['react-hot']
            },
            {
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
