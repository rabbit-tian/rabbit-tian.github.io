### webpack的使用
1. 安装node的包管理器-前提条件
2. 创建文件，并进入文件下
3. 最好局部安装webpack npm install --save-dev webpack
4. 在文件下 npm init


### webpack 的作用
1. webpack
    - 模块打包器
    - 多个文件打包成一个文件

### commonjs
1. main.js 模块加载 foo.js 模块
    
    ```
    // 模块 foo.js
    module.exports = function (x) {
        console.log(x)
    }
    
    // 模块 main.js
    let foo = require('./foo')
    foo('hi')
    
    //browserify,将main.js转为浏览器可用的格式。
    browserify main.js > compiled.js
    ```

2. 他有自己的 一套模块加载规范，当执行文件时，会把对应的依赖加载好


