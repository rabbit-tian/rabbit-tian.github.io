### 为什么要使用模块化？
1. 解决命名冲突
2. 文件依赖管理
3. 提高代码可读性
4. 代码解耦，提高复用性

### CMD、AMD、CommonJS 规范分别指什么？有哪些应用
1. CMD
    - CMD（Common Module Definition）是 SeaJS推广过程中产生的。CMD 规范中，一个模块就是一个文件。代码的书写格式如下：
    - define(factory);
    - 示例
    
        ```
        //Math.js
        define(function(require, exports, module) {
          exports.add = function() {
            var sum = 0, i = 0, args = arguments, l = args.length;
            while (i < l) {
              sum += args[i++];
            }
            return sum;
          };
        });
        ```
        ```
        //increment .js
        var add = require('math').add;
        exports.increment = function(val) {
            return add(val, 1);
        };
        ```
        ```
        //program.js
        var inc = require('increment').increment;
        var a = 1;
        inc(a); 
        // 2
        ```

2. AMD 
    - AMD(Asynchronous Module Definition, 异步模块定义) 指定一种机制，在该机制下模块和依赖可以异步加载。这对浏览器端的异步加载尤其适用。
    - 实现AMD的库有｀RequireJS｀ 、｀curl｀ 、｀Dojo｀ 等
    - 语法--->define(id?, dependencies?, factory);
    
        ```
        define('modal', ['jQuery', 'dialog'], function($, Dialog){
            $('.modal').show();
            Dialog.open();
    });
        ```

3. CommonJS
    - CommonJS是服务器端模块的规范，Node.js采用了这个规范。Node.JS首先采用了js模块化的概念。
    - a.在一个模块中，存在一个自由的变量”require”，它是一个函数。
    - b.一个模块中，会存在一个名为”exports”的自由变量，它是一个对象，模块可以在执行的时候把自身的API加入到其中。
    - c.模块必须使用”exports”对象来做为输出的唯一表示。

