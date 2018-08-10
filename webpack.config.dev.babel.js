import path from 'path';
import webpack from 'webpack';
import config from './webpack.config.babel';

const libraryName = 'o18n';

export default {
  ...config,
  mode: 'development',
  entry: {
    [libraryName]: `${__dirname}/src/index.js`,
    demo: `${__dirname}/example/demo.js`
  },
  devtool: 'eval-source-map',
  output: {
    path: `${__dirname}/lib`,
    filename: '[name].js',
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  devServer: {
    contentBase: path.join(__dirname, 'example'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
