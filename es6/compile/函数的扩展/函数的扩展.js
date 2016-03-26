"use strict";

var _console, _console2;

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

function log(x) {
    var y = arguments.length <= 1 || arguments[1] === undefined ? "World" : arguments[1];

    console.log(x, y);
}
log("hello");

// 解构赋值
/*
*
*
*
* */
function foo(_ref) {
    var x = _ref.x;
    var _ref$y = _ref.y;
    var y = _ref$y === undefined ? 5 : _ref$y;

    console.log(x, y);
}
foo({}); //undefined,5
foo({ x: 1 }); //1,5
// foo();// 不是对象,变量x,y都不会生成

function fetch(url, _ref2) {
    var _ref2$body = _ref2.body;
    var body = _ref2$body === undefined ? "" : _ref2$body;
    var _ref2$method = _ref2.method;
    var method = _ref2$method === undefined ? "GET" : _ref2$method;
    var _ref2$header = _ref2.header;
    var header = _ref2$header === undefined ? {} : _ref2$header;

    console.log(method);
}
fetch("http://xxx.com", {}); //GET
// fetch("http://xxx.com");//报错
/*
* 可以为函数第二个参数默认赋值为一个变量
* */
function fetch(url) {
    var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var _ref3$body = _ref3.body;
    var body = _ref3$body === undefined ? "" : _ref3$body;
    var _ref3$method = _ref3.method;
    var method = _ref3$method === undefined ? "GET" : _ref3$method;
    var _ref3$header = _ref3.header;
    var header = _ref3$header === undefined ? {} : _ref3$header;

    console.log(method);
}
fetch("http://xxx.com"); //不会报错

// rest参数
/*
* rest参数后不能有其他参数,即rest只能是最后一个参数
*
* */
function add() {
    for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
    }

    console.log(values);
}
add(2, 3, 5); //[2,3,5]

//扩展运算符

/*
*rest参数的逆运算,将一个数组转为用逗号分隔的参数序列
*
* */
(_console = console).log.apply(_console, [1, 2, 3]);
(_console2 = console).log.apply(_console2, [1].concat([2, 3, 4], [5]));
/*
* 代替数组的apply方法
* */
function f(x, y, z) {}
var args = [0, 1, 2];
f.apply(undefined, args);
/*
* 合并数组
* */
var first = 1;
var rest = [2, 3, 4, 5];

first; //1
rest; //[2,3,4,5]

//箭头函数

var f = function f(v) {
    return v;
};
var sum = function sum(num1, num2) {
    return num + num2;
};
var getTempItem = function getTempItem(id) {
    return { id: id, name: "Temp" };
};
[1, 2, 3].map(function (x) {
    return x * x;
});
var result = [1, 4, 7].sort(function (a, b) {
    return a - b;
});
/*
*  （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。

   （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。

   （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
* */

function Timer() {
    var _this = this;

    this.seconds = 0;
    setInterval(function () {
        return _this.seconds++;
    }, 1000);
}
var timer = new Timer();
setTimeout(function () {
    return console.log(timer.seconds);
}, 3100);
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
var foo1 = {
    id: 4,
    sayId: function sayId() {
        console.log(this.id);
    }
};
var bar1 = {
    id: 6
};
/*var test=bar1::foo1.sayId;
console.log(test.id);*/