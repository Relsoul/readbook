#拥抱流式布局

###固定布局经不起未来考验

###为什么响应式设计需要百分比布局
使用百分比布局创建流动的弹性界面,同时使用媒体查询来限制元素的变动范围，
将这两者组合到一起构成了响应式设计的核心，基于此可以创建出真正完美的设计。

###将网页从固定布局修改为百分比布局

###需要牢记的公式
**目标元素宽度/上下文元素宽度=百分比宽度**
```
HTML
<div id="warpper">
			<div id="header">
				<div id="navigation">
					<ul>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
						<li><a href=""></a></li>
					</ul>
				</div>
			</div>
			<div id="sidebar"></div>
			<div id="content"></div>
			<div id="footer"></div>
		</div>
CSS
	#warpper{
				width: 960px;
			}
			#header{
				width: 940px;
			}
			#navigation{
				margin-left:-10px;
				padding-left:10px;
				padding-right:10px;
				width: 940px;
			}
			#navigation ul li{
				display:inline-block
				margin-right:2.6595745%;// 25px/940px
			
			}
			#navigation ul li a{
					margin-right:25px;
			}
			#content{
				width: 698px;
			}
			#sidebar{
				width: 220px;
			}
			#footer{
				width: 940px;
			}
```

###设置百分比元素的上下文
利用warpper来作为网页中百分比宽度元素（内容区,侧边栏,页脚）的上下文
后面的小数点可以提供更加精确的数值，使显示效果更精确
请注意公式为**目标元素宽度/上下文元素宽度=百分比宽度**
上下文元素宽度指的是目标元素的父级元素.
```
			#warpper{
				width: 960px; /*控制最外层的div*/
				width:96%; //当然设置为100%与96%全凭爱好设置
			}
			
			#header{
				width: 940px;
				width:97.916667%;//  940px/960px=97.916667%;
			}
			#navigation{
				margin-left:-1.0416667%;// 10px/960px
				padding-left:1.0416667%;// 10px/960px
				padding-right:1.0416667%;// 10px/960px
				width: 940px;
				width:97.916667%;//  940px/960px=97.916667%;
			}
			#navigation ul li{
				display:inline-block
				margin-right:2.6595745%;// 25px/940px
			
			}
			#navigation ul li a{
					//940px为#navigation的宽度
					//但是a的上下文元素为li所以我们得移上去
					//margin-right:2.6595745%;// 25px/940px
			}
			#content{
				width: 698px;
				width:72.7083333%// 698/960=72.72.7083333%
			}
			#sidebar{
				width: 220px;
				width:22.70833333% // 218/960=22.70833333%
			}
			#footer{
				width: 940px;
				width:97.916667%;//  940px/960px=97.916667%;
			}
```

###用em替换px
**目标元素尺寸/上下文尺寸=百分比尺寸**
body{
	font-size:100%;
	font-size:16px;
	font-size:1em;
	//上面三条都是等价的
}

#logo{
	font-size:48px;
	font-size:3em;// 48px/16px=3em;
}
#content h1{
font-size:69px;
font-size:4.3125em;// 69px/16px=4.3125em;
}

#content h1 span{
inline-height:40px;//行高的大小相对于元素本身
inline-height:1.0526em;// 40px/38px 
font-size:38px;
font-size:0.550724em;// 38px/69px=0.550724em;
}

```


###弹性图片
自动缩放到与容器100%匹配
```
img,object,video,embed{
max-width:100%
}
```
这种方法有几个问题
1. 要提前准备一张足够大的图片,以备大视口设备使用
2. 无论视口多大，都需要下载超大图片


###让图片随视口缩放
删除img标签上设置的固定宽度如
```
<img width=300 height=200>
```
删除完毕后,图片大小会缩放至充满包裹元素的100%

###为特定图片指定特定规则
为一些特定的图片追加class来控制大小
```
HTML
<img class="sideImage">

CSS
img{
max-width:100%
}
.sideImage img{
 max-width:45%
}

```









