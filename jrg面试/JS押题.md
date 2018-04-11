### Javascript押题

1. JS数据类型（基本类型，复杂类型）
    - number(NaN)，string，boolean，null,undefined,object,symbol
    - object包括：数组，函数，正则，日期
    - Symbol,ES6, 为了保证属性名的独一无二而被引入

2. 显示数据类型转换
    -  Number
        - 原始类型
            - 数值： 转换后还是数值
            - 字符串：数值，NaN，空字符串转化为 0
            - 布尔值：true：1，false：0
            - undefined：NaN
            - null：0
        - 对象：先调用 a.valueOf(),如果不是基本类型，再调用a.toString(),最后再调用 Number()
    
    - String
        - 原始类型
            - 数值：转化为字符串
            - 字符串： 字符串
            - 布尔值：true => "true" , false => "false"
            - undefined: "undefined"
            - null: "null"
    
        - 对象：先调用a.toString()，返回是复合类型，再调用 a.valueOf()，返回原始类型，调用 String 方法，否者报错
    
    - Boolean
        - 转化为 false 的 五项
            - undefined
            - null
            - 0
            - 空字符串
            - NaN
        - 其余是 true
3. 隐式类型转换
    1. 四则运算
    2. 判断语句
    3. Native 调用  如：console.log()

4. 常见题目
    1. [] + [] = ""
    2. [] + {} = "[object Object]"
    3. {} + [] = 0 原因：{}代码块浏览器不解析，+[],调用Number([]) => 0
    4. {} + {} =
        - chrome: "[object Object][object Object]"
        - firefox: NaN , {}代码块浏览器不解析,+{},调用Number({}) => NaN
    5. true + true =  2
    6. 1 + {a+1} = 报错

    
5. typeof 类型转换
    - 返回数据类型
    - typeof(null) => "object"


6. (必考)Promise怎么使用？
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

7. (必考) ajax 手写以下 (四步)
    
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
8. (必考) this指的是什么 [this](http://web.jobbole.com/91014/)
    - fn(): this指的是window
    - fn() 是 strict mode(严格模式)，this是undefined
    - a.b.c.fn() this: a.b.c
    - new Fn() ,this指向新生的实例
    - （）=> console.log(this) this 就是外面的this


9. (必考) 立即执行函数
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

10. async/await 语法了解吗？
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
        let result = await return Promise()
    }
    asyncCall()
    
    ```

11. 如何实现深拷贝
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

12. 如何实现数组去重
    - 计数排序的逻辑(一般if else的方法，只能正整数)
    - Set去重 `Array.from(new Set(arr))`

13. 如何用正则实现 string.trim()?
    
    ```
    function trim(string){
        return string.replace(/^\s+|\s+$/,'')
    }
    ```

14. JS原型是什么？ [原型](https://zhuanlan.zhihu.com/p/23090041?refer=study-fe)
    - 比如数组 a = [1,2,3],自身并没有 push 方法，但却可以使用，a通过 `__proto__ ` 找到到 `Array.prototype`,继而找到 `Array.prototype.push` 这个方法，`Array.prototype`中还有许多其他方法，如 pop，slice，splice，join等，`Array.prototype`就是 数组a的原型

15. 原型，构造函数，实例，原型链
    - 解释Person、 prototype、__proto__、p、constructor之间的关联。
        - Person: 构造函数(类)
        - prototype:构造函数原型
        - __proto__:原型链
        - p: 实例化对象
        - constructor: 原型的属性，指向构造函数Person
        - p.__proto__ === Person.prototype
        - p.__proto__.constructor = Person.prototype.constructor = Person
        - Person.__proto__ === Function.Prototype
        
        ```
        function Person(name){
            this.name = name;
        }
        Person.prototype.sayName = function(){
            console.log('My name is :' + this.name);
        }
        var p = new Person("若愚")
        p.sayName();
        ```
    - 具体解析
        - 原型：
            - 原型对象的作用，就是定义所有实例对象共享的属性和方法
            - 实例对象可以视作从原型对象衍生出来的子对象
        - 原型链：
            - 对象的属性和方法，有可能定义在自身，也有可能定义在它的原型对象。由于原型本身也是对象，又有自己的原型，所以形成了一条原型链（prototype chain）
            - 所有对象的原型最终都可以上溯到Object.prototype
            - Object.prototype对象有它的原型： 任何属性和方法的null对象
        - “原型链”的作用是：
            - 读取对象的某个属性时，JavaScript 引擎先寻找对象本身的属性，
            - 如果找不到，就到它的原型去找
            - 如果还是找不到，就到原型的原型去找
            - 如果直到最顶层的Object.prototype还是找不到，则返回undefined。
            - 如果对象自身和它的原型，都定义了一个同名属性，那么优先读取对象自身的属性，这叫做“覆盖”（overriding）
        - constructor 属性
            - prototype对象有一个constructor属性，默认指向prototype对象所在的构造函数
            - 由于constructor属性定义在prototype对象上面，意味着可以被所有实例对象继承
            - constructor属性的作用，是分辨原型对象到底属于哪个构造函数
    ![原型](media/%E5%8E%9F%E5%9E%8B.jpg)

16. instanceof的原理
    1. instanceof : p instanceof Person , 判断p是不是Person的实例，判断指定对象是否为某个构造函数的实例
    2. 原理：判断 p.__proto__ 和 Person.prototype 两个属性 是不是引用同一个地址
    3. p instanceof Person => true
    4. p instanceof Object => true : 只要是在原型链上的构造函数，都会被instanceof看作是 p 的构造函数
    5. 如何准确判断 p是不是Person的实例，用constructor判断
        - p.__proto__.constructor === Person =>   true
        - p.__proto__.constructor === Object =>   false

17. new运算符
    - 创造一个空对象 p1 = {}
    - 构造函数被执行，传入相应参数
    - 如果构造函数返回了一个对象 ，此对象会取代new出来的结果，如果没有返回对象，那么new出来的结果为步骤一创建的对象
        
        ```
            function Peple(name){
                // this指向：创建的实例化对象
                this.name = name
                this.sayName = function () {
                    console.log('myName:'+this.name)
                }
            }
        
            let p1 = new Peple('tian') // 通过构造函数创造出一个实例化对象
            /*
                1. 创造一个空对象 p1 = {}
                2. 构造函数被执行，赋值：  p1.name = 'tian'
                          p1.sayName = function (){}
                3.构造函数返回，return p1对象
            */
            p1.sayName() // 调用里面的方法
        
            let p2 = new Peple('杨')
            p2.sayName() // 调用里面的方法
        ```
18. 创建对象有几种方法
    1. let obj1 = {a:1}（字面量方法）
    2. let obj2 = new Object({a:1})
    3. 构造函数的方式
    
        ```
        let M = function (num) {this.a = num}
        let obj3 = new M(1)
        ```
    4. Object.create 的方法
    
        ```
        let num = {a:1}
        let obj4 = Object.create(num)
        ```

19. ES6的class
    - MDN class章节

20. 类的声明和生成实例

    ```
    // 类的声明
    function Animal () {
        this.name = 'tian'
    }
    
    // ES6 class 类的声明
    class Animal2 {
        constructor () {
            this.name = 'tian'
        }
    }
    
    // 生成实例 ,没有参数可以不加括号
    
    let a = new Animal()
    let a2 = new Animal2
    ```

21. jS如何实现继承
    - 借助构造函数 和 call 方法实现继承
        - 原理：通过call方法将父类的构造函数this指向子构造函数的实例上去，继而实现继承
        - 缺点：只能实现部分继承，不能继承父类原型上的属性和方法
        
    ```
    function Parent1() {
        this.name = 'parent1'
    }
    Parent1.prototype.say = function() {}
    
    function Child1() {
        Parent1.call(this)
        this.type = 'child1'
    }
    
    let c1 = new Child1
    ```
        
    - 借助原型链实现继承
        - 原理：Child2.prototype === c2.__proto__ === new Parent2
        - 缺点：当改变其中一个实例属性时，会改变原型属性的变化，进而改变了所有实例的属性
    
    ```
    function Parent2() {
        this.name = 'parent2'
        this.arr = [1, 2, 3]
    }

    function Child2() {
        this.type = 'child2'
    }
    Child2.prototype = new Parent2

    let c2 = new Child2
    let c21 = new Child2
    console.log(c2)
    console.log(c2.arr, c21.arr) // [1, 2, 3] (3) [1, 2, 3]
    c21.arr.push(4)
    console.log(c2.arr, c21.arr) // [1, 2, 3, 4] (4) [1, 2, 3, 4]
    ``` 
    
    - 构造函数和原型链的组合方法
        - 通过call方法将父类的构造函数this指向子构造函数的实例上去，继而实现实例自身的继承,通过原型链的方法实现 原型的继承
        - 优点：实现继承的子类们的相互独立
        - 缺点：子类实例的 构造函数 是 父类的构造函数
        
    ```
    function Parent3() {
        this.name = 'parent3'
        this.arr = [1, 2, 3]
    }

    function Child3 () {
        Parent3.call(this)
        this.type = 'child3'
    }
    // 不适用 new Parent2 原因：可以少执行一次 Parent3
    Child3.prototype = Parent3.prototype
    let c3 = new Child3
    let c31 = new Child3
    console.log(c3.arr, c31.arr) // [1, 2, 3] (3) [1, 2, 3]
    c31.arr.push(4)
    console.log(c3.arr, c31.arr) // [1, 2, 3,]  [1, 2, 3, 4]

    // 缺点：子类实例的 构造函数 是 父类的构造函数
    console.log(c3 instanceof Child3,c3 instanceof Parent3) // true true
    console.log(c3.constructor) // Parent3
    ```    
     
   - ** 构造函数和原型链的组合方法 优化 ** 
        - 通过call方法将父类的构造函数this指向子构造函数的实例上去，继而实现继承
        - 利用 Object.create(),创建中间对象，把两个原型对象区分开
        - 再写上自己的constructor
    
    ```
    function Parent4 () {
        this.name = 'parent4'
    }
    function Child4 () {
        Parent4.call(this)
        this.type = 'child4'
    }
    // 利用 Object.create(),创建中间对象，把两个原型对象区分开
    Child4.prototype = Object.create(Parent4.prototype)
    Child4.prototype.constructor = Child4 // 写上自己的constructor
    let c4 = new Child4
    console.log(c4 instanceof Child4,c4 instanceof Parent4) // true true

    console.log(c4.constructor) // Child4
    ```
        
        
    
22. `==` 相关题目放弃
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
    



