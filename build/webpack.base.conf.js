'use strict'

const path = require('path')
const fs = require('fs-extra');
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


const getEntryFileContent = (routerPath, moduleName) => {
  let dependence = `import Vue from 'vue';\n`;
  dependence += `import ElementUI from 'element-ui';\n`;
  dependence += `import store from '@/vuex/store.js';\n`;
  dependence += `import VueClipboards from 'vue-clipboards';\n`;
  // dependence += `import 'element-ui/src/index.js';\n`;
  dependence += `import 'element-ui/lib/theme-chalk/index.css';\n`;
  dependence += `import '@/styles/index.scss';\n`;
  // dependence += `import router from '@/router'\n`;
  dependence += `import ${moduleName} from '${routerPath}';\n`;
  dependence += `Vue.use(ElementUI, {size: 'medium'});\n`;
  dependence += `Vue.use(VueClipboards);\n`;
  dependence += `console.log('233')\n`;
  dependence += `Vue.config.productionTip = false;\n`;
  dependence += `new Vue({el: '#app',store, components: { ${moduleName} }, template: '<${moduleName}/>'});`;
  return dependence;
};
const glob = require('glob')
// const ttt = glob.sync('./src/page/**/*.vue')
// console.log(ttt);

// return
function getEntries (){
  
  const entries = glob.sync('./src/page/**/*.vue').reduce((result, entry) => {
    const moduleName = path.basename(path.dirname(entry)); // 获取模块名称
    // console.log(entry);
    const newPath = entry.replace('./src', '@');
    console.log(newPath);
    fs.outputFileSync('./dist/main/' + moduleName + '.js', getEntryFileContent(newPath, moduleName));

    console.log(moduleName);
    result[moduleName] = './dist/main/' + moduleName + '.js';
    return result
  }, {})
  return entries
}
const entries = getEntries()
// const entries = getEntries('./src/page/**/*.vue')

var DEV_HOST = JSON.stringify('http://127.0.0.1:5002/')
var PUB_HOST = JSON.stringify('http://10.129.222.75:5006/')
// var PUB_HOST = JSON.stringify('http://ahart.yto.net.cn:30003/')

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: entries,//改动部分
  /*entry: {
    app:'./src/main.js'
  },*/
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  plugins: [
    new webpack.DefinePlugin({
      HOST: process.env.NODE_ENV === 'production' ? PUB_HOST : DEV_HOST
    })
  ]
}
