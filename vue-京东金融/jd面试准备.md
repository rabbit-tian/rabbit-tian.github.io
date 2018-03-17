### 组件化的思维方式及项目设计
### 组件化的模块化 JS和CSS


### 构建环境
1. webpack [webpack](https://doc.webpack-china.org/)
2. npm scripts [npm scripts](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)
3. babel 

### 编辑器
1. Atom
2. ESlint

### 基础知识
1. ES6
2. Sass
3. Vue.js


### 业务开发流程
1. 技术选型
2. 业务开发
3. 测试验证
4. 发布上线

### 技术选型分析
1. 构建工具
    - 为什么使用：现在开发用 vue react 开发语言es6 css写法sass，less，这些浏览器本身是不支持的，所以要用 构建工具去转换，转换成浏览器支持的方式
        - 资源压缩：js，图片等，压缩代码体积
        - 静态资源替换：比如字体文件，图片，避免http的请求
        - 模块化处理：common js，es6的import，export，浏览器不支持，
        - 编译处理：es6浏览器不支持，借助babel编译
    - 构建工具有哪些：
        - gulp，grunt：不能做编译打包，本职工作做任务管理
            - grunt先问世
            - gulp，grunt在任务文件操作过程中的区别是：gulp是流式的，文件操作是输入输出类型；grunt操作文件必须是先读取，再写入，下个任务再重新读入，重新输出，不是流式操作，如果项目很复杂时，grunt效率相对较低
            - gulp出现是为了解决grunt频繁写入文件等弊端，他是先读取一次，之后的任何操作都在内存中完成，不会有写文件这个东西
    - webpack：编译和打包
    - 我们使用构建工具：
        - webpack，编译
        - npm scripts 任务管理
    
2. MVVM框架选择
    - vue.js
3. 模块化设计
    - js模块化设计
    - css模块化设计
4. 自适应方案设计
5. 代码维护及复用性设计的思考


