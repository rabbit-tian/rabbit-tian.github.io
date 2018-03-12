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


