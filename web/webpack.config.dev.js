const path = require('path')
const webpack = require('webpack')

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'static')
    },
    entry: [path.join(__dirname, '../index.web.js')],
    plugins: [new webpack.NoErrorsPlugin()],
    output: {
        path: path.join(__dirname, '../web/static/build'),
        publicPath: '/build/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: 'json-loader'
            }, {
                test: /\.js$/,
                // exclude node_modules except ES6 modules:   #TODO: use include for whitelist.
                exclude: /node_modules\/(?!(react-native-|apsl-react-native)).*/,
                include: [
                    path.resolve(__dirname, '../src'),
                    path.resolve(__dirname, '../')
                ],
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                    babelrc: false, // ignore .babelrc because we can't use both "module-resolver" & webpack resolve
                    presets: ['react-native'],
                    plugins: ['transform-decorators-legacy']
                }
            }, {
                test: /\.(gif|jpe?g|png|svg)$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[hash:16].[ext]'
                }
            }, {
                test: /\.ttf$/,
                loader: 'url-loader', // or directly file-loader
                include: path.resolve(__dirname, '../node_modules/react-native-vector-icons')
            }
        ]
    },
    resolve: {
        alias: {
            'react-native': 'react-native-web',
            'utils/init': path.join(__dirname, '../src/utils/init.web.js')
        },
        extensions: ['*', '.js']
    }
}