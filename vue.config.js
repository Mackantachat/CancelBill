const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' ? process.env.VUE_APP_PRODUCTION_PATH : process.env.VUE_APP_DEV_PATH,
  configureWebpack: {
      devtool: 'source-map'
  }
})
