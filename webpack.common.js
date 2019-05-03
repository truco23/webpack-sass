const path                  = require('path');

let entry = {
    index: ['babel-polyfill', path.resolve(__dirname, 'src/main/index.js')],
    adminLogin: [path.resolve(__dirname, 'src/main/admin-login.js')]
};
let optimization = {
    moduleIds: 'hashed',
    splitChunks: {
        chunks: 'initial',
        maxSize: 200000,
    }
};
let rules = [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        } 
    },
];

module.exports = {
    entry,
    optimization,
    module: { rules },
}