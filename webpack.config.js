const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const webpack = require('webpack');

const mapFilenamesToEntries = pattern => glob
  .sync(pattern)
  .reduce((entries, filename) => {
    const [, name] = filename.match(/([^/]+)\.scss$/)
    return { ...entries, [name]: filename }
  }, {});

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [path.resolve(__dirname, './src/index.js')],
    ...mapFilenamesToEntries('./src/style/*.scss')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
    pathinfo: true,
    publicPath: '/'
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true,
    hot: true,
    port: 9990,
    after: (app, server) => {
      app.get('/*', function(req, res) {
        res.sendFile(path.join(__dirname, 'index.html'), function(err) {
          if (err) {
            res.status(500).send(err)
          }
        })
      })
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
      'publicPath': JSON.stringify('/'),
    }),
  ],
  module: {
    rules: [
      // css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // scss
      {
        test: /\.scss$/,
        // loaders: ['style-loader', 'css-loader', 'sass-loader'],
        resolve: {
          extensions: ['.scss', '.sass'],
        },
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // only enable hot in development
              // hmr: process.env.NODE_ENV === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          'css-loader',
          'sass-loader',
        ],
      },
      // jpg
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      // fonts
      {
        test: /\.(eot|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ],

      },
      // csv
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      // xml
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      // svg
      {
        test: /\.svg$/,
        use: ['svg-inline-loader']
      },
      // html
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        ]
      },
      // js
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/plugin-proposal-class-properties']
          }
        }
      },
      {
        test: /\.ya?ml$/,
        include: path.resolve('data'),
        loader: 'yaml',
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json',]
  },
};
