/**
 * Created by soul on 11/03/2016.
 */

// 函数参数默认值
/*
*
* 如果函数的参数等于undefined
* 那么则赋值为默认值
*
* */

function log(x,y="World"){
    console.log(x,y)
}
log("hello");


// 解构赋值
/*
*
*
*
* */
function foo({x,y=5}){
    console.log(x,y)
}
foo({});//undefined,5
foo({x:1});//1,5
// foo();// 不是对象,变量x,y都不会生成

function fetch(url,{body="",method="GET",header={}}){
    console.log(method)
}
fetch("http://xxx.com",{});//GET
// fetch("http://xxx.com");//报错
/*
* 可以为函数第二个参数默认赋值为一个变量
* */
function fetch(url,{body="",method="GET",header={}}={}){
    console.log(method)
}
fetch("http://xxx.com");//不会报错



// rest参数
/*
* rest参数后不能有其他参数,即rest只能是最后一个参数
*
* */
function  add(...values){
    console.log(values)
}
add(2,3,5);//[2,3,5]

//扩展运算符

/*
*rest参数的逆运算,将一个数组转为用逗号分隔的参数序列
*
* */
console.log(...[1,2,3]);
console.log(1,...[2,3,4],5);
/*
* 代替数组的apply方法
* */
function f(x,y,z){

}
let args=[0,1,2];
f(...args);
/*
* 合并数组
* */
const [first,...rest]=[1,2,3,4,5];
first;//1
rest;//[2,3,4,5]

//箭头函数

var f=v=>v;
var sum=(num1,num2)=>num+num2;
var getTempItem=id=>({id:id,name:"Temp"});
[1,2,3].map(x=>x*x);
var result=[1,4,7].sort((a,b)=>a-b)
/*
*  （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

   （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

   （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
* */

function Timer(){
    this.seconds=0;
    setInterval(()=>this.seconds++,1000)
}
var timer=new Timer();
setTimeout(()=>console.log(timer.seconds),3100);
//3

/*
*
* 函数绑定
* ::
* foo::bar;
 // 等同于
 bar.bind(foo);

 foo::bar(...arguments);
 // 等同于
 bar.apply(foo, arguments);
* */
var foo1={
    id:4,
    sayId:function(){
        console.log(this.id)
    }
};
var bar1={
    id:6
};
/*var test=bar1::foo1.sayId;
console.log(test.id);*/


















