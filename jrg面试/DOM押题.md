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


4. DOM事件模型 [DOM](http://jsbin.com/raqakog/1/edit?js,console,output)
    - DOM事件流  
        - 捕获阶段
        - 目标阶段
        - 冒泡阶段
    - 如果这个元素是被点击的元素,那么捕获不一定在冒泡之前，顺序是由监听顺序决定的
    - 描述DOM事件 捕获 的具体流程
        - 如何获取html标签：Document.documentElement
        -  window => document => html标签 => body => 父级元素 => 自己元素 => 目标元素
        
5. 移动端的触摸事件了解吗？
    - touchstart touchmove touchend touchcancel
    - 模拟swipe事件: 记录两次touchmove的位置差，如果最后一次在前一次的右边，说明向右滑了

6. 事件委托是什么，有什么好处？ [事件委托](https://github.com/FrankFang/wheels/blob/master/lib/dom/index.js)
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







