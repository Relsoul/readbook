//引入mongodb
var mongo=require("mongodb");
//连接mongo
var host="localhost";
//使用mongo默认端口
var port=27017;
var server=new mongo.Server(host,port,{auto_reconnect:true});
var db=new mongo.Db("testdb",server,{safe:true})
db.open(function(err,db){
	if(err){throw err;}
	else{
		console.log("数据库连接成功");
		db.close();
	}
});
//监听数据库关闭事件
db.on("close",function(err,db){
	if(err){throw err;//返回错误信息
	}
	else{
		console.log("成功关闭数据库") 
	}
})



