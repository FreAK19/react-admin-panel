/*  eslint-disable  */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const AssetsPlugin = require('assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	output: {
		filename: 'js/[name].[hash:6].js',
		chunkFilename: '[name].[chunkhash:6].js',
		publicPath: ""
	},
	stats: {
		chunks: false,
		reasons: true,
		colors: true,
		timings: true
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				exclude: /node_modules/,
				include: /src/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: false,
								minimize: true
							}
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: [
									require('postcss-flexbugs-fixes'),
									require('autoprefixer')
								]
							}
						}
					],
					publicPath: '../'
				})
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				include: /src/,
				use: ExtractTextPlugin.extract({
					use: [
						{
							loader: 'css-loader',
							options: {
								sourceMap: false,
								minimize: true
							}
						},
						{
							loader: "postcss-loader",
							options: {
								plugins: [
									require('autoprefixer')
								]
							}
						},
						'less-loader',
					],
					fallback: 'style-loader',
					publicPath: '../'
				})
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new CleanWebpackPlugin(['build']),
		new AssetsPlugin({
			path: path.resolve(__dirname, '../build'),
			filename: 'assets.json',
			prettyPrint: true
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor'
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: './index.html',
			hash: true,
			favicon: './src/favicon.ico',
			pretty: true
		}),
		new ExtractTextPlugin({
			filename: './css/[name].[hash:6].css',
			allChunks: true
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				unused: true,
				dead_code: true,
				screw_ie8: true
			},
			mangle: {
				screw_ie8: true
			},
			output: {
				comments: false,
				screw_ie8: true
			},
			sourceMap: true
		}),
		new BundleAnalyzerPlugin()
	]
};
