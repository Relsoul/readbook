###构造器模式
**创建对象**
```
	//构造器模式
			//两种方式都会创建一个新的空对象
			var newObject={};
//			var newObject=new Obj();
			//创建与继承
			//创建一个空对象
			var person=Object.create(null)
			//设置属性
			Object.defineProperties(person,{
				'someKey':{
					value:"hello",
					writable:true
				},
				'anotherKey':{
					value:"foo bar",
					writable:false
				}
			})
			//继承
			var driver=Object.create(person)
			var defineProp=function (obj,key,value){
				var config={};
				config.value=value;
				Object.defineProperty(obj,key,config)
			}
			defineProp(driver,'spped','100mph')
			console.log(driver)
```

###基本构造器