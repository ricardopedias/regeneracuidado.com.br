const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
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
                // {
                //     test: /\.html$/,
                //     loader: ['html-loader'],
                //     //options: {
                //         // preprocessor: (content, loaderContext) => {
                //         //     // console.log(content, loaderContext)

                //         //     return content
                //         // //     let result;
                
                //         // //     try {
                //         // //       result = Handlebars.compile(content)({
                //         // //         firstname: "Value",
                //         // //         lastname: "OtherValue",
                //         // //       });
                //         // //     } catch (error) {
                //         // //       loaderContext.emitError(error);
                
                //         // //       return content;
                //         // //     }
                
                //         // //     return result;
                //         // },
                //     //}
                // },
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
                {
                    test: /\.(png|jpe?g|gif|webp|svg|ttf|woff|woff2)$/i,
                    type: "asset/resource",
                    generator: {
                        filename: (name) => {
                            /**
                             * Obtém o nome do diretório original do artefato
                             * Original: 'src/images/subdir/image.jpg'
                             * Obtido:   'images/subdir'
                             */
                            let path = name.filename.split("/").slice(1, -1).join("/");

                            if (/fortawesome/.test(path) === true) {
                                path = 'fonts'
                            }

                            return `${path}/[name][ext]`;
                        },
                    },
                }
            ],
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    'src/CNAME'
                ],
            }),
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
