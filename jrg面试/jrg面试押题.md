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

