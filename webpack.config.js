const path = require('path'),
  webpack = require('webpack'),
  browserConfig = {
    target: 'web',
    mode: 'development',
    entry: ['./src/browser/index.js'],
    output: {
      path: path.resolve(__dirname, 'assets'),
      filename: 'bundle.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          use: 'babel-loader',
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "true"
      })
    ]
  },
  serverConfig = {
    target: 'node',
    mode: 'development',
    entry: ['@babel/polyfill','./src/server/index.js'],
    output: {
      path: __dirname,
      filename: 'server.js',
      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.(js)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
              plugins: [require('@babel/plugin-proposal-object-rest-spread')]
            }
          },
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin({
        __isBrowser__: "false"
      })
    ]
  }

module.exports = [browserConfig, serverConfig]
