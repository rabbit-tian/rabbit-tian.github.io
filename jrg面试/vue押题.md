#### vue押题
1. （必考）Vue 有哪些生命周期钩子函数？ [看文档](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)
    - 生命周期钩子函数
        - beforeCreate : 出生前，一些内部方法，不会用到
        - created: 出生后，获取ajax，做一些初始化操作
        - 挂载元素el 和 模板template       
        - beforeMount: 数据挂载前，挂载：数据和模板编译好后放到页面上
        - mounted: 数据挂载后，可以拿到真实dom        
        - beforeUpdate: 数据更新前
        - updated: 数据更新后（这两个可以用 watch 替代），此阶段可以测试性能        
        - 调用 vm.$destroy(),触发以下两个方法
        - beforeDestroy : 数据销毁前，可以清楚定时器，解绑事件
        - destroyed: 数据销毁后

2. （必考）Vue 如何实现组件通信？
    - 父子通信（使用 Prop 传递数据、使用 v-on 绑定自定义事件）
        - 父组件向子组件传递数据 通过 props
            - 在父组件调用子组件时，设置props属性
            - 在子组件的定义中，需要使用props选项，来设置可以从父组件中传递过来的属性。
        - 子组件向父组件通信($emit())
            - 在子组件中发射事件  `click :function (msg) {this.$emit('transfer',msg)}`
            - 在父组件注册事件 `<my-form @transfer="getUsername"></my-form>`
            - 然后就可以在父组件中使用{{msg}}
            
    - 非父子组件通信同样也可以用Vue.$emit自定义事件来解决
        
        ```
        var bus = new Vue()
        // 组件A
        bus.$emit('id-selected', 1)
        // 组件B
        bus.$on('id-selected', function (id) {
         console.log(id)
        })
        ```
     
     - vue跨组件跨模块通信
        - 如果项目结构复杂化以后，这样的自定义事件变多以后代码难以管理，所以还是建议使用vuex。 
    
3. Vuex 的作用是什么？[看文档](https://vuex.vuejs.org/zh-cn/intro.html)
    - 用来存放控件间状态，可以把他当成一个内存数据库用
    - 用来存一些当前要使用请求远程或本地的数据集
    - 它有点像H5的Cookie、localStorage之类的，但它刷新（F5）后会自己销毁，而H5的那些本地存储还在浏览器中。
    
4. VueRouter 路由是什么？
    - vue-router : 简称路由，简单说就是根据不同的 url 地址，显示不同的效果

    - <router-link>: 组件用于帮助用户进行 导航 ，也就是我们传统的 a 标签经常做的事；a 的标签用 href 属性来指定导航的目标地址，而 <router-link> 组件则用 to 属性来定目标地址；
    
    - <router-view> : 是路由的出口，路由匹配到的组件将 渲染 在这里,即渲染 <router-link>指向的目标地址。
    
    - 同一个路径可以匹配多个路由，匹配的优先级就按照路由的定义顺序：谁先定义的，谁的优先级就最高。
        
6. Computed 计算属性的用法？跟 Methods 的区别。[参考](https://zhuanlan.zhihu.com/p/33778594)
    - computed
        - 响应式的
        - 调用方式不一样，computed定义的成员像属性一样访问
        - 是带缓存的，只有其引用的响应式属性发生改变时才会重新计算
        - computed中的成员可以只定义一个函数作为只读属性，也可以定义get/set变成可读写属性，这点是methods中的成员做不到的
    - Methods
        - 非响应式的
        - methods定义的成员必须以函数形式调用。
        - 函数在每次调用时都要执行
        - 

### 双向绑定
1. 了解mvvm框架吗?
    - 了解，vue框架
2. 对mvvm的认识--单向数据流
    - 先聊MVC，model(数据保存)，view(用户界面)，controller(业务逻辑)
        - View 传送指令到 Controller
        - Controller 完成业务逻辑后，要求 Model 改变状态
        - Model 将新的数据发送到 View，用户得到反馈
    - mvvm：Model(服务器某块逻辑操作)-View(页面，展现形态)-ViewModel(框架,核心枢纽)
    - View里，比如input改变了，ViewModel里的data就跟着改变
    - ViewModel里的data改变，自动映射到View上
    - ViewModel和Model通过ajax和服务器之间的相互通信
3. mvvm和mvc的区别
    - mvc
        - view(用户界面)=>controller(业务逻辑)=> model(数据保存)=>view(用户界面)
        - 所有通信都是单向的，单向数据流
    - mvvm
        - 各部分之间的通信，都是双向的，双向数据流
        - View 与 Model 不发生联系,都通过 ViewModel 传递
        - ViewModel的职责就是把model对象封装成可以显示和接受输入的界面数据对象。
        - 采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel
4. 双向绑定的原理 [看文档](https://cn.vuejs.org/v2/guide/reactivity.html)
    - 双向：正向，data到view方向，数据驱动页面；反向，页面内容变了，映射到data数据中
    - 绑定：自动化处理
    - 原理：
        - 正向，数据驱动页面，通过Object.defineProperty监听data变化，回调函数中写清除data和view的关系，实现数据驱动页面
            - set：当数据发生变化，触发set，set中检查新值和旧值是否一样，如果不一样，触发回调，完成一次赋值检测
        - 反向：input事件，框架背后做好的
    - 缺点：由于各种数据相互依赖相互绑定，导致数据问题的源头难以被跟踪到，子组件修改父组件，兄弟组件互相修改有有违设计原则
    
5. Object.defineProperty和reflect.defineProperty的区别
    - Object.defineProperty，es5的方法，返回一个新的对象
    - reflect.defineProperty，es6的方法，返回布尔值
6. Object.defineProperty会手写

### 设计模式
1. 观察者Observer(Object.defineProperty)监听Data的变化，触发set
2. 通知所有观察者（列表 Dep由watcher增加）列表 Dep，调用更新函数(watcher观察者给的)
3. watcher 在回调函数中拿到更新消息，更新View
4. 源是Data，最后返回是View

### 生命周期
- beforeCreate : 出生前，一些内部方法，不会用到
- created: 出生后，获取ajax，做一些初始化操作

- 挂载元素el 和 模板template

- beforeMount: 数据挂载前，挂载：数据和模板编译好后放到页面上
- mounted: 数据挂载后，可以拿到真实dom

- beforeUpdate: 数据更新前
- updated: 数据更新后（这两个可以用 watch 替代），此阶段可以测试性能

- 调用 vm.$destroy(),触发以下两个方法
- beforeDestroy : 数据销毁前，可以清楚定时器，解绑事件
- destroyed: 数据销毁后

### 源码分析
1. proxykeys使用 Object.defineProperty 方法，通过代理的操作，赋值给Vm实例
2. observe对象
    - 在vue实例化中调用observe
    - 递归方式实现对象嵌套
    - 数据读取时，判断是否增加观察者
    - 数据变化时，通知观察者

3. Dep 列表
    - 包含 添加列表和通知观察者对象，每个对象中有一个update函数，传递出去
    - 在观察者对象watcher中建立update函数，就是回调函数，
    - 观察者对象watcher 监听对象是否有值，有值的话，是一个观察者，然后放在观察者列表中，当它变化时，再通知观察者对象
4. 要观察某一个对象，先实例化一个watcher，调get函数，把我想观察的对象放在数据监听的列表中，在后续操作中，任何操作都会触发watcher中的update回调函数，update执行后，v**iew就会执行操作


