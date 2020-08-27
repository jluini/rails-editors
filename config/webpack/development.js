process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

module.exports = environment.toWebpackConfig()


module.exports.resolve.alias = {
  'vue$': 'vue/dist/vue.esm.js'
};
