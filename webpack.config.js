const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

// Webpack Configuration
const config = {
    entry: ["./src/index.ts"],

    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: ["ts-loader"],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(mp3|wav|ogg)$/i,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "assets/audio/",
                    },
                },
            },
        ],
    },

    resolve: {
        extensions: [".ts", ".js"],
    },

    plugins: [
        new htmlWebpackPlugin({
            title: "Ceros Ski",
            template: "src/index.html",
        }),
        new CopyPlugin({
            patterns: [{ from: "img/*", to: "" }],
        }),
    ],
};

module.exports = config;
