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
    
        ```
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        ```
        - width: 控制viewport的大小，device-width:设备的宽度
        - initial-scale：初始缩放比例
        - maximum-scale：允许用户缩放的最大比例
        - minimum-scale：允许用户缩放的最小比例
        - user-scalable：用户是否可以手动缩放
    - rem
2. 工作原理
    - 利用viewport和设备像素比调整基准像素
    - 利用px2rem自动转换css单位

