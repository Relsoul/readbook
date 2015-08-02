#常用指令

###ng-hide与nd-show
ng-hide指令，用于控制部分HTML元素不可见(ng-hide="false")和可见状态(ng-hide="true")
ng-show指令也是一样的 只是行为相反 下文演示ng-hide
```
<div ng-app="" ng-init="show=false">
<button ng-click="show=!show">clickme</button>
<p ng-hide="show">显示</p>
<p ng-hide="!show">隐藏</p>
</div>

```

###ng-repeat
ng-repeat指令，遍历一个数据集合中的每个数据元素，并且加载HTML模版把数据渲染出来
ng-repeat指令对于集合中(数组中)的每一项都会渲染一次HTML元素。
```
<div ng-app="" ng-init="names=[{name:'soul',age:12},{name:'relsoul',age:13},{name:'hun',age:14}]">
<table>
	<tbody>
		<tr ng-repeat="x in names">
			<td>{{"name:"+x.name+",age:"+x.age}}</td>
		<tr>
	</tbody>
</table>
</div>
```

###过滤器
使用AngularJS过滤器可以实现对字符串的大小写转换、货币格式的转换、数组的过滤等等。
用法：管道字符(|)+过滤器名。
```
//uppercase 转为大写
//lowercase 转为小写
//currency，可以将数字转换成货币格式
<div ng-app="">
	请输入:<input ng-model="name">
	<p>结果为：{{name|currency}}</p>
</div>

```


###过滤数组选择子集
实际上就是过滤查找- -
 filter过滤器可以过滤数组并从中选择出一个子集出来，用法是“filter:模型名称”，示例如下：
```
<div ng-app="" ng-init="friends = [
   {name:'tom', age:16},
   {name:'jerry', age:20}, 
   {name:'garfield', age:22}]">
 
<p>输入过滤:<input type="text" ng-model="name"></p>
 
<ul style="list-style-type:none">
<li>姓名，年龄</li>
  <li ng-repeat="x in friends | filter:name">
    {{ x.name + ' , ' + x.age }}
  </li>
</ul>
 
</div>
```









