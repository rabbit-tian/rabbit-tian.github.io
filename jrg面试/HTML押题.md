### HTTP押题

1. (必考)你是如何理解HTML语义化和可读性的？
    - 合适的标签干合适的事，各尽其职，比如头部用header，主体用main标签，底部用footer标签
    - 可读性：就是在开发时，当我们面临语境模棱两可时，可以加一些注释来管理我们的代码

2. meta viewport 是做什么用的，怎么写？
    - `<meta name="viewport" content="width=device-width,user-scalable=no,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0">`
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
    
14. 渲染机制

    1. 浏览器渲染过程
        1. HTML按照HTML规则和解释器转成 DOM Tree
            - DOM Tree：二叉树结构
        2. Css按照Css规则和解释器转成 CSSOM tree(样式结构体)
            - CSSOM tree: 按照树形结构一个个增加样式
        3. DOM Tree 和 CCSSOMSS Tree 一整和形成 Render Tree
            - Render Tree不包含隐藏的节点,(比如display:none的节点，还有head节点)注意 visibility:hidden隐藏的元素还是会包含到render tree中,visibility:hidden 会影响布局(layout)，会占有空间
        4. Render Tree 经过 Layout 计算DOM的具体位置和样式
            - 当render tree中的一部分(或全部)因为元素的规模尺寸，布局，隐藏等改变而需要重新构建。这就称为回流(reflow)
            - 完成回流后，浏览器会重新绘制受影响的部分到屏幕中，该过程成为重绘。
            - 当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。
            - 回流必将引起重绘，而重绘不一定会引起回流
        5. Painting 进行 画图，呈现内容
        6. Display 在浏览器上看到页面效果
    2. 回流/重排 Reflow
        1. DOM结构中各个元素都有自己的盒子（模型），这些都需要浏览器根据各种样式来计算，并根据计算结果将元素放到它该放的位置上，这个过程称为reflow
        2. 何时触发重排
            - 当修改，删除，增加DOM节点的时候，会发生reflow和repaint
            - 当改变css样式（比如宽高等）
            - 当resize窗口或者滚动页面时
            - 当改变网页默认字体时
    3. 重绘Repaint
        1. 当各种盒子的大小，位置以及各种属性都确认后，浏览器便会根据这些盒子的特性重新绘制一遍，于是内容出现了，这个过程称为重绘repaint
        2. 何时出发重绘：只要页面发生变化，就会导致重绘，无法避免
            - DOM改变
            - CSS改变
        3. 如何避免最小程度的repaint
            - 把要向浏览器中添加的内容都放在一个片段fragment中，最后一次添加，减少重绘
    4. 布局layout
        - Render Tree 经过 Layout 计算DOM的具体位置和样式,浏览器布局     
     
15. js运行机制

    1. 如何理解js单线程：一个时间内，js只能看一件事
    2. 什么是任务队列
        1. 同步任务
        2. 异步任务
        3. 当同步任务执行后，再执行异步任务（注意时间限制）
    3. 什么是Event Loop，事件循环
        1. js引擎会把同步任务放在运行栈中（任务栈里都是同步任务）
        2. 把异步任务提出来，当定时器（0不是0，最小4ms）的时间走完时，再放入任务队列中
        3. 当运行栈中同步任务走完，再把异步任务放在运行栈中走
    4. 什么时候开启异步任务
        1. setTimeout 和 setInterval
        2. DOM事件
        3. ES6中的promise
    5. 例题1
    
        ```
        // 同步任务
        console.log(1)
        // 异步任务，要挂起
        setTimeout(function () {
            console.log(2)
        },0)
        // 同步任务
        console.log(3)
        ```
        - 结果： 1，3，2
        - 分析：先处理同步任务，再处理异步任务 
        
    6. 例题2
        
        ```
        console.log(1)
        while(true) {
    
        }
        console.log(2)
        ```
        - 结果： 1
        - 解析：都是同步任务，while没有执行完，结果只有1
    
    7. 例题3
        
        ```
        console.log(1)
        setTimeout(function () {
            console.log(2)
        },0)
        while(true) {
    
        }
        ```
        - 结果： 1
        - 解析：先执行同步任务 ，while一直没有执行完，2就不会被打印出来

    8. 例题4
    
        ```
        for (var i = 0;i<4;i++) {
            setTimeout(function () {
                console.log(i)
            },0/1000)
        }
        ```
            
        - 结果： 4444
        - 解析：先执行同步任务 for循环i=0，再执行异步任务定时器，但是定时器还没到时间，for循环继续走i=1,当for循环走完到i=4后，时间到了ls，才会走定时器里面内容，打印出4个4


21. 如何监控js错误/如何保证你的产品质量 =>  错误监控
    1. 前端错误的分类
        - 即时运行错误：代码错误
        - 资源加载错误
    2. 错误的捕获方式
        - 即时运行错误的捕获方式
            - try..catch
            - window.onerror,资源加载错误不会冒泡，所以window.onerror不能捕获此错误
        - 资源加载错误的捕获方式
            - object.onerror
            - performance.getEntries()，获取成功加载的资源，再拿所有的资源减去成功加载的资源，就是错误资源
            - Error事件捕获
    
                ```
    window.addEventListener('error',function (e) {
                    console.log(e)
                },true)
                ```
        - 延伸：跨域的js运行错误可以捕获吗，错误提示是什么，应该怎么处理？
            - 可以捕获
            - 错误信息：Script error
            - 如何处理
                - 客户端上：script标签上加crossorigin属性
                - 服务端上：设置js资源响应头Access-Control-Allow-Origin:*
    3. 上报错误的基本原理
        - 采用ajax通信的方式上报
        - 利用Image对象上报
            `(new Image()).src="http://baidu.com/tesjk?r=ddf";`


