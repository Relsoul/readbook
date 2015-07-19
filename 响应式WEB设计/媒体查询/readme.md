# 媒体查询:支持不同的视口

###支持程度
IE9+,FF3.6+,Chrome4+,Safari4+,Oprea9.5+,Android2.1+,IOS safari3.2+

###媒体查询能检测的特效(摘选)
- width:视口宽度
- height:视口高度
- device-width:设备屏幕宽度
- device-height:设备屏幕高度
- orientation:设备处于横向还是纵向

###一个媒体查询
```
//import 会增加HTTP请求，影响加载速度
//屏幕宽度在200px-360px之间
import url("phone.css") screen and (min-width:200px) and (max-width:360px);
```

###低版本兼容库
Respond.js为IE8以及更低版本增加媒体查询功能

###从固定设计着手
从固定的960px设计开始设计window的效果,同时保持设计中图片的精简

###阻止浏览器自动调整页面大小
```
//放大两倍的设备屏幕宽度效果
//initial-scale=2.0 放大两倍
//width=device-width 设备宽度
<meta name="viewport" content="initial-scale=2.0,width=device-width">
```
控制可缩放范围与禁止缩放
```
//maxinum-scale=3 用户最大调整缩放为3倍
//minimun-scale=0.5 用户最小调整缩放为0.5倍
//user-scalable=no 禁止用户缩放
<meta name="viewport" content="maxinum-scale=3,minimun-scale=0.5,width=device-width，user-scalable=no">
```

###针对不同的视口宽度修正设计
```
//最大宽度为768px的设备进行调整
@media  screen and (max-width: 768px) {
				#nav{
				//do sth
				}
			}
```

###响应式设计中内容始终优先
多平台多视口的情况下保留尽可能多的内容，而不是使用display:none或者类似的方法来隐藏内容

###媒体查询只是必要条件之一
媒体查询只能根据设备特性应用对应的样式.一但超出应用样式的范围，媒体查询将无法生效如上面那段代码 如果屏幕宽度大于768px那么将无法生效

###我们需要流动布局
如果针对已知的特定访问设备，可以单独使用媒体查询来制作理想的设计效果，我们已经见过配适768px有多简单，但是这种策略有严重的缺陷，换句话说，它不能适应未来的变换。
目前的效果更像是一个自适应，而不是我们想要的响应式。我们设计应该在突变之前保持灵动.





