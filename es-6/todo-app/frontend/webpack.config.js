module.exports = {
	entry: "./sources/main.js",
	output: {
		path: "build/js",
		filename: "script.js"
	},
    externals: {
        "jquery": "jQuery"
    },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel-loader",
				query: {
					presets: ['es2015']
				}
			},
			{
				test: /\.scss/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.css/,
				loaders: ["style", "css"]
			},
            {
                test: require.resolve("jquery"),
                loader: "imports?jQuery=jquery"
            }
		]
	}
};
