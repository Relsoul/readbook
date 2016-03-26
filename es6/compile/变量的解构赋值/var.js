"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/**
 * Created by soul on 11/03/2016.
 */

// 通过数组的声明来声明
var a = 1;
var b = 2;
var c = 3;
var e = 1;
var f = 2;
var g = 3;
var foo = 1;
var _ref = [[[2]], 3];

var _ref$ = _slicedToArray(_ref[0], 2);

var bar = _ref$[0];
var baz = _ref$[1]; //foo 1 bar 2 baz 3

var _ref2 = ["foo", "bar", "baz"];
var third = _ref2[2]; //third baz

// 给定默认值的解构

var _undefined = undefined;
var x = _undefined === undefined ? 2333 : _undefined;
//如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

function f() {
    console.log("aaa");
}

var _ = 1;
var xx = _ === undefined ? f() : _;

//对象的解构 必须同名才能取到

var _test1$test = { test1: "aaa", test2: "bbb" };
var test1 = _test1$test.test1;
var test2 = _test1$test.test2;

//let和const是不允许重复声明变量的,对象的解构也是一样

//嵌套赋值

var obj = {};
var arr1 = [];
var _foo$bar = { foo: 123, bar: true };
obj.prop = _foo$bar.foo;
arr[0] = _foo$bar.bar;

obj; // {prop:123}
arr1; // [true]

// 解构默认值
var _ref3 = {};
var _ref3$x = _ref3.x2;
var x2 = _ref3$x === undefined ? 3 : _ref3$x;

x2; //3

var _x = { x: 3 };
var x3 = _x.x3;
var _x$y = _x.y2;
var y2 = _x$y === undefined ? 5 : _x$y;

x3; //1
y2; //5

var s1 = 1;
{
    var _s = 2;
}

//字符串解构
var _hello = "hello";

var _hello2 = _slicedToArray(_hello, 5);

var a3 = _hello2[0];
var b3 = _hello2[1];
var c3 = _hello2[2];
var d3 = _hello2[3];
var e3 = _hello2[4];