const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-2023/lessons/lesson_5/raspberry/' : '/',
  publicPath: '/'
})
