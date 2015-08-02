#argular控制器
一些专业术语如MVVM MVC表示没接触过..无法理解 跳过直接看代码

###控制器属性
$scope就是把一个DOM元素连结到控制器上的对象，
它提供一个绑定到DOM元素(以及其子元素)上的执行上下文。
它也是一个JavaScript对象，指向应用程序作用域内的所有HTML元素和执行上下文。
作用域呢，就是作为$scope的数据属性关联到DOM上的，并且能在需要调试的时候被获取到。
---
要明确创建一个$scope对象，我们就要给DOM元素安上一个controller对象，使用的是ng-controller 指令属性。
所有$scope都遵循原型继承，这意味着它们都能访问父$scope们,对任何属性和方法，如果AngularJS在当前$scope上找不到，
就会到父$scope上去找，如果在父$scope上也没找到，就会继续向上回溯，一直到$rootScope上，
这个$rootScope是最顶级的$scope，它对应着含有 ng-app指令属性的那个DOM元素，
也就是说根作用域关联的DOM就是ng-app指令定义的地方。
```
<div ng-app="" ng-controller="mysoul">
	<input ng-model="soul.name"><br>
	<span ng-bind="soul.name"></span>
</div>
<script>
//$scope这个名称无法随意更改

function mysoul($scope){

$scope.soul={
		//默认的name数据 输出到ng-model
		name:"RelSoul"	
	}
}
</script>
```

###控制器方法
```
<div ng-app="" ng-controller="mysoul">
		<input ng-model="soul.username">
		<button ng-click="soul.sayHello(soul.username)">hello</button>
		<br>
		<span ng-bind="soul.hello">
		
</div>
<script>
function mysoul($scope){
$scope.soul={
	username:"Relsoul",
	hello:"",
	sayHello:function(username){
	$scope.soul.hello=username;
	}
	
}
}

</script>
```










