###利用eventproxy进行并发爬虫

###引入相关模块
```
//引入http库
var superagent=require("superagent");
//引入node jquery库
var cheerio=require("cheerio")
//引入express
var express=require("express")
//引入url库
var url=require("url");
//引入并发库
var eventproxy=require("eventproxy")
//引入文件管理
var fs = require('fs');
```


###爬取首页文章链接
```
var emufan="http://emufan.com"
superagent.get(emufan)
```
**获取到爬取到的数据后再进行下一步操作 也就是要在end后进行操作**

###遍历文章链接获取文章内容
```
	//遍历文章链接获取文章内容
		links.forEach(function(post_link){
			superagent.get(post_link).end(function(err,res){
				if(err){
					return console.log(err)
				}
				//每一次遍历都并发处理
				eq.emit("title_href",[post_link,res.text])
			})
		})
```

###并发处理
```

//创建并发器
var eq=new eventproxy()

/*	eq.after(name,count,function)
 * name要与下面的eq.emit相同
 * count要与下面的foreach次数相同
 * 
 * */
	eq.after("title_href",links.length,function(post_inner){
		//并发后所有的数据都储存在了post_inner内
		//在下面的forEach循环后获取到数据存储至post_inner后 
		//post_inner格式为[[url,inner],[url,inner]]
		console.log(post_inner)
		//重新定义数组
		post_inner=post_inner.map(function(arr_elem){
		//	arr_elem[0]=链接 arr_elem[1]=内容
		var $=cheerio.load(arr_elem[1])
		return({
			url:arr_elem[0],
			title:$(".post-title").text(),
			inner:$(".post-content").text()
		})
		})
		
	
	})

eq.after("title_href",links.length,function(post_inner){
		//在下面的forEach循环后获取到数据存储至post_inner后 
		//post_inner格式为[[url,inner],[url,inner]]
		console.log(post_inner)
		//重新定义数组
		post_inner=post_inner.map(function(arr_elem){
		//	arr_elem[0]=链接 arr_elem[1]=内容
		var $=cheerio.load(arr_elem[1])
		return({
			url:arr_elem[0],
			title:$(".post-title").text(),
			inner:$(".post-content").text()
		})
		})
		
	
	})
```



