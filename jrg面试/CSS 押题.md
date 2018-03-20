### CSS押题
1. 浏览器内核
    - IE浏览器内核、百度浏览器：Trident内核，也是俗称的IE内核；
    - Chrome浏览器内核: Chrome内核,以前是Webkit内核，现在是Blink内核；
    - Firefox浏览器内核: Gecko内核，俗称Firefox内核；
    - Safari浏览器内核：Webkit内核；
    - Opera浏览器内核: 最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核；
    - 360浏览器、猎豹浏览器内核：IE+Chrome双内核；
    - 搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；

2. 说一下盒模型 box-sizing
    - content-box(标准): 宽高是内容区宽高
    - border-box(IE): 宽高包括 padding值和border值 (兼容IE时不适用)
    - 解释一下弹性盒模型flexbox，以及使用场景
        - 该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
        - 试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。

3. js如何设置获取盒模型对应的宽和高
    - let el = document.getElementById('id')
    - el.style.width/height: 只限获取内联样式的宽高
    - el.currentStyle.width/height: 获取渲染后的宽高，这个方法准确，但是只支持IE
    - window.getComputedStyle(el).width/height: 支持IE和chrome，兼容性好一些
    - el.getBoundingClientRect().width/height:可以及时拿到元素的宽高，计算一个元素的绝对位置并且同时拿到top、left、width、height四个值。

4. css reset 和 normalize.css 有什么区别？
    - css reset：样式重置，抛弃默认样式，因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
    - normalize.css：让所有浏览器的标签都和标准规定的默认样式一致
    
5. (必考)如何居中
    - 水平居中
        - 内联：爸爸身上 写 text-align:center
        - 块级：margin-left:auto;margin-right:auto;

    - [水平垂直居中](https://jscode.me/t/topic/1936)
        - table 自带的功能
        - 子级相对于父级定位+margin负值
        - 子级相对于父级定位+transform: translate(-50%,-50%);
        - 子级相对于父级定位，上下左右设为0，然后 margin: auto;
        - flex布局， 父级设置display: flex;justify-content: center;align-items: center;
    

6. BFC是什么？
   - BFC规定了内部的Block Box如何布局。
   - 定位方案：
        - 在BFC这个元素的垂直方向的边距会发生重叠。
        - BFC的区域不会与浮动元素的BOX重叠。
        - BFC是一个独立的容器，外面的元素不会影响里面的元素。
        - 计算BFC高度的时候浮动元素也会参与计算。
        
    - 满足下列条件之一就可触发BFC
        - float： 不为none
        - position：不为 relative或static
        - overflow：hide / auto
        - display: inline-block,table,table-cell
    - BFC的使用场景
        - 左侧固定宽高，右侧高度自适应，此时右侧BFC，防止内容溢出到左侧下方
        - 清除浮动

7. 如何清除浮动
    - 父级加 Height ：只适合固定高度
    - 结尾处加空div标签 clear{clear:both;}
        - 原理：添加一个空div，利用css提高的clear:both清除浮动，让父级div能自动获取到高度 
    - overflow:hidden;浏览器会自动检查浮动区域的高度 ， (不好) 超出部分被影藏，后遗症多
    - .clearfix  完美

        ```
        .clearfix::after{
            content: "";
            display: block;
            clear: both;
            zoom: a;  // 兼容IE 加
        }
        ```
8. 上下margin重合的问题     
   - 父子级，margin冲出去: 父级加 overflow: hidden；或者父级 设置padding-top: 0.1px，形成障碍
   - 兄弟级，给每个元素套个父级，父级加 overflow: hidden；或者父级 设置padding-top: 0.1px，形成障碍
        
9. position：的值
    - absoulte: 基于有定位属性的父元素定位
    - relative: 基于自己本身定位
    - fixed: 基于可是窗口定位
    
10. display有哪些值？说明他们的作用?
    - inline（默认）–内联
    - none–隐藏
    - block–块显示
    - table–表格显示
    - list-item–项目列表
    - inline-block  
    
11. 如何隐藏一个元素（不少于7中）
    - dispaly: none;  不显示对应的元素，在文档布局中不再分配空间（回流+重绘)
    - visibility: hidden;  隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
    - opacity: 0; 隐藏对应元素，在文档布局中仍保留原来的空间，响应用户交互
    - position:position: absolute;top: -9999px; left: -9999px; 将元素移出可视区域
    - 设置height，width等盒模型属性为0,如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素
    - Clip-path： 剪裁，clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);

12. 将footer固定在底部的方法
    - footer高度固定+绝对定位
    - footer高度固定+margin负值
    - 使用calc()设置内容高度 ，min-height: calc(100vh - 70px);
    - 使用flexbox弹性盒布局
        
        ```
        <div class="content">
          <!-- content -->
        </div>
        <div class="footer">footer</div>
        
        html {
          height: 100%;
        }
        body {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        .content {
          flex: 1;
        }
        ```
    
    - 使用Grid网格布局
        
        ```
        <div class="content">
          <!-- content -->
        </div>
        <div class="footer">footer</div>
        
        html {
          height: 100%;
        }
        body {
          min-height: 100%;
          display: grid;
          grid-template-rows: 1fr auto;
        }
        .footer {
          grid-row-start: 2;
          grid-row-end: 3;
        }
        ```

13. css预处理器(less,sass)，sass中常用的有哪些
    - 使用变量，所有变量以$开头。$elColor: #333; color: $elColor;
    - 选择器嵌套
    - &的嵌套 a:hover伪类 a{ &:hover {} }
    - @extend 继承 
        
        ```
        .div3 {
            margin: 2px;
        }
        /* .div4继承.div3 */
        .div4 {  
            @extend .div3;
            font-size: 10px;
        }
        
        ```
        
    - @mixin命令 ，定义一个代码块，后续可以通过@include复用

        ```
        @mixin p1 {
            float: left;
        }
        div {
        /*使用@include命令，调用这个mixin。*/
            @include p1; 
            top: 10px;
        }
        
        ```
    - 导入文件: @import命令，用来插入外部文件。

14. css优化，提高性能的方法
    - 避免过度约束
    - 避免后代选择符
    - 避免链式选择符    
    - 使用紧凑的语法    
    - 避免不必要的命名空间    
    - 避免不必要的重复    
    - 最好使用表示语义的名字。一个好的类名应该是描述他是什么而不是像什么    
    - 避免！important，可以选择其他选择器    
    - 尽可能的精简规则，你可以合并不同类里的重复规则
    - 利用CSS Sprites能很好地减少网页的http请求，从而大大的提高页面的性能；CSS Sprites能减少图片的字节。
    
15. 浏览器是如何解析css选择器的
    - CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
    - 而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

16. css选择器优先级如何确定
    - 选择器越具体，优先级越高， #div > .div
    - 同样优先级，写在后面的覆盖前面的
    - color: red !importanr; 优先级最高
    
17. CSS选择器有哪些？哪些属性可以继承？
    - CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、属性选择器（a[rel=”external”]）、伪类选择器（a:hover, li:nth-child）
    - 可继承的属性：font-size, font-family, color
    - 不可继承的样式：border, padding, margin, width, height
    - 优先级（就近原则）：!important > [ id > class > tag ]
    - !important 比内联优先级高
    
18. CSS3新增伪类有那些?
    - p:first-of-type 选择属于其父元素的首个元素
    - p:last-of-type 选择属于其父元素的最后元素
    - p:only-of-type 选择属于其父元素唯一的元素
    - p:only-child 选择属于其父元素的唯一子元素
    - p:nth-child(2) 选择属于其父元素的第二个子元素
    - :enabled :disabled 表单控件的禁用状态。
    - :checked 单选框或复选框被选中。
    
19. CSS3有哪些新特性？
    - RGBA和透明度
    - background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
    - word-wrap（对长的不可分割单词换行）word-wrap：break-word
    - 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
    - font-face属性：定义自己的字体
    - 圆角（边框半径）：border-radius 属性用于创建圆角
    - 边框图片：border-image: url(border.png) 30 30 round
    - 盒阴影：box-shadow: 10px 10px 5px #888888
    - 媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性   
  
20. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
    - 使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。  
    
21. 元素竖向的百分比设定是相对于容器的高度吗？
    - 当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性,当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

22. 页面布局
    - 两栏布局
    - 三栏布局




