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

#### vue实例和数据绑定
1. vue实例：`let app = new Vue({el: '#app'})`
    - 通过 `app.$el`来访问
    - `app.$nextTick` ：保证在dom渲染完成后获取有效的节点
2. 数据：`let app = new Vue({el: '#app'，data: myDate})`: 在data中声明数据，可以对数据进行控制和维护

3. 常用的生命周期，钩子函数
    - created：$el未挂载，主要对数据进行一些初始化处理
    - mounted：$el挂载完成，一般可以开始业务逻辑
    - beforeDestory: 实例销毁前，主要解绑一些 事件监听函数

4. 


