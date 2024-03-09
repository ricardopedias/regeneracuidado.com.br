const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
    let environment = env.production === true
        ? 'production'
        : 'development'

    return {
        mode: environment,
        entry: {
            app: ['./src/app.js', './src/app.scss']
        },
        devtool: environment === 'production' ? 'hidden-source-map' : 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            // publicPath: "",
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader, // fallback to "style-loader" in development
                        { loader: "css-loader", options: { sourceMap: true } },
                        {
                            loader: "sass-loader",
                            options: {
                              implementation: require("dart-sass")
                            },
                          },
                    ],
                },
                // { test: /\.png$/, type: "asset/resource" },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
            new HtmlWebpackPlugin({
                title: "Regenera Cuidado",
                template: "src/page-home.html",
                filename: 'index.html'
            }),
            new HtmlWebpackPlugin({
                title: "Regenera Cuidado",
                template: "src/page-faleconosco.html",
                filename: 'faleconosco.html'
            }),
        ],
    }
};
