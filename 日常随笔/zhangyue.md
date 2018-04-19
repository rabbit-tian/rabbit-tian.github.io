1. 当设置display: none;里面的img图片资源会被加载吗？

    ```
    <div style="display:none">
        <img src="1.jpg">
        <div style="display:none">
            <img src="2.jpg">
        </div>
    </div>
    ```
    - 都会被加载

2. 下面两组代码的区别
    
    ```
    代码一：<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1">
    
   代码二： <meta name="viewport" content="width=100%,initial-scale=1,maximum-scale=1">
    ```
    - 代码一：就是渲染的设备的尺寸
    - 代码二：渲染的内容去尺寸，不包括侧边栏

3. 


