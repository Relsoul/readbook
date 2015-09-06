//引入express
var express=require("express");
var app=express();
//res:服务器输出至浏览器内容
//req:浏览器请求的一些内容
app.get("/",function(req,res){
	res.send("hello world")
})
app.listen(3000,function(){
console.log("正在运行")
})