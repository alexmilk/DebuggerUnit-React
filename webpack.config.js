module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    watch: true,
    module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader!sass-loader'
			}
		],
    }
};