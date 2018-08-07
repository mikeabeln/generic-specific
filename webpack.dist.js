const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = merge(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: [
                                require('autoprefixer'),
                                require('postcss-hexrgba'),
                                require('cssnano')({
                                    preset: 'default'
                                })
                            ]
                        }
                    },
                    'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.bundle.[contenthash].css'
        })
    ]
})
