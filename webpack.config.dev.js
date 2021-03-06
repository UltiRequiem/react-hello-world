const path = require('node:path')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

/** @param {string} dir */
const fm = (dir) => path.join(__dirname, dir)

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: './src/index.js',
  output: {
    path: fm('dist'),
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@components': fm('src/components/'),
      '@styles': fm('src/styles/'),
      '@pages': fm('src/pages/')
    }
  },
  mode: 'development',
  devServer: {
    static: {
      directory: fm('dist')
    },
    compress: false,
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}
