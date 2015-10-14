var app = angular.module("nodeChat", [])

//创建socket服务..看成对象即可
app.factory("socket", function($rootScope) {
	var socket = io("ws://127.0.0.1:3100/");
	return {
		//创建监听函数类似于
		/*
		 * socket.on("name",function(){})
		 *
		 * */
		on: function(eventName, callback) {
			socket.on(eventName, function() {
				var args = arguments;

				//这里用$apply是通知view更新

				//这里调用监听函数
				/*
				 * apply传入this与socket并无太大区别
				 * */
				$rootScope.$apply(
					function() {
						console.log(callback, socket)
						callback.apply(socket, args)
					}

				)
			})
		},
		emit: function(eventName, data, callback) {
			socket.emit(eventName, data, function() {
				var args = arguments;
				console.log(args)
				$rootScope.$apply(function() {
					if (callback) {
						callback.apply(socket, args)
					}
				})
			})
		}
	}
})

//创建自定义指令 滚动条始终在下 
app.directive("autoBottom", function() {
	return {
		link: function(scope, element, attrs) {
			//监听element(div.list_group)的子元素 如果有变化则调用下面的函数
			scope.$watch(function() {
					return element.children().length
				},
				//调用函数
				function() {
					//使用animate动画..设置eleme滚动条距离为滚动条的高..
					element.animate({
						scrollTop: element.prop("scrollHeight")
					}, 1000)
				})
		}
	}
})

//创建自定义指令 回车换行 ctrl+回车发送
//这里用ctrlBr对应html为 ctrl-br
app.directive("ctrlBr", function() {
	return function(scope, element, attrs) {
		console.log("run")
		var ctrlDown = false;
		element.bind("keydown", function(evt) {
			//按下的为ctrl 
			if (evt.which === 17) {
				//按下为true
				ctrlDown = true
				setTimeout(function() {
					ctrlDown = false
				}, 1000)
			}
			//按下的为回车
			if (evt.which === 13) {
				//如果ctrl已经按下 则
				if (ctrlDown) {
					//触发默认行为
					scope.$apply(function() {
						scope.$eval(attrs.ctrlBr)
					})
					evt.preventDefault()
				} else {
					//否则换行
					element.val(element.val() + "\n")
				}
			}
		})
	}
})

//控制消息发送
/*
 * 依赖注入两个服务 $scope ,socket
 * $scope 当前控制器作用域
 * */
app.controller("messageCtrl", function($scope, socket) {
	$scope.createMessage = function() {
		//发送 新消息事件
		socket.emit("messages.create", $scope.newMessage)
			//更新view newMessage为空
		$scope.newMessage = ""
	}
})



app.controller("roomCtrl", function($scope, socket, $rootScope) {
	$scope.messages = []
	socket.on("messages.read", function(messages) {
		/*//更新视图 上述已经更新过 这里仅仅是分析测试 
		$scope.$apply($scope.messages = messages)*/
		$scope.messages = messages
	})
	socket.on("messages.add", function(message) {
		/*		//更新视图 上述已经更新过 这里仅仅是分析测试 
					$scope.$apply($scope.messages.push(message))*/
		$scope.messages.push(message)

	})
	socket.emit("messages.read")

})