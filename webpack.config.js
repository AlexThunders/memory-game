const path = require('path')

module.exports = {
  mode: 'production',
  entry: {
    main: ['/src/index.ts', '/src/multiLang.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader",],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    publicPath: './dist',
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
}