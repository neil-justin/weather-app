const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/modules/index.js',
        helper: './src/modules/helper.js',
    },
    devtool: 'inline-source-map',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
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