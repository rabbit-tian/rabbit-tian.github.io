### jquery押题

jQuery是一个快速的、小的、功能丰富的JavaScript库。它使HTML文档遍历和操作、事件处理、动画和Ajax等操作更加简单，易于使用的API在许多浏览器中起作用

1. onload()函数和JQuery中`$(document).read(function () {})` 和 `$(function () {})` 的区别
    - window.onload必须等到页面内包括图片的所有元素加载完毕后才能执行。
    - jQuery的`$(function () {})` 是 `$(document).ready(function(){})`的缩写：是DOM结构绘制完毕后就执行，不必等到加载完毕。 

2. jQuery中遍历节点的方法有哪些
    - .each(function (index,el) {})
    - .filter()
    - .map()
    - .find()
    - .has()
    - .find()
    - .closet()
    - .parents()

3. jQuery中操作属性和样式的方法有哪些
    - css样式  ->  css() 
    - innerHTML   ->  html()
    - innerText   ->  text()
    - value  ->  val()
    - attr : 获取标签属性：attr("属性");修改标签属性：attr("属性","属性值");
    - removeAttr 删除行间属性
    - addClass(): 为每个匹配的元素添加指定的类名。

4. jQuery中如何克隆(复制)和删除节点
    - 克隆(复制)
    
        ```
        $("div").on('click', function() {//执行操作})
        
        //clone处理一
        $("div").clone() //只克隆了结构，事件丢失
        
        //clone处理二
        $("div").clone(true) //结构、事件与数据都克隆
        ```
    - 删除节点
        - $("#div1").remove() // 删除被选元素及其子元素。
        - $("#div1").empty(); // 删除被选元素的子元素


5. jQuery中如何进行内容操作
    - html( )、text( )、val( )

6. jQ中html(),text(),val()的区别
    - html():读取和修改元素的HTML标签。对应js中的innerHTML。
        - 在没有参数的情况下，取得第一个匹配元素的内容
    - text():读取或修改元素的纯文本内容。对应js中的innerText。
        - 如果其应用在多个元素上时，只能读取第一个表单元素的"value"值
    - val():读取或修改表单元素的value值。
        - 应用在多个元素上时，将会读取所有选中元素的文本内容。
    - html(),.text(),.val()都可以使用回调函数的返回值来动态的改变多个元素的内容。

7. jQ中find(),has(),filter()的区别
    - find(),在当前选中元素的上下文中找到符合条件的后代，返回的是子元素
    - has(),(selector选择器或DOM元素) 将匹配元素集合根据选择器或DOM元素为条件，检索该条件在每个元素的后代中是否存在，将符合条件的的元素构成新的结果集。
        `$('li').has('span').css('background-color', 'red');`
    - filter(),是对选中的元素集合操作，得到这些元素中符合条件的元素

8. JQ中closet()和parents()的区别
    - closet():从当前元素开始找，找到一个符合条件的对象后就返回
    - parents(): 从父元素开始向上找，一直到文档根节点，返回所有符合条件的jQuery元素对象

9. jQ中如何对选择器进行性能优化
    - jQuery选择一个元素最快的方法就是用ID来选择了 `$("#content").hide();`
        - 或者从ID选择器继承来选择多个元素 `$("#content p").hide();`
    - jQuery中第二快的选择器就是tag选择器（如$(‘head’)）
        - $("#nslForm head.on");
    - 将父对象缓存起来以备将来的使用 `var header = $("#header"); `
    - 采用find()，而不使用上下文查找 `$("#header").find("p")`
    - 链式操作 `$("li.menu-item").click(function (){alert(1))}).css("color", "red")`
    
10. jQ获取 ajax 数据
    
    ```
    $(document).click(()=>{
           $.ajax({
               							url:'https://api.douban.com/v2/movie/search',
             data:{
               start:0,
               q:'雷神'
             },
             dataType:'jsonp',
             success:function(data){
               console.log(data);
             }
           })
   })
    ```
11. JQ对象转原生对象使用下标即可，原生对象转JQ对象用$()包一下即可

12. prop
    - 专门用来操作表单元素属性的（比如:checked），因为直接使用attr('checked')为undefined
    
     ```javascript
       <input type="button" value="按钮">
       <input type="checkbox">
       <input type="checkbox">
       <input type="checkbox">
       <input type="checkbox">
         
     $('input[type=button]').click(()=>{
         let inps = $('input[type=checkbox]');

         for(var i=0;i<inps.length;i++){
             if(inps.eq(i).prop('checked')){
                 inps.eq(i).prop('checked',false)
             }else{
                 inps.eq(i).prop('checked',true)
             }
         }
     })    
     ```
13. DOM插入元素
    - append()  最后添加
    - 插入什么东西.insertBefore.要插入到哪个前面
    - 父级.prepend(插入的元素) -> 结果添加到第一个上

14. 宽高
    
    ```javascript
    1. $('#box').width()
       $('#box').height()

    2. $('#box').innerWidth()   包含padding   不包含border
    	$('#box').innerHeight()

    3. $('#box').outerWidth()   包含padding   包含border
    	$('#box').outerHeight(200，true)  
    	outerWidth可以支持margin 在第二个参数上加true
    ```
15. 距离
    
    ```javascript
    1. 滚动的距离
    $(document).scrollTop() 
    $(document).scrollLeft() 

    2. 绝对位置，相对于 window 定位
    	$('#box').offset().top
    	$('#box').offset().left
    3. 相对于定位父级的距离
    	$('#box').position().top
    	$('#box').position().left
    ```

