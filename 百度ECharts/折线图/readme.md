# 折线图的一些说明

###[tooltip](http://echarts.baidu.com/doc/doc.html#Tooltip)
提示框，鼠标悬浮交互时的信息提示，比如
```
{bollean}show true|false 显示|隐藏
{number}showDelay 20 显示延迟
```
其他的信息请看官网[范例](http://echarts.baidu.com/doc/example/tooltip.html)

###[legend](http://echarts.baidu.com/doc/doc.html#Legend)
图例，每个图表最多仅有一个图例
官网[范例](http://echarts.baidu.com/doc/example/legend.html)

###[toolbox](http://echarts.baidu.com/doc/doc.html#Toolbox)
工具箱，每个图表最多仅有一个工具箱
官网[范例](http://echarts.baidu.com/doc/example/toolbox.html)

###[calculable](http://echarts.baidu.com/doc/doc.html#Calculable)
拖拽计算
```
{boolean} false，是否启用拖拽重计算特性，默认关闭
```

###[xAis/yAxis](http://echarts.baidu.com/doc/doc.html#Xaxis)
点击标题参考文档

###[series](http://echarts.baidu.com/doc/doc.html#Series)
驱动图表生成的数据内容数组，数组中每一项为一个系列的选项及数据，其中个别选项仅在部分图表类型中有效，请注意适用类型
**点击标题直接去官网看文档吧**

###总结
**一个图表有这几大块**
第一:引入路径
```
require.config({
				//引入百度的路径
				paths:{
					echarts:"http://echarts.baidu.com/build/dist"
				}
			})
```

第二:引入需要的图表类型
```
	[
					//基类
					'echarts',
					//折线图
					'echarts/chart/line'
		],
```

第三:创建绘图所需的div
```
var myChart=ec.init(document.getElementById("main"));
```

第五:绘图
```
myChart.setOption(option);
```

**一个标准折线图图表有这几大元素**

第一:标题
```
//标题
						title:{
							//文本
							text:"未来一周气温变化",
							//子标题
							subtext:"纯属虚构"
						},//!-文本
						
```

第二:鼠标移入上去的提示框
```
//提示框
						tooltip:{
							//坐标轴触发显示
							trigger:"axis"
							
						},
```

第三:图例
```
//图例 每个图表只能有一个
							legend:{
								data:['最高气温','最低气温']
							},//!-图例
```

第五:工具箱
```
//工具箱 每个图表只能有一个
							toolbox:{
								//是否显示工具箱 图表右上角的一系列开关
								show:true,
								//特效duang
								feature:{
									//辅助线标志
									mark:{show:true},
									//数据视图 可以显示文本数据 
									//是否仅读？NO
									dataView:{show:true,readOnly:false},
									//可以切换更多的图形特效吗？
									//YSE! 可以切换line和bar类型
									magicType:{show:true,type:["line",'bar']},
									//卧槽！按错了，可以复原吗？
									//YES!
									restore:{show:"true"},
									//是否可以保存为图片？
									//YES!图片可以嵌入PPT里哦~
									saveAsImage:{show:true}
								},//！-特效
								
							},//!-工具箱
```

第六:横坐标
```
xAxis:[
								{
									//X轴为类目型
									type:"category",
									//是否两端留白？
									boundaryGap:false,
									//横坐标数据 
									//只有类目型的才配拥有data属性！
									data:["周一","周二","周三","周四","周五","周六","周日"]
									
								}
							],//!-横坐标
```

第七:纵坐标
```
yAxis:[
								{
									//Y轴类型为数值型
									type:"value",
									//Y轴的文本标签
									//改成 万°C会不会被喷？
									axisLabel:{
										//间隔名称..实际上就是单位 
										//{value}传递过来的就是值
										formatter:"{value}°C"
									}
								}
							],
							//!-纵坐标
```

第八:图表数据
```
	series:[
							//数据一
								{
									name:"最高气温",
									//必要的参数
									//不声明为line,电脑妹纸会知道你是个line？
									type:"line",
									//最高气温
									//对应周一-周日
									data:[11,11,15,13,12,13,10],
									//标注 也就是图表上的那个类似于提示气泡的东西
									markPoint:{
										data:[
											//会出现两个提示气泡
											//一周类当中最高气温最大为多少
											{type:"max",name:"最大值"},
											//一周类最高气温最低为多少
											{type:"min",name:"最小值"}
										]
									},
									//!-标注
```




