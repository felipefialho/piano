const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const rupture = require('rupture');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const OfflinePlugin = require('offline-plugin'); 
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';
const config = require('./app.config.json');

const webapp = {
  name: config.title, 
  short_name: config.short_name,
  description: config.description,
  background_color: config.theme_color,
  theme_color: config.theme_color,
  orientation: 'landscape',
  icons: [
    {
      src: path.resolve('./src/images/piano.png'),
      sizes: [96, 128, 192, 256, 384, 512]
    }
  ]
};

const copyFiles = [
  { from: './src/medias/', to: './medias' },
  { from: './src/images/', to: './images' },
  { from: './src/favicon.ico', to: './' },
];
 
const baseWebpack = {
  entry: {
    app: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.pug/,
        loader: 'pug-loader',
      },
      {
        test: /\.styl/,
        use: [
          'style-loader', 
          { 
            loader: 'css-loader', 
            options: { importLoaders: 1 } 
          },
          'postcss-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [rupture()],
            },
          }
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  }, 
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist']
    }),
    new HtmlWebpackPlugin({  
      hash: true, 
      template: './src/index.pug'
    }), 
    new CopyWebpackPlugin(copyFiles)
  ]
};

const sw = { 
  safeToUseOptionalCaches: true,
  caches: {
    main: ['index.html'],
    additional: ['*.js?*', 'medias/*.mp3']
  },
  navigateFallbackURL: '/',
  autoUpdate: true,
  responseStrategy: 'cache-first',
  ServiceWorker: { events: true },
  AppCache: { events: true }
};

if (PROD) {
  baseWebpack.plugins.push(new webpack.optimize.UglifyJsPlugin({})); 
  baseWebpack.plugins.push(new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }));
  baseWebpack.plugins.push(new BundleAnalyzerPlugin({analyzerMode: 'disabled'})); 
  baseWebpack.plugins.push(new WebpackPwaManifest(webapp));
  baseWebpack.plugins.push(new OfflinePlugin(sw));
}  

if (DEV) {
  baseWebpack.devServer = {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    host: '0.0.0.0', 
    disableHostCheck: true
  }; 
}  

module.exports = (env) => {
  return baseWebpack;
};
 