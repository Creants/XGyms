const webpack = require('webpack')
const devConfig = require('./webpack.config.dev')

const prodConfig = {
  target: 'web',
  cache: false,
  debug: false,
  devtool: 'source-map'
}
Object.assign(prodConfig, devConfig)

prodConfig.plugins = [
  // #FIXME: setting NODE_ENV to production will cause JS error:
  // style is undefined in react-native-tab-navigator/Tab.js: titleStyle: Text.propTypes.style
  // new webpack.DefinePlugin({
  //   'process.env': {
  //     NODE_ENV: JSON.stringify('production')
  //   }
  // }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurrenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
]

module.exports = prodConfig