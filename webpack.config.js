const webpack = require('webpack');

module.exports = {
	entry: ['./public/src/index.js'],
	output: {
		filename: './public/build/bundle.js'
	},
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react']
				}
			}
		}, {
			test: /\.scss$/,
			use: [{
				loader: 'style-loader', // inject CSS to page
			}, {
				loader: 'css-loader', // translates CSS into CommonJS modules
			}, {
				loader: 'postcss-loader', // Run post css actions
				options: {
					plugins: function() { // post css plugins, can be exported to postcss.config.js
						return [
							require('precss'),
							require('autoprefixer')
						];
					}
				}
			}, {
				loader: 'sass-loader' // compiles SASS to CSS
			}]
		}]
	},
	plugins: [
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery',
			'window.jQuery': 'jquery',
			Popper: ['popper.js', 'default']
		})
	],
	devtool: 'source-map' // enable sourcemaps
};