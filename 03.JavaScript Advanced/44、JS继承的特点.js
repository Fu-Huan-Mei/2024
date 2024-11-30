//1、面向对象的继承规则
//（1）父类（对应JS中的构造函数）：class
//（2）
//2、JS中继承关系的特点（原型继承的特点）
//（1）对象可以继承它的原型上的属性
//（2）对象的构造函数，它的原型的构造函数也可描述子类、父类的关系

//3、实现JS中构造函数和构造函数之间的继承
//（1）原理：
//对象A的原型是对象B，对象A的构造函数是子类，对象B的构造函数是父类
//子类的实例以父类的实例为原型
//一个对象只有1个原型，原型可作为多个对象的原型
//1个父类可有多个子类，1个子类只有1个父类

//数组：构造函数是Array
// var arr = [];
//原型链：arr->Array.prototype->Object.prototype
//构造函数：   Array                Object
//Array是子类、Object是父类

// //（2）实现：
// function A(){}
// function B(){}
// //A作为父类，B作为子类：子类的实例以父类的实例为原型
// //子类的实例
// console.log(new A().__proto__ === A.prototype);//true
// //设置B的实例的原型是A的1个实例
// B.prototype = new A();

//实现JS中的父类子类继承
// //定义商品类
// function Product(){
//     //给实例设置属性
//     this.price = 100;
//     this.num = 1000;
//     //给实例设置方法
//     this.discount = function(){
//         this.price *= num;
//     };
//     this.buy = function(){
//         this.num -= 1;
//     };
// }
// //子类
// function CarProduct(){
   
// }
// //实现继承：子类的原型指向父类的实例对象？为什么？？？？
// CarProduct.prototype = new Product();
// CarProduct.prototype.constructor = CarProduct;

// const obj = { a: 1, b: 2 };
// for (let key in obj) {
//   console.log(key); // 输出 'a' 和 'b'
// }

// const arr = [3, 5, 7];
// for (const value of arr) {
//   console.log(value); // 输出 3, 5, 7
// }

// //主线程：执行JS线程
// //创建定时器，同步任务
// //定时器的回调函数是异步任务，需要满足条件且主线程空闲才会执行
// setTimeout(function(){
//     console.log("定时器执行了！");
// });
// //同步任务
// console.log(100);
// console.log(200);

// function Person(name) {
//     this.name = name;
//   }
//   const person = new Person('Kimi');
//   //因为构造函数没有返回值，所以 new Person('Kimi') 的结果就是最初创建的实例对象，即 person 对象
//   console.log(person); 
//   console.log(person.name);

// function Person() {
//     return { name: 'Kimi' }; // 返回一个对象
// }
//   const person = new Person();
//   //new Person() 的结果就是这个返回的对象，而不是最初创建的实例对象
//   console.log(person); //{ name: 'Kimi' }

function Person(name) {
    this.name = name; // 使用构造函数参数设置属性
  }
  //调用 new Person('Kimi') 时，this 被绑定到了新创建的 person实例对象上，这意味着构造函数内部的 this 引用指向新创建的实例对象上，this指向实例对象
  const person = new Person('Kimi');
  //this.name = 'Kimi' 实际上是在 person 对象上设置了 name 属性
  console.log(person); //Person { name: 'Kimi' }
  console.log(person.name); //Kimi