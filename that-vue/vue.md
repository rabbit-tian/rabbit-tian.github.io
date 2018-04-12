### 初始vue
1. 简单的渐进式框架
    - 简单：vue.js压缩后只有 17KB
    - 渐进式：可以一步步的深入学习和使用，根据自己的项目需要，选择不同的维度来使用它
2. vue常见的高级功能
    - 解耦视图和数据
    - 可复用的组件
    - 前端路由
    - 状态管理
    - 虚拟DOM
3. MVVM 模式
    - 当 view 视图层变化时，自动更新到viewModel视图模型上，反之亦然，view和viewModel实现了数据的双向绑定

### vue实例和数据绑定
1. vue实例：`let app = new Vue({el: '#app'})`
    - 通过 `app.$el`来访问
    - `app.$nextTick` ：保证在dom渲染完成后获取有效的节点
2. 数据：`let app = new Vue({el: '#app'，data: myDate})`: 在data中声明数据，可以对数据进行控制和维护

3. 常用的生命周期，钩子函数
    - created：$el未挂载，主要对数据进行一些初始化处理
    - mounted：$el挂载完成，一般可以开始业务逻辑
    - beforeDestory: 实例销毁前，主要解绑一些 事件监听函数

4. 插值 `<span v-pre> {{myDate}} </span>` v-pre：只想显示内容，不改变

5. vue 的脚手架的使用
    - 安装node.js `node -v`: 查版本
    - npm包管理器  `npm -v`
    - 全局安装 vue `npm install vue`
    - 安装脚手架 `npm install vue-cli --global`
    - 找到项目存放的位置，自定义项目名 `vue init webpack project`
    - 安装依赖  `npm install`
    - 启动项目： `npm run dev`
6. 过滤器，filters {{price | formatDate}}
    - 对数据进行过滤，格式化上下文，比如字母大写等
7. 指令和事件
    - v-if:判断
    - v-on:绑定事件 语法糖：@
    - v-bind: 动态更新元素上的属性
        - `<img v-bind:src="/xxx">`
        - `<img :src="/xxx">` 语法糖


### 计算属性computed
1. 模板内渲染数据，将复杂的逻辑放在computed中
2. 比如用 计算属性 根据商品单价和数量，计算总价时
    - 只要商品有任何变化，计算属性就会自动更新，总价也自动更新
    - 计算属性中 都包含 getter 和 setter，默认只是利用了getter来读取
3. 计算属性经常用来动态传递 props
4. 计算属性可以依赖其他计算属性，也可以依赖其他实例的数据
5. 计算属性最大的特点（相对于methods）： 依赖缓存，只要依赖的数据发生变化，才会重新取值，否则，计算属性不更新


### 绑定class 和 内联样式
1. 绑定class
    
    ```
    <div id="app">
    <div class="box" :class="{'active': isActive,'bor':isBor}"></div>     
    <div class="ct" :class="[{'active': isActive},isRadius]"></div>
    </div>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                isActive: true,
                isBor: true,
                isRadius: 'rad'
            }
        })
    </script>
    ```

2. 绑定内联样式
    
    ```
    <div class="style" :style="{'backgroundColor':backgroundColor,'border':border}"></div>
    <div class="style" :style="styles"></div>
    </div>

    <script>
        let app = new Vue({
            el: '#app',
            data: {
                backgroundColor: 'red',
                border: '1px solid #000',
                styles: {
                    backgroundColor: 'pink',
                    border: '10px solid #000',
                }
            }
        })
    </script>
    ```

### 内置指令
1. 不需要表达式的指令
    - `v-clock` : 当网速慢时，可避免显示 {{message}} 的字样
    - `v-once` : 元素或组件只渲染一次
2. 条件渲染指令
    - `v-if v-else-if v-else`: if判断
    - `<template v-if="status === 1"><p>hello</p><p>world</p></template>` ： 渲染多个元素，用template，template不占据节点位置
3. 关于 key 值：保证元素的唯一性，不可复用
4. v-show 和 v-if 的选择
    - v-show：通过控制节点css属性中的display：none与否来控制是否显示。所以v-show无论条件真假都会进行编译并且保留编译，只是简单基于css切换
    - v-if ：是惰性的，如果初始渲染的条件为假，那么什么事情都不做，在第一次变为真的时候才开始局部渲染。这就导致当条件为假的时候在条件块里面的子组件不会被渲染，而且时间监听器也不会生效。当条件切换时会有销毁、重建的过程，所以说，v-if才是真正的条件渲染
    - 根据对比可知，v-if有更高的切换消耗，v-show有更高的初始渲染消耗。因此，如果需要频繁切换就采用v-show，如果运行条件不太可能改变，就采用v-if 
5. v-for： 遍历数组，枚举对象等
6. 数组更新
    - app.books.splice: 原数组变
    - app.books.slice: 原数组不变
    - 数组更新时，并不是直接重新渲染整个列表，而是最大化的复用dom元素，提高了性能
    - 可以通过 计算属性 返回我们需要的数组，它依赖于books，但是不会修改books
7. 方法和事件
    - v-on：click  @click(10)
    - 没有参数时，可不加括号,不加括号时的参数默认是event
    - viewModel销毁时，所有事件处理器都会自动删除

8. 修饰符
    - 阻止默认事件：`@click.prevent="handel"`
    - 阻止冒泡：`@click.stop="handel"`
    - 事件捕获方式 `@click.capture="handel"`
    - 只在自身触发 `@click.self="handel"`
    - 只触发一次 `@click.once="handel"`
    - 键盘事件 `@keyup.13="submit"` (enter,delete,up,down,left,right)

    
### 我所知道的webpack
1. 

