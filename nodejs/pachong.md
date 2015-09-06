#一个简单的爬虫实例

###爬网页
**当获取完毕后**
```
superagent.get("http://emufan.com").end()
```

###获取网页html
网页html储存在sres.text
```
  var $=cheerio.load(sres.text);
```

###使用nodejs版的jquery
```
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
```

##注意:必须要在爬行完后再res.send() 也就是代码必须在superagent.get("http://emufan.com").end()下
