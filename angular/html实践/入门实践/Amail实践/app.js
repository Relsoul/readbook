//创建AMail服务
var aMailservices=angular.module("AMail",["ngRoute"]);

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

//配置路由
aMailservices.config(["$routeProvider",AmailRouteConfig]);

//自定义虚拟邮件
var messages=[{
	id:0,sender:"aaa@aaa.com",subject:"第一封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["bbb@bbb.com","ccc@ccc.com"],message:"第一封测试邮件内容第一封测试邮件内容第一封测试邮件内容"
},
{
	id:2,sender:"ddd@ddd.com",subject:"第二封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["eee@eee.com","fff@fff.com"],message:"第二封测试邮件内容第二封测试邮件内容第二封测试邮件内容"
},
{
	id:3,sender:"aaa@aaa.com",subject:"第三封测试邮件标题",date:"2015年8月28日23:36:05",recipients:["bbb@bbb.com","ccc@ccc.com"],message:"第三封测试邮件内容第三封测试邮件内容第三封测试邮件内容"
},]

//控制List.html模板的控制器
//把邮件发送给邮件列表模板
function ListController($scope){
	$scope.data=messages;
}

//从路由信息（URL解析出来的）获取邮件id 然后找到正确的邮件对象
function DetaiController($scope,$routeParams){
	//$routeParams 当前URL访问的参数
	console.log($routeParams)
	$scope.mail=messages[$routeParams.id]
}

//理解route中的$routeParams
function routeURL($scope,$routeParams){
	console.log($routeParams)
	$scope.routeURL=$routeParams;
}




