

1. promise 的状态
    - pending
    - rejected
    - filfilled

2. promise 原型方法和静态方法
    > new Promise ((res,rej) => {})
    - Promise.prototype.then
        - return 新的Promise
    - Promise.prototype.catch
        - return 新的Promise
    - Promise.resolve
    - Promise.reject
    - Promise.all
    - Promise.race

3. Promise 的作用
    - 我们知道异步流程是不可控的，所以se6提供了一个方法 promise 来管理异步流程，这样就可以做到对异步流程的控制