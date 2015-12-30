var webpack = require('webpack');

module.exports = {
  context: __dirname,
	entry: './src/main.js',
	output: {
		path: './dist/',
		filename: 'index.js'
	},
	devServer: {
		inline: true,
		port: 3333,
		contentBase: './src'
	},
    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx']
        
    },
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react'],
					plugins: ['transform-object-rest-spread', 'transform-function-bind']
				}
			}
		]
	},
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
};