### HTML押题
1. (必考)你是如何理解HTML语义化的？
    - 比如 用p标签表示段落，用aside标签表示边栏，用main标签表示页面的主要内容
    - 其实，最初是PHP后端来写HTML的，他们不会css，只好用table标签来写，但是我们都知道table标签是用来展示表格的，这严重违反了HTML的语义化，后来有了专门写css的，他们使用DIV+CSS，Float浮动+定位布局，就稍微符合了HTML的语义化，再后来，前端专业化，我们知道了HTML标签的各种含义，于是就用恰当的标签来展示内容，而不是都用div来布局，会尽量使用h1，p,ul,main,header等标签

2. meta viewport 是做什么用的，怎么写？
    - `<meta name="viewport" content="width=device-width,user-scalable=no,iniyial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">`
    - 设备宽度，用户不能放大缩小，控制页面在移动端不要缩放显示
3. canvas 元素是干什么的？
    - MDN 的canvas


### CSS押题
1. 说一下盒模型 box-sizing
    - content-box(标准): 宽高是内容区宽高
    - border-box(IE): 宽高包括 padding值和border值 (兼容IE时不适用)
2. css reset 和 normalize.css 有什么区别？
    - css reset：样式重置，抛弃默认样式
    - normalize.css：让所有浏览器的标签都和标准规定的默认样式一致
3. (必考)如何居中
    - 水平居中
        - 内联：爸爸身上 写 text-align:center
        - 块级：margin-left:auto;margin-right:auto;

    - [垂直居中](https://jscode.me/t/topic/1936)

4. 选择器优先级如何确定
    - 选择器越具体，优先级越高， #div > .div
    - 同样优先级，写在后面的覆盖前面的
    - color: red !importanr; 优先级最高

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
        
        
### JS押题

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
2. 移动端的触摸事件了解吗？
    - touchstart touchmove touchend touchcancel
    - 模拟swipe事件: 记录两次touchmove的位置差，如果最后一次在前一次的右边，说明向右滑了

3. 事件委托是什么，有什么好处？ [事件委托](https://github.com/FrankFang/wheels/blob/master/lib/dom/index.js)
    - 假设父元素有4个儿子，我不监听4个儿子，而是监听父元素，看触发的事件元素是哪个儿子，触发后，事件冒泡到监听元素上，然后监听元素捕捉到事件，然后处理
    - 好处：可以监听动态生成的元素，省监听器
    
    
    
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
    

