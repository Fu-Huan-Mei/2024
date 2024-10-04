// //原型链
// var arr = [1,2,4];
// console.log(arr);//[ 1, 2, 4 ]  
// //第一层
// console.log(arr.__proto__);//Object(0) []   Array类型对象
// console.log(Array.prototype);//Object(0) []  Array类型对象
// //第二层
// console.log(arr.__proto__.__proto___);//[Object: null prototype] {}
// console.log(Array.prototype.__proto__);//[Object: null prototype] {}  Object类型对象
// //第三层
// console.log(Array.prototype.__proto__.__proto__);//null

// //原型链和构造函数
// //构造函数的特殊之处：Array是构造函数，也是函数
// //Array的实例对象的原型
// var arr = [];
// //arr的原型Array.prototype，Array.prototype的构造函数是Object
// console.log(Array.prototype);//Object(0) []
// //顶层原型
// console.log(Object.prototype);//[Object: null prototype] {}

// //Array是个函数，Array的构造函数是Function
// console.log(Array);
// //Function.prototype是Array的原型，Function.prototype的构造函数是Object
// console.log(Function.prototype);
// //顶层原型
// console.log(Object.prototype);

// //Object是个函数，Object的构造函数是Function
// console.log(Object);
// //Function.prototype是Object的原型，Function.prototype的构造函数是Object
// console.log(Function.prototype);
// //顶层原型
// console.log(Object.prototype);

// //Function是个函数，构造函数是Function
// console.log(Function);
// console.log(Function.prototype);
// //Function.prototype是Function的原型，Function.prototype的构造函数是Function
// console.log(Function.__proto__ === Function.prototype);//true
// //顶层原型
// console.log(Object.prototype);

// //原型链的题目分析
// var arr = [];
// Array.prototype.username = '小小';//相当于arr.__proto__.name = '小小'
// Function.prototype.age = 18;
// Object.prototype.addrees= '上海';//相当于arr.__proto__.__proto__.addrees= '上海'【顶层原型】
// //主要看原型链中有没有这个属性即可！！！

// //原型链：arr->Array.prototype->Object.prototype
// // console.log(arr.username);//小小
// // console.log(arr.__proto__.username);//小小
// // console.log(arr.age);//undefined
// // console.log(arr.addrees);//上海
// // console.log(arr.__proto__.__proto__.addrees);//上海
// //Array函数的原型Array.__proto__指向Function.prototype,Function.prototype.__proto__指向Object.prototype

// //原型链：Array->Function.prototype->Object.prototype
// console.log(Array.username);//undefined
// //Array.age可以在Function.prototype.age = 18;这个原型链上找到值18
// console.log(Array.age);//18
// console.log(Array.addrees);//上海

// var arr1 = [10,20,30];
// console.log(arr1 instanceof Array);//true
// console.log(arr1 instanceof Object);//true
// console.log(arr1 instanceof Function);//false

// //fn->Function.prototype->Object.prototype
// var fn = function(){};
// //user->fn.prototype->Object.prototype
// var user = new fn();
// console.log(user instanceof fn);//true
// console.log(fn.prototype.__proto__);//[Object: null prototype] {}
// console.log(user instanceof Function);//false

// //constructor属性
// //arr->Array.prototype->Object.protitype
// var arr2 = [1,2,3,4,5];
// console.log(arr2);
// //arr2.constructor使用的是原型上的constructor属性
// console.log(arr2.constructor);//[Function: Array]
// //Array.prototype.constructor用的是自身上的constructor属性
// console.log(Array.prototype.constructor);//[Function: Array]
// console.log(Object.prototype.constructor);//[Function: Object]

// var user = {};
// console.log(user.constructor === Array.prototype.constructor);//false
// console.log(user.constructor);//[Function: Object]
// console.log(Object.prototype);//[Object: null prototype] {}

//原型链图解
//创建构造函数
function Foo(){};
//f1实例Foo->Foo.prototype->Object.prototype
//f1实例的构造函数是Foo
var f1 = new Foo();
var f2 = new Foo();
console.log(f1.__proto__);//{}
console.log(f1.__proto__  === Foo.prototype);//true
console.log(Foo.prototype.__proto__);//[Object: null prototype] {}
//创建Object类型对象
//o1对象->Object.prototype
//o1构造函数是Object
var o1 = {};
var o2 = {};
console.log(o1.__proto__);//[Object: null prototype] {}
console.log(Object.prototype === o1.__proto__);//true
var fn = function(){};
//fn->fn.__proto__ === Function.prototype->Function.prototype.__proto__->Object.prototype
//构造函数Function.__proto__ === Function.prototype->
