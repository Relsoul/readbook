#引入外部模块 也就是package.json学习笔记 
##对应express2.js

###初始化package.json
**\`name`和\`描述\`不可用中文**
```
npm init
```

###写入依赖至package.json
* [没有指定 registry，没有指定的情况下，默认从 npm 官方安装]
* []
````
npm install express utility --save
```
* [是多了个 --save 参数，这个参数的作用，就是会在你安装依赖的同时，自动把这些依赖写入 package.json。命令执行完成之后，查看 package.json，会发现多了一个 dependencies 字段]
```
"dependencies": {
    "express": "^4.13.3",
    "utility": "^1.4.0"
  }
```

###取出get传递过来的参数
```
	//取出传递过来的code 比如 127.0.0.1/?code="123" 
	var q=req.query.code;
	console.log(req)
	//md5加密
	var md5V=utility.md5(q)
	//发送加密后的代码
	res.send(md5V)
```
