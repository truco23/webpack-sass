const common    = require('./webpack.common');
const merge     = require('webpack-merge');
const babili    = require('babili-webpack-plugin');
const webpack   = require('webpack');
const path      = require('path');
const htmlPlugin= require('html-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let plugins = [];
let base_url = JSON.stringify('endereco-remoto-da-api');
let output = {
    path: path.resolve(__dirname, 'build/prod'),
    filename: '[name].[chunkhash].bundle.js',
};
let optimization = {
    minimizer: [new OptimizeCSSAssetsPlugin({})]
};
let devServer = {
    contentBase: path.resolve(__dirname, 'build/prod')
};
let rules = [
    {
        test: /\.scss$/,
        use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.resolve(__dirname, 'build/prod'),
              },
            },
            'css-loader',
        ],
    },
    {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    
];
let minify = {
    html5: true,
    collapseWhitespace: true,
    removeComments: true,
};

plugins.push(new webpack.DefinePlugin({ base_url }));
plugins.push(new webpack.optimize.ModuleConcatenationPlugin());
plugins.push(new babili());
plugins.push(new htmlPlugin({
    template: path.resolve(__dirname, 'src/index.html'),
    filename: 'index.html',
    hash: true,
    minify
}));
plugins.push(new htmlPlugin({
    template: path.resolve(__dirname, 'src/admin-login.html'),
    filename: 'admin-login.html',
    hash: true,
    minify
}));
plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css'
}));

module.exports = merge(common, {
    mode: 'production',
    output,
    devServer,
    optimization,
    module: { rules },
    plugins,
});