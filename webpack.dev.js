const common    = require('./webpack.common');
const merge     = require('webpack-merge');
const path      = require('path');
const htmlPlugin= require('html-webpack-plugin');
const webpack   = require('webpack');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

let plugins = [];
let base_url = JSON.stringify('endereco-api-local');
let output = {
    path: path.resolve(__dirname, 'build/dev'),
    filename: '[name].[chunkhash].bundle.js',
};
let devServer = {
    contentBase: path.resolve(__dirname, 'build/dev'),
};
let rules = [
    {
        test: /\.scss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.resolve(__dirname, 'build/dev')
              },
            },
            'css-loader'
          ],
    }
];

plugins.push(new webpack.DefinePlugin({ base_url }));
plugins.push(new htmlPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    hash: true,
    html5: true,
}));
plugins.push(new htmlPlugin({
    template: path.resolve(__dirname, 'src/admin-login.html'),
    filename: 'admin-login.html',
    hash: true,
    html5: true,
}));
plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
}));

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    output,
    devServer,
    module: { rules },
    plugins,
 });