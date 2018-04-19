1. 当设置display: none;里面的img图片资源会被加载吗？

    ```
    <div style="display:none">
        <img src="1.jpg">
        <div style="display:none">
            <img src="2.jpg">
        </div>
    </div>
    ```
    - 都会被加载，img标签会异步加载数据，跟其他节点没有关系

2. 下面两组代码的区别
    
    ```
    代码一：<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    
   代码二： <meta name="viewport" content="width=100%,initial-scale=1,maximum-scale=1">
    ```
    - 代码一：就是渲染的设备的尺寸
    - 代码二：渲染的内容去尺寸，不包括侧边栏

3. 描述页面css，js等并行加载与顺序执行
    - js 加载时同步的，碰到script标签，会停止其他加载，加载完毕后，再进行下一步操作
    - script加上defer会并行加载
    - 不同浏览器并行加载的资源数不一样，一般在2-8个之间

4. 三个并排div，实现三个div高度自适应

5. 高分屏下实现1px细线
    - 高分屏：在同样大小的屏幕面积上显示更多的像素点,也就是更多的可视信息
    - ![高屏1px](media/%E9%AB%98%E5%B1%8F1px.jpeg)


6. 描述 ::before的content属性
    - ::before必须添加content属性，否则伪元素不生效
    - 属于“ 引用符号 ”的取值有四种 open-quote、close-quote、no-open-quote、no-close-quote
    - open-quote、close-quote 默认为双引号

7. javascript 中的 delete 删除的对象，如果是一个引用类型，那他删除的是引用对象的指针，他对基本类型不起作用

8. flex 属性
    - 兼容性：加前缀
    - display: flex; 
        - flex-direction  属性决定主轴的方向（即项目的排列方向）
        - flex-wrap   如果一条轴线排不下，如何换行
        - flex-flow  flex-direction和flex-wrap的简写形式，默认值为row nowrap
        - justify-content  定义了项目在主轴上的对齐方式。
        - align-items   定义项目在交叉轴上如何对齐
        - align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用


