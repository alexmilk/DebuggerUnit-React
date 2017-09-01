module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname,
        filename: "build.js"
    },
    watch: true,
    module: {
        loaders: [{
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.jsx?$/, // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react']
                }
            }, 
            {
                test: /\.js$/, // include .js files
                enforce: "pre", // preload the jshint loader
                exclude: /node_modules/, // exclude any and all files in the node_modules folder
                use: [{
                    loader: "jshint-loader"
                }]
            }
        ],
    }
};