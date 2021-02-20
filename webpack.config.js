const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin').default;
const HtmlMinimizerPlugin = require('html-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
	mode: 'development',
	//mode: 'production',
	entry: {
		app: './src/index.js',
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].[contenthash].js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 8080,
		hot: true,
	},
	plugins: [
		new HTMLInlineCSSWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html',
		}),
		new MiniCssExtractPlugin(),
		new CleanWebpackPlugin({
			cleanStaleWebpackAssets: false,
		}),
		new VueLoaderPlugin(),
		new CopyPlugin({
			patterns: [
				{ from: './src/assets/static', to: path.resolve(__dirname, 'dist') },
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.(jpe?g|png|webp)$/i,
				use: {
					loader: 'responsive-loader',
					options: {
						adapter: require('responsive-loader/sharp'),
						sizes: [320, 640, 960],
						placeholder: true,
					},
				},
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
		],
	},
	optimization: {
		minimize: false,
		//minimize: true,
		minimizer: [
			`...`,
			new HtmlMinimizerPlugin(),
		],
	},
};
