const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env) => {
    let environment = env.production === true
        ? 'production'
        : 'development'

    return {
        mode: environment,
        entry: {
            app: ['./src/app.js', './src/app.scss']
        },
        devtool: 'inline-source-map',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            clean: true,
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                    // fallback to style-loader in development
                    environment !== 'production'
                        ? 'style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    ],
                },
            ],
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css',
            }),
        ],
    }
};

// module.exports = {
//     mode: "development",
//     entry: [
//         path.resolve(__dirname, './src/app.js'),
//         path.resolve(__dirname, './src/app.scss')
//     ],
//     devtool: "eval-source-map",
//     module: {
//         rules: [
//             {
//                 test: /\.js$/,
//                 exclude: /node_modules/,
//                 use: ['babel-loader']
//             },
//             {
//                 test: /\.scss$/,
//                 exclude: /node_modules/,
//                 generator: {
//                     path: path.resolve(__dirname, './dist'),
//                     filename: "bundle.css",
//                 },
//                 use: ["style-loader", "css-loader", "sass-loader"]
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//     output: {
//         path: path.resolve(__dirname, './dist'),
//         filename: 'bundle.js',
//     },
//     devServer: {
//         contentBase: path.resolve(__dirname, './dist'),
//         hot: true
//     },
// };
