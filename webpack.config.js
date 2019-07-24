const path = require('path');

module.exports = {
    devtool: 'none',
    mode: "development",
    entry: './client/index.js',
    output: {
        path: path.join(__dirname, './public/dist'),
        filename: 'react_bundle.js'
    },
    module: {
        rules: [ 
            {
           test: /\.js$/,
           use: ['cache-loader', 'babel-loader'],
           exclude: [/node_modules/] 
        },
        {
            test: /\.css$/,
            use: ['cache-loader', 'style-loader', 'css-loader'],
            exclude: [/node_modules/]
        }
    ]
    }
}
