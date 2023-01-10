const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/modules/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};