/**
 * Created by soul on 14/03/2016.
 */


// 属性的简洁表示
/*
*
* 只写属性名，不写属性值。这时，属性值等于属性名所代表的变量。
*
*
* */
var foo="bar";
var baz={foo};
baz;//{foo:bar}
function f(x,y){
    return {x,y}
}
/*
* 方法也可以简写
*
* */
var birth="2000/01/01";
var Person={
    name:"张三",
    birth,
    hello() {console.log("my name is",this.name)}
};

// 属性名表达式
/*
*属性名表达式与简洁表示法，不能同时使用，会报错。
*
* */
let obj1={
    ["h"+"ello"]() {
        return "hi";
    }
};


//object.is()
/*
*
* 用来比较两个值是否严格相等
* babel不支持.慎用
* */
Object.is("foo","foo");//true
Object.is({},{});//false


//Object.assign()
/*
*
*
* Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
*
*
*
* */

var target = { a: 1 };

var source1 = { b: 2 };
var source2 = { c: 3 };

Object.assign(target, source1, source2);
console.log(target); // {a:1, b:2, c:3}

/*
* 对象的解构赋值
* babel还不支持 了解
*
* */
/*let {x,y,...z}={x:1,y:1,a:3,b:4};
* x // 1
 y // 2
 z // { a: 3, b: 4 }
*
* */
/*let z={a:3,b:4}
let n={...z}*/


































