//引入express模块
var express =require("express");
//实例化express
var app=express();
var port=3100;

//挂载静态资源
/*
 * __dirname:nodejs运行目录
 * */

app.use(express.static(__dirname + '/static'))

/*
 * req:客户端请求
 * res:服务端发送
 * */
app.use(function(req,res){
	//客户端访问发送index.html
	res.sendfile("./static/index.html")
})

//引入io模块同时监听port(3100)端口
var io=require("socket.io").listen(app.listen(port,function(){console.log("服务器正在"+port+"运行")}))
var messages=[]
//建立io连接
io.sockets.on("connection",function(socket){
	/*
	 * 下面开始监听/发送 socket事件
	 * */
	//服务端发送connected事件
	socket.on("messages.read",function(){
		socket.emit("messages.read",messages)
	})
	socket.on("messages.create",function(message){
		messages.push(message)
		socket.emit("messages.add",message)
	})
	
	
	
	
})
