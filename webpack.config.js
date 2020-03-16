const path = require('path')
// 导入 在内存中自动生成 index 页面的插件
const HtmlWebPackPlugin = require('html-webpack-plugin')

const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
template: path.join(__dirname, './src/index.html'),
filename: 'index.html'
})


module.exports = {
mode: 'development', // development   production
// 在 webpack 4.x 中，有一个很大的特性，就是 约定大于配置  约定，默认的打包入口路径是 src -> index.js
plugins: [
    htmlPlugin,
    new VueLoaderPlugin()
],
module: { // 这个节点，用于配置 所有 第三方模块 加载器 
    rules: [ // 所有第三方模块的 匹配规则
      { test: /\.css$/, use: ['style-loader', 'css-loader'] }, //  配置处理 .css 文件的第三方loader 规则
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, //配置处理 .less 文件的第三方 loader 规则
      { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, // 配置处理 .scss 文件的 第三方 loader 规则
      { test: /\.(png|gif|bmp|jpg)$/, use: 'url-loader?limit=43960&name=[hash:8]-[name].[ext]' },
      {test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader'},  //处理字体文件的login对象
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.vue$/, use: 'vue-loader' } // 处理 .vue 文件的 loader
    ]
},
// resolve:{ 
//   alias: { // 修改 Vue 被导入时候的包的路径
//     "vue$": "vue/dist/vue.js"
//   }
// }
}