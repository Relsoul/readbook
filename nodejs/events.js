var event=require("events").EventEmitter
var life=new event();

life.on("run",function(who){
	console.log(who+"在走路")
})
life.on("run",function(who){
	console.log(who+"在跑")
})
/*life.removeAllListener()//全部移除监听事件*/

var isEmit=life.emit("run","mm")
console.log(isEmit)//true

console.log(life.listeners("run").length)//run监听数量


