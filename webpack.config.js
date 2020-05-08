module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader', // translates CSS into CommonJS
            'postcss-loader',
            'sass-loader' // compiles Sass to CSS, using Node Sass by default
          ]
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'dist/css/bundle-[contenthash].css',
        chunkFilename: 'dist/css/bundle-[contenthash].css'
      }),
    ]
  };