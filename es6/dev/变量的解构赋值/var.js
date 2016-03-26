/**
 * Created by soul on 11/03/2016.
 */

// 通过数组的声明来声明
var [a,b,c]=[1,2,3];
let [e,f,g]=[1,2,3];

let [foo,[[bar,baz]]]=[1,[[[2]],3]];//foo 1 bar 2 baz 3

let [,,third]=["foo","bar","baz"];//third baz

// 给定默认值的解构
let [x=2333]=[undefined];
//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

function f(){
    console.log("aaa")
}

let [xx=f()]=[1];

//对象的解构 必须同名才能取到
var {test1,test2}={test1:"aaa",test2:"bbb"};

//let和const是不允许重复声明变量的,对象的解构也是一样

//嵌套赋值
let obj={};
let arr1=[];
({foo:obj.prop,bar:arr[0]}={foo:123,bar:true});
obj; // {prop:123}
arr1; // [true]

// 解构默认值
var {x2=3}={};
x2;//3

var {x3,y2=5}={x:3};
x3 //1
y2 //5


let s1=1;
{
    let s1=2;
}

//字符串解构
const [a3,b3,c3,d3,e3]="hello";


