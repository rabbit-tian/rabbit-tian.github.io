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
    - border-box(IE): 宽高包括 padding值和border值
2. css reset 和 normalize.css 有什么区别？
    - css reset：样式重置，抛弃默认样式
    - normalize.css：让所有浏览器的标签都和标准规定的默认样式一致


