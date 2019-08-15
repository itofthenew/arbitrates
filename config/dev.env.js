'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  //物料接口地址
  HOST_MAT: '"http://10.129.222.75:5012/"'
})
