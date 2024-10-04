// 1、创建对象
// var arr = [1,2,3,4];
// var fn = function(){};
// var obj = {a:1,b:2};
// var date = new Date();
// console.log(arr instanceof Array,arr instanceof Object);//true true
// console.log(fn instanceof Function);//true
// console.log(obj instanceof Object);//true
// console.log(date instanceof Date);//true

// 2、每个对象都有属性constructor，可获取该对象的构造函数
// console.log(arr.constructor);//[Function: Array]
// console.log(obj.constructor);//[Function: Object]

// console.log([].constructor === arr.constructor);//true

// console.log(parseInt.constructor === fn.constructor);//true

//3、实例化（创建对象的过程）:Array Function Object Date
// var arr1 = new Array();
// var arr2 = [];//直接两创建数组就是new Array()的简写
// var obj1 = {};//直接两创建对象就是new Object()的简写
// console.log(arr1 === arr2);//false

// console.log(arr1 == arr2);//false

//4、自定义构造函数
function User(){

};

