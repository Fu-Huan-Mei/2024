// //创建数组
// var arr = [1,2,3,4];
// console.log(arr);
// //获取对象的原型：对象.__proto__【隐式原型】
// console.log(arr.__proto__);
// //获取对象的原型：对象的构造函数.prototype【显式原型】
// console.log(Array.prototype);//Object(0) []
// console.log(arr.__proto__ === Array.prototype);//true

// var arr1 = [19,20,30,40];
// var arr2 = ['hello','world'];
// console.log(arr1.__proto__ === arr2.__proto__);//true
// console.log(arr1.length);//4
// console.log(arr2.length);//2

//自定义构造函数时原型的使用
// function Person(name,age,address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
// };
// //将方法添加到Person的实例的原型上
// Person.prototype.addShopCart =function(product){
//     console.log(this.name+'将'+product+'添加到购物车!');
// };
// Person.prototype.buy = function(product){
//     console.log(this.name+'购买了'+product);
// };
// //实例化：this指向实例对象，所以这些属性直接加到了对象本身
// var p1 = new Person('小鬼',18,'上海');
// // console.log(p1);
// p1.addShopCart('洗洁剂');
// p1.buy('洗发水');
// var p2 = new Person('张三',20,'保山');
// // console.log(p2);
// p2.addShopCart('洗洁剂');
// p2.buy('洗发水');

//原型题目分析
// var arr1 = [10,20,30,40];
// arr1.age = 18;
// arr1.__proto__.ages = 200;
// Array.prototype.address = '上海';
// console.log(arr1.age);//18
// console.log(arr1.ages);//200
// console.log(arr1.address);//上海

// var arr2 = ['a','b','c'];
// console.log(arr2.age);//undefined
// console.log(arr2.ages);//200
// console.log(arr2.address);//上海
// //给arr2对象自身加上address属性
// arr2.address = '背景';
// console.log(arr1.address);//上海
// console.log(arr2.address);//背景

//判断属性是否属于对象本身：hasOwnProperty
// var arr3 =  ['a','b','c',20];
// arr3.age = 18;
// arr3.say = 'hello';
// Array.prototype.address = '上海';
// console.log('length' in arr3);
// console.log('push' in arr3);

//创建对象的同时设置原型：原型提前准备好，实例化时将对象与原型关联
var obj1 = {};
console.log(obj1.__proto__);
var obj2 = Object.create([1,2,3,4]);
console.log(obj2);
var obj3 = Object.create(new String('hello!'));
console.log(obj3);
//创建没有原型的对象
var obj4 = Object.create(null);
console.log(obj4);//[Object: null prototype] {}

