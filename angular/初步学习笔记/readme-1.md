#个人初步学习感受

###argular初始化
```
//创建一个div 并在div上声明一个初始化属性
//ng-app:初始化
//ng-init:声明初始化的一些属性
//通过{{data}}来输出绑定的属性
<div ng-app="" ng-init="name='hello';data=['argular','one']">
{{name}} <br>
{{data[0]}}
</div>
```

###argular绑定 ng-model
ng-model把相关处理事件绑定到指定标签上，
这样我们就可以不用在手工处理相关事件(比如change等)的条件下完成对数据的展现需求。
```
//通过ng-model绑定数据 然后再通过{{data}}输出
<div ng-app="">
<input ng-model="name">
<br>
你输入的值为:{{name}}
</div>
```

###解析后生成数据 ng-bind
在angular未解析完成之前会暴露模板比如{{name}}这种字符串
所以可以采用ng-bind来实现绑定
ng-bind绑定的是这个值/数据 也就是下文的name,
name可以算是一个数据了
```
<div ng-app="">
<input ng-model="name">
<p>你输入的是<span ng-bind="name"></span></p>
</div>
```

###单击事件 ng-click 
ng-hide="true"，设置HTML元素不可见。
```
<div ng-app="" ng=init="hide=false">
		<button ng-click="hide=!hide">click me</button>	
		<div ng-hide="hide">
			input you name<input ng-model="inputvalue">
			<br>
			<span ng-bind="inputvalue"></span>
		</div>	
<div>

```


















