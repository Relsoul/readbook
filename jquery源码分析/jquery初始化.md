#jquery初始化
(21-94)
传入window
1. 访问速度更快
2. 方便压缩
undefined属于window的一个属性 某些浏览器下可以修改

###rootjQuery
```
//$(document)，
//方便压缩,方便维护
rootjQuery,
```

###core_strundefined = typeof undefined,
```
//用type of判断 和undefined判断不同
			window.a==undefined;
			//老版本浏览器下判断是一个xml的时候需要用到
			typeof window.a=='undefined'
```

###存储一些变量
```
	location = window.location,
	document = window.document,
	docElem = document.documentElement,
```