//引入http库
var superagent=require("superagent");
//引入node jquery库
var cheerio=require("cheerio")
//引入express
var express=require("express")


//实例化express
var app=express();

app.get("/",function(req,res,next){
	superagent.get("http://emufan.com").end(function(err,sres){
		//常规错误处理
		if(err){
			return next(err)
		}
		// sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
      // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
      // 剩下就都是 jquery 的内容了
      var $=cheerio.load(sres.text);
      var items=[];
      console.log(sres.text)
      //获取标题内容
      var title=$("title").text()
      items.push(title)
      $(".post-title").each(function(idx, element){
      	//获取文章标题内容
      	var elem=$(element)
      	items.push({
      		"tz-title":elem.text()
      	})
      })
       res.send(items)
	})
	
})

app.listen("3000",function(req,res){
	console.log("run")
})
