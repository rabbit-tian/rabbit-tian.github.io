### 关于promise
- promise 用来管理控制 异步流程的，我们都知道异步流程不可控，所以用promise来管理
- promise 内部还是同步流程，then和catch里面时异步的结果
- then 里面有两个函数，第一个是接收成功函数，第二个是接收失败函数
- catch的功能类似于then的第二个函数，用来捕获失败函数

```
new Promise (function (resolve,reject) {
    setTimeout(function () {
        resolve('hello')
        // reject('tian')
    },1000)
}).then(function (val) {
    console.log(val)
},function (val) {
    console.log(val)
}).catch(function (err) {
    console.log(err)
})

```

1. 例题1
    
    ```
    Promise.resolve()
    .then(() => {
        return new Error('error!!!')
    })
    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
      结果：
      then: error!!!
at Promise.resolve.then (...)
at ...
    === >>>
    Promise.resolve()
    .then(() => {
        return Promise.reject(new Error('error'))
    	throw new Error('error')
    })
    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
      
    ```
2. 例题2
    
    ```
    setTimeout(function(){
        console.log(1);
    }, 0)
    
    new Promise(function executor(resolve){
        console.log(2);
        for(var i = 0; i < 1000; i++){
            i = 9999 && resolve();
        }
        console.log(3);
    }).then(function(){
        console.log(4);
    })
    
    console.log(5);
    
    // 结果：2、3、5、4、1
    /*
    解析：
    1、Promise 构造函数是同步执行的，promise.then 中的函数是异步执行的
    2、定时器也是异步操作
    */ 
    ```
3. 例题3

    ```
    const promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
        }, 1000)
    })
    const promise2 = promise1.then(() => {
        throw new Error('error!!!')
    })
     
    console.log('promise1', promise1)
    console.log('promise2', promise2)
     
    setTimeout(() => {
        console.log('promise1', promise1)
        console.log('promise2', promise2)
    }, 2000)
    
    // 结果
    /*
    1、promise1 Promise { <pending> }
    2、promise2 Promise { <pending> }
    3、(node:50928) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Error: error!!!
    (node:50928) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
    4、promise1 Promise { 'success' }
    5、promise2 Promise {
    <rejected> Error: error!!!
    at promise.then (...)
    at <anonymous> }
    
    */
    // promise 有 3 种状态：pending、fulfilled 或 rejected。状态改变只能是 pending->fulfilled 或者 pending->rejected，状态一旦改变则不能再变。上面 promise2 并不是 promise1，而是返回的一个新的 Promise 实例。
    ```
4. 例题4
    
    ```
    const promise = new Promise((resolve, reject) => {
        resolve('success1')
        reject('error')
        resolve('success2')
    })
     
    promise
    .then((res) => {
        console.log('then: ', res)
    })
    .catch((err) => {
        console.log('catch: ', err)
    })
    // 结果: then: success1
    // 构造函数中的 resolve 或 reject 只有第一次执行有效，多次调用没有任何作用,promise 状态一旦改变则不能再变。
    ```
5. 例题5
    
    ```
    Promise.resolve(1)
    .then((res) => {
        console.log(res)
        return 2
    })
    .catch((err) => {
        return 3
    })
    .then((res) => {
        console.log(res)
    })
    // 结果： 1，2
    // promise 每次调用 .then 或者 .catch 都会返回一个新的 promise，从而实现了链式调用。
    ```

6. 例题6
    
    ```
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('once')
            resolve('success')
        }, 1000)
    })
     
    const start = Date.now()
    promise.then((res) => {
        console.log(res, Date.now() - start)
    })
    promise.then((res) => {
        console.log(res, Date.now() - start)
    })
    
    // 结果：once 1003 1006
    // 解析: promise 的 .then 或者 .catch 可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用 .then 或者 .catch 都会直接拿到该值。
    ```

7. 例题7
    
    ```
    const promise = Promise.resolve()
    .then(() => {
        return promise
    })
    promise.catch(console.error)
    
    // promise 不能返回自身，会造成死循环
    ```

8. 例题8
    
    ```
    Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
    // 结果：1
    // 解析：.then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。
    ```
9. 例题9
    
    ```
    Promise.resolve()
    .then(function success (res){
        throw new Error('error')
    },fail(e) {
        console.log('fail1' + e)
    })
    .catch(function fail2(e){
        console.log('fail2' + e)
    })
    // 结果:
    fail2: Error: error
    at success (...)
    at ...
    
    // 解析：.then 可以接收两个参数，第一个是处理成功的函数，第二个是处理错误的函数。.catch 是 .then 第二个参数的简便写法，但是它们用法上有一点需要注意：.then 的第二个处理错误的函数捕获不了第一个处理成功的函数抛出的错误，而后续的 .catch 可以捕获之前的错误。
    ```

10. 例题10
    
    ```
    process.nextTick(() => {
        console.log('nextTick')
    })
    Promise.resolve()
    .then(() => {
        console.log('then')
    })
    setImmediate(() => {
        console.log('setImmediate')
    })
    console.log('end')
    
    // 结果：end nextTick then setImmediate
    // 解析：process.nextTick 和 promise.then 都属于 microtask，而 setImmediate 属于 macrotask，在事件循环的 check 阶段执行。事件循环的每个阶段（macrotask）之间都会执行 microtask，事件循环的开始会先执行一次 microtask。
    ```



