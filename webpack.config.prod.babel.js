import config from './webpack.config.babel';

const libraryName = 'o18n';
const outputFile = `${libraryName}.js`;

export default {
  ...config,
  mode: 'production',
  entry: `${__dirname}/src/index.js`,
  devtool: 'cheap-module-source-map',
  output: {
    path: `${__dirname}/dist`,
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  }
};
