### CSS模块化设计
1. 设计原则：
    - 可复用、能继承、完整
    - 周期性迭代
2. 设计方法
    - 先整体、后部分，再颗粒化( 拆模块化，从大到小 )
    - 先抽象、再具体
 
 3. css模块化设计
    - reset.scss:重置样式，浏览器不一样，默认标签有默认样式，为了保持一致 
    - layout.scss：布局的东西
    - element.scss: 功能的东西，如按钮，列表
    - global方式：

        ```
        <style lang="scss">
            @import "./element.scss"
        </style>
        ```
    - scope方式：
    
         ```
        <style lang="scss" module>
            @import "./element.scss"
        </style>
        ```
### JS组件设计
1. 设计原则
    - 高内聚低耦合：
        - 高内聚：一个组件不要依赖其他组件，详细的交互要封装在组件本身，不要被其他组件所控制，这样才能达到最高效的复用
        - 低耦合：把多个类似的列表组件，抽象成js列表组件，但是这个抽象的js组件不包括任何功能，而且列表组件之间复用一个抽象的列表组件，但是他们之间没有任何耦合关系的

    - 周期性迭代

2. 设计方法
    - 先整体后部分再颗粒化
    - 尽可能的抽象，抽象成让任何东西都能用
    
### 自适应
1. 基本概念
    - CSS像素，设备像素，逻辑像素，设备像素比
        [css像素比查看](https://github.com/jawil/blog/issues/21)
        - px: CSS像素,逻辑像素 1
        - 手机物理像素点：设备像素 2
        - 设备像素比 = 1/2   CSS像素/设备像素
    - viewport
        - layout viewport: 页面窗口
        - visual viewport:手机窗口裁剪的
        - idue viewport:手机组成的宽高
    
        ```
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        ```
        - width: 控制viewport的大小，device-width:设备的宽度，让页面大小layout viewport等于手机的大小idue viewport
        - initial-scale：初始缩放比例
        - maximum-scale：允许用户缩放的最大比例
        - minimum-scale：允许用户缩放的最小比例
        - user-scalable：用户是否可以手动缩放
    - rem
        - em: 相对于父级元素
        - rem: 相对于html标签 
2. 工作原理
    - 利用viewport和设备像素比调整基准像素
    - 利用px2rem自动转换css单位
    - 举例： 一个320的设备适应375的设备
        - 算出各自物理像素 320*2 =640  375*3 = 1125
        - 比如20*20的按钮适应，20*（1125/640）

### SPA设计：单页面设计
1. 设计意义
    - 前后端分离：不用耦合，提高效率
    - 减轻服务器压力：减少请求次数
    - 增强用户体验：
    - 缺点：SEO(搜索引擎最佳化)方面的弱势
        - Prerender预渲染优化SEO
2. 工作原理
    - History API：优雅，对浏览器有要求
        - 1.执行打开动作：从入口打开页面，通过js控制，而不是发送请求
        - 2.历史操作单 History：浏览器点击前进，后退等 怎么回到某个入口对应的页面上去
        - 桥梁：history
        
    - Hash：不优雅，兼容性好
        - 桥梁：hash
    
### 构建工具
1. webpack
2. babel
3. dev-server


### 上线指导

