1. 基本概念：DOM事件的级别
    - DOM0： element.onclick = function () {}
    - DOM1中没有涉及到事件的应用
    - DOM2: element.addEventListener('click',function () {},false)
    - DOM3: element.addEventListener('keyup',function () {},false)

2. DOM事件模型
    - 捕获 ：由上往下
    - 冒泡 ：由下往上

3. DOM事件流
    - 捕获阶段
    - 目标阶段
    - 冒泡阶段
4. 描述DOM事件 捕获 的具体流程
    - 如何获取html标签：Document.documentElement
    - window => document => html标签 => body => 父级元素 => 自己元素 => 目标元素
5. Event对象的常见应用
    - 阻止默认行为：event.preventDefault()
    - 阻止冒泡行为：event.stopPropagation()
    - 阻止同一元素的两个click事件中的一个：event.stopImmediateProPagation()
    - 当前所绑定事件的对象：event.currentTarget
    - 当前被点击的元素：event.target
6. 自定义事件
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
