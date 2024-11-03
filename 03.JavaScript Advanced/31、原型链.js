var arr = [];
console.log(arr.constructor);//[Function: Array]
console.log(Array.prototype.constructor);//[Function: Array]
console.log(arr.hasOwnProperty('constructor'));//false

//自定义构造函数
function Foo(){};
//Foo的两个实例
//原型链：f1、f2->Foo.prototype->Object.prototype
var f1 = new Foo();
var f2 = new Foo();
//Object的两个实例
//原型链：o1、o2->Object.prototype
var o1 = {};
var o2 = {};
//原型链：Foo、Object、Function->Function.prototype->Object.prototype
