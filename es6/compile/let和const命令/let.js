/*


/!**
 * Created by soul on 10/03/2016.
 *!/

//let与const

// let声明的变量只有在let命令所在的代码块内有效
{
    let a=10;
    var b=1;
}

//用let来写for循环就是特别适合的
for(let i=0;i<10;i++){
    console.log(i)
}
// console.log(i); 无法在外界访问到!

var a=[];
for(let i=0;i<10;i++){
    a[i]=function(){
        console.log(i)
    };
}
a[6]();//6

// 不存在变量提升
 console.log(foo);//undefined
console.log(bar);// referenceError
var foo=2;
let bar=2;

//暂时性死区
var tmp=123;
if(true){
    tmp="abc";//referenceError
    let tmp
}
//在块级作用域类,使用let命令声明变量之前,该变量都是不可用的
if(true){
    //TDZ开始
    tmp="abc";//refenerceError
}

//所以使用type of 并不是一个百分百安全的操作

//函数中的死区
function bar(x=y,y=2){
    //x=y的时候,y还未被声明
}

//函数本身的作用域,再其所在的块级作用域内
function  f(){console.log("i m outside")}
(function(){
    if(false){
        function  f(){console.log('i am inside')}
    }
    f()
}());
//执行后会得出"i am inside"
{
    let a="secret";
    function f(){
        return a;
    }
}
f();//报错
//如果需要调用块级作用域内部定义的函数,
let f;
{
    let a="secret";
    f=function(){
        return a;
    }
}
f();

//const 声明的为常量 一但声明常量的值就不能改变
const PI=3.1415;
PI=3;
PI;//3.1415
//常规模式时,重新赋值无效,但是不报错
//const与let只在声明所在的块级作用域内有效,同时也不是变量提升,不可重复声明

//const 声明对象只是保证变量名指向的地址不变,并不保证地址数据不变*/
"use strict";