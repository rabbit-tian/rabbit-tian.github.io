### 谈谈你对盒模型的认识
1. 基本概念：标准模型 + IE模型
    - 标准盒模型
        ![标准盒模型](media/%E6%A0%87%E5%87%86%E7%9B%92%E6%A8%A1%E5%9E%8B.png)

    - IE盒模型
        ![IE盒模型](media/IE%E7%9B%92%E6%A8%A1%E5%9E%8B.png)


2. 标准模型和IE模型的区别
    - 标准盒模型的宽高，就是content的宽高，box-sizing的值，content-box：标准盒模型
    - IE盒模型的宽高，计算是包含padding与border的宽高在内的，box-sizing的值，border-box：IE盒模型。

3. css如何设置这两种模型
    - 标准盒模型: box-sizing: content-box (浏览器默认的盒模型)
    - IE盒模型: box-sizing: border-box

4. js如何设置获取盒模型对应的宽和高
    - let el = document.getElementById('id')
    - el.style.width/height: 只限获取内联样式的宽高
    - el.currentStyle.width/height: 获取渲染后的宽高，这个方法准确，但是只支持IE
    - window.getComputedStyle(el).width/height: 支持IE和chrome，兼容性好一些
    - el.getBoundingClientRect().width/height:可以及时拿到元素的宽高，计算一个元素的绝对位置并且同时拿到top、left、width、height四个值。

5. 实例题：根据盒模型解释边距重叠问题


6. BFC（边距重叠问题解决方案）
    - BFC: 块级格式化上下文
    - BFC原理
        - 在BFC这个元素的垂直方向的边距会发生重叠。
        - BFC的区域不会与浮动元素的BOX重叠。
        - BFC是一个独立的容器，外面的元素不会影响里面的元素。
        - 计算BFC高度的时候浮动元素也会参与计算。
    - 如何创建BFC
        - float： 不为none
        - position：不为 relative或static
        - overflow：hide / auto
        - display: inline-block,table,table-cell
7. BFC的使用场景
    - 左侧固定宽高，右侧高度自适应，此时右侧BFC，防止内容溢出到左侧下方
    - 清除浮动
