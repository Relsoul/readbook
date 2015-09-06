#第一个angular实例-Amail分析

###首先构建html模板和引入angular
```
<!DOCTYPE html>
<html ng-app="AMail"> //这里声明一个ng-app模块
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
		<script src='http://apps.bdimg.com/libs/angular.js/1.3.9/angular.js' type="text/javascript" charset="utf-8"></script>
		<script src="http://apps.bdimg.com/libs/angular.js/1.3.9/angular-route.min.js" type="text/javascript" charset="utf-8"></script>
		<script src="app.js" type="text/javascript" charset="utf-8"></script>
	</head>
	<body>
		<h1>A-Mail</h1>
		//ng-view:所有的模板会在这个div里面呈现
		<div ng-view></div>
	</body>
</html>
```

###接下来定义模板
**列表模板(list.html)**
```
<table>
	<tr>
		<td><strong>发送者</strong></td>
		<td><strong>主题</strong></td>
		<td><strong>日期</strong></td>
	</tr>
	//ng-repeat 类似于for in循环一样 会遍历出data属性
	<tr ng-repeat="mail in data">
		<td>{{mail.sender}}</td>
		<td><a href="#/view/{{mail.id}}">{{mail.subject}}</a></td>
		<td>{{mail.date}}</td>
		//便于理解route里的URL参数
		<a href="#/test/ss?search=mm">clickme</a>
	</tr>
</table>
```

**详细列表(detail列表)**
```
<div><strong>Subject:</strong>{{mail.subject}}</div>
<div><strong>Sender:</strong>{{mail.sender}}</div>
<div><strong>Date:</strong>{{mail.date}}</div>
<div><strong>To:</strong>
	<span ng-repeat="Mto in mail.recipients">{{Mto}}</span>
</div>
<a href="#/">返回</a>
```

###最后编写控制程序
**首先创建Amail模块**
```
//ngRoute:在创建Amail模块的时候需要依赖什么模块 比如ngRoute就是angular的路由模块 也就是angular-router.js
var aMailservices=angular.module("AMail",["ngRoute"]);
```

**然后创建路由**
```
//创建路由
function AmailRouteConfig($routeProvider){
	//这里的$routeProvider会自动注入
	//$routeProvider起一个路由分配左右 
	$routeProvider.
	when("/",{
		//当访问主页面  也就是127.0.0.0
		controller:ListController,//控制这个模板的控制器为ListController
		templateUrl:"list.html"//访问主页面加载的模板为list.html
	}).
	//在id前加了一个冒号指定参数化URL
	//结合list的<td><a href="#/view/{{mail.id}}">{{mail.subject}}</a></td>就可以知道了
	when("/view/:id",{
		controller:DetaiController,
		templateUrl:"detail.html"
	}).
	//便于理解URL里的参数
	when("/:name/:sid",{
		controller:routeURL,
		templateUrl:"routeURL.html"
	})
	.
	//访问其他没有定义的页面统一跳转到"/"
	otherwise({
		redirectTo:"/"
	});
}
```

**配置路由**
```
//配置路由
aMailservices.config(["$routeProvider",AmailRouteConfig]);
```

**自定义邮件JSON**
```
var messages=[{
	id:0,sender:"aaa@aaa.com",subject:"第一封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["bbb@bbb.com","ccc@ccc.com"],message:"第一封测试邮件内容第一封测试邮件内容第一封测试邮件内容"
},
{
	id:2,sender:"ddd@ddd.com",subject:"第二封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["eee@eee.com","fff@fff.com"],message:"第二封测试邮件内容第二封测试邮件内容第二封测试邮件内容"
},
{
	id:3,sender:"aaa@aaa.com",subject:"第三封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["bbb@bbb.com","ccc@ccc.com"],message:"第三封测试邮件内容第三封测试邮件内容第三封测试邮件内容"
},]
```

**List.html控制器**
```
//控制List.html模板的控制器
//把邮件发送给邮件列表模板
function ListController($scope){
	$scope.data=messages;
}
```

**解析URL detail.html控制器**
```
//从路由信息（URL解析出来的）获取邮件id 然后找到正确的邮件对象
function DetaiController($scope,$routeParams){
	console.log($routeParams)
	$scope.mail=messages[$routeParams.id]
}
```


**理解route中的$routeParams**
在route配置中:即为捕获url中的参数
```
function routeURL($scope,$routeParams){
	console.log($routeParams)
	$scope.routeURL=$routeParams;
}
```

###自此一个简单的angular Amail就编写完毕了



