const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const mode = (process || process.env.npm_lifecycle_script.match(/(?<=--mode\s+).+/) || ['production'])[0];

module.exports = {
  mode,
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Courses',
      inject: true,
      favicon: './src/favicon.png',
      template: './src/index.ejs'
    }),
    new ManifestPlugin({
      fileName: 'asset-manifest.json'
    }),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(eot|otf|svg|ttf|woff|png)$/,
        use: {
          loader: 'file-loader',
          options: { name: 'assets/[name][hash].[ext]' }
        }
      }
    ]
  },
  devtool: mode === 'production' ? false : 'cheap-module-source-map',
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  devServer: {
    contentBase: false,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 1000
  }
};
