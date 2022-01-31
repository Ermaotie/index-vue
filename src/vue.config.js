const path = require('path')

module.exports = {
    publicPath: './',
    outputDir: "./dist", // 输出文件目录
    lintOnSave: false, // eslint 是否在保存时检查
    assetsDir: './static', // 配置js、css静态资源二级目录的位置
    indexPath: './index.html',
    chainWebpack: config =>{
        config.plugin('html').tap(args => {
            args[0].title = 'Drink a Bottle of Milk';
            return args;
        })
    },
}
