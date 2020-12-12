const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
   entry: './src/app.js',
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.s[ac]ss$/i,
            use: [
               MiniCssExtractPlugin.loader,
               "css-loader",
               "sass-loader",
            ],
         },
         {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader',
            options: {outputPath: './src/img', publicPath: './src/img', useRelativePaths: true}
         },
      ],
   },
   plugins: [
      new MiniCssExtractPlugin({
         filename: "style.css",
      }),
   ],
   mode: 'development',
};