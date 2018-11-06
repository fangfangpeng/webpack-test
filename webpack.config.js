const webpack = require("webpack");
const HtmlPlugin = require("html-webpack-plugin");
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/build",
		filename: "bundle-[hash].js"
	},
	devServer: {
		contentBase: "./public",
		historyApiFallback: true,
		inline: true
	},
	mode: 'development',
	plugins: [
		new webpack.BannerPlugin("版权所有，翻版必究"),
		new HtmlPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
		// new HtmlPlugin({
		// 	template: __dirname + "/public/index.html",
		// 	filename: __dirname + "/index.html"
		// })
	],
	module: {
		rules: [
			{
				test: /(\.jsx|\.js)$/,
				use: {
                    loader: "babel-loader",
                    // options: {
                    //     presets: [
                    //         "env", "react"
                    //     ]
                    // }
				},
				exclude: /node_modules/
			},
			{
				test: /\.(c|sc)ss$/,
				// loaders: ["css-loader", "style-loader"]
				use: [{
					loader: "style-loader"
				}, {
					loader: "css-loader",
					options: {
						modules: true,
						localIdentName: '[name]__[local]-[hash:base64:5]'
					}
				}, {
					loader: "postcss-loader"
				}]
			}
		]
	}
};
