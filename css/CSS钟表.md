#CSS钟表

###基本解析
一个钟表有60个刻度,每个刻度之间相隔6°

###生成刻度线
```
for(var i=0;i<60;i++){
				//创建li
				var newLi=document.createElement("li");
				//添加到list
				oList.appendChild(newLi)
				//添加CSS规则
				sheet.insertRule("#wrap ul li:nth-of-type("+(i+1)+"){-webkit-transform: rotate("+(i*6)+"deg)}",0)
			}
```

###计算时钟,分钟,秒钟
```
setInterval(toTime,1000)
			//计算时间
			function toTime(){
				var oDate=new Date();
				var iSec=oDate.getSeconds();
				//分钟要把秒数加起来
				var iMin=oDate.getMinutes()+iSec/60;
				var iHour=oDate.getHours()+iMin/60;
				oSec.style.WebkitTransform="rotate("+iSec*6+"deg)";
				oMin.style.WebkitTransform="rotate("+iMin*6+"deg)";
				//时钟旋转度数为30度
				oHour.style.WebkitTransform="rotate("+iHour*30+"deg)";
			}
```


