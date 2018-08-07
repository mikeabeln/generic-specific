const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './server/dist',
        hot: true,
        progress: false,
        historyApiFallback: true,
        stats: 'errors-only',
        useLocalIp: true,
        host: '0.0.0.0',
        port: 9000,
        disableHostCheck: true,
        proxy: {
            '/api/**': {
                quiet: true,
                noInfo: false,
                logLevel: 'debug',
                changeOrigin: false,
                stats: { color: true },
                toProxy: true,
                secure: false,
                target: 'http://0.0.0.0:5000'
            }
        }
    },
    watch: true,
    module: {
        rules: [
            {
                // bundle css+scss files to extracted css files for development
                test: /\.(css|scss)$/,
                use: ['css-hot-loader'].concat(
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: { sourceMap: true }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    plugins: [
                                    	  require('autoprefixer'),
                                        require('postcss-hexrgba')
                                    ]
                                }
                            },
                            {
                                loader: 'sass-loader',
                                options: { sourceMap: true }
                            }
                        ]
                    })
                )
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: './app.bundle.css',
            disable: false,
            allChunks: true
        })
    ]
})
