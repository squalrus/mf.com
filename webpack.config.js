const path = require('path');

module.exports = {
    module: {
        rules: [
            { test: /\.html$/, use: 'html-loader' }
        ]
    },
    mode: 'development',
    entry: './src/index.html',
    output: {
        filename: 'index.html',
        path: path.resolve(__dirname, 'dist')
    }
};
