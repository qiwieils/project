const { transform } = require('lodash');

module.exports = {
  presets :[
    '@babel/preset-env'
  ],
  Plugins : [
    '@babel/Plugin-transform-runtime'
  ]
}