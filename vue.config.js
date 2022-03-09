module.exports = {
  publicPath: '/vue3/',
  chainWebpack: config => config.resolve.symlinks(false)
};