module.exports = {
    plugins: [
      	require('autoprefixer'),
        require('postcss-hexrgba'),
      	require('cssnano')({
            preset: 'default'
        })
    ]
}
