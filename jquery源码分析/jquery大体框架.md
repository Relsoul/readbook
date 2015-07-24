#Jquery学习笔记一

###jquery挂载
形成一个局部的环境，防止与其他代码冲突
```
(function(window,undefined){}(window)
//对外提供接口如
window.$=$
```
(21-94)定义了一些变量与函数
```
jquery=function(){}
```
(8826) $挂载到window上
```
if ( typeof window === "object" && typeof window.document === "object" ) {
	window.jQuery = window.$ = jQuery;
}
```

###jquery原型
(96-283) 给Jquery对象添加一些方法与属性

###jquery.extend
(285-347) jquery的继承方法

###jquery的工具方法
(349-817)jQuery.extend():扩展一些工具方法

```
//两种方法
//$()返回的是一个实例 也就是为实例的方法
//仅仅为jquery用
$().css();
$().html();
//$的静态方法 可以给jquery用和原生的js用
$.trim();
$.proxy;

//静态方法为jquery的最底层的，实例方法为上一层，
//实例方法调用底层的静态方法
```

###jquery的选择器
(877-2856):jquery的选择器 Sizzle:复杂选择器的实现
```
$("ul li + p input.class").css();
```

###jquery回调对象
(2880-3042) ：Callbacks:回调对象:对函数的一个统一管理
```
//jquery的函数统一管理 Callbacks
	function fn1(){console.log(1)}
	function fn2(){console.log(2)}
	var cb=$.Callbacks();//
	cb.add(fn1)
	cb.add(fn2)
	console.log(cb)
	cb.fire()//1 2
	cb.remove(fn2)
	cb.fire()//1
```

###jquery的延迟对象
(3043-3183):jquery的延迟对象：对异步的一个统一管理
如:定义器，dom加载等等。
```
//jquery的延迟对象：对异步的一个统一管理
			//先会弹出2 后弹出“异步管理”
/*			setTimeout(function(){
				console.log("异步管理")
			},1000)
			console.log(2)*/

			//加上延迟对象，先弹出异步管理 后弹出2
			var dfd=$.Deferred()
			setTimeout(function(){
				console.log("异步管理")
				dfd.resolve()
			},1000)
			dfd.done(function(){
				console.log(2)
			})
```

###jquery功能检测
(3184-3295):support：功能检测
比如根据浏览器功能判断浏览器版本
```
// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// Check the default checkbox/radio value ("" on old WebKit; "on" elsewhere)
	//老版本WEBKIT默认的checkbox/radio value 为""
	//新版本返回的为true  老版本返回为false
	support.checkOn = input.value !== "";
```

###jquery的data()方法
(3308-3652):jquery的data()方法:数据缓存
```
//jquery的data()方法:数据缓存
			$("#div1").data('name',"hello");
			console.log($("#div1").data("name"))//hello
```

###jquery队列管理
(3653-3797)：queue():队列管理
dequeue():出队
```
//jquery队列管理
			//先走left值-top-width
			$("#div1").animate({left:100});
			$("#div1").animate({top:100});
			$("#div1").animate({width:300});
```

###jquery的属性操作方法
(3803-4299):attr(),prop(),val(),addClass():对元素属性操作

###jquery事件操作
(4300-5128):on(),trigger():事件操作相关方法

###jqueryDOM操作
(5140-6057):DOM操作方法:添加，删除，获取，包装，DOM筛选

###jquery样式操作
(6058-6620):css()：样式操作

###jqueryAjax
(6621-7854):提交的数据与ajax();
如:ajax();load();getJson();

###jquery运动
(7855-8584):animate():运动的方法

###jquery位置与尺寸
(8585-8792):offset():位置与尺寸的方法

###jquery模块化
(8804-8821):jquery支持模块化的模式


















































