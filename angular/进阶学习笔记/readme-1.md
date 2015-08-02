#进阶学习-声明式思维
![angular](http://www.hubwiz.com/course/54f3ba65e564e50cfccbad4b/img/0029.png)

```
<!-- 模板文件 --><html>
<head>
	<script src="http://lib.sinaapp.com/js/angular.js/angular-1.2.19/angular.min.js"></script>
</head>
<!-- 内置的ng-app指令通知编译器启动AngularJS框架-->
<body ng-app="ezstuff">
	<!-- 我们自己定义的ez-clock指令通知编译器生成时钟widget-->
	<ez-clock></ez-clock>
	<script>
	angular.module("ezstuff",[])//创建模块ezstuff
.directive("ezClock",function(){//在模块上注册指令ezClock的类工厂
	return {
		restrict : "E",
		replace : true,
		template : "<div class='clock'></div>",
		link : function(scope,element,attrs){
			setInterval(function(){
				//获取当前时间
				var d = new Date();

				//element对应引用该指令的DOM对象的jqLite封装
				element.text(d.toString());
			},1000);
		}
	}
})
	</script>
</body>
</html>
```

![angular](http://www.hubwiz.com/course/54f3ba65e564e50cfccbad4b/img/0005.png)
