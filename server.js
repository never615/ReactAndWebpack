/**
 * Created by never615 on 8/23/16.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

var port=3000;


//Setting for dev server

var reactHostLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: ['react-hot']
};

config.module.loaders.unshift(reactHostLoader);

config.plugins=config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);


var newEntry = [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
];

config.entry = newEntry.concat(config.entry);


new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
    if (err) {
        return console.log(err);
    }

    console.log('Listening at http://localhost:'+port);
});
