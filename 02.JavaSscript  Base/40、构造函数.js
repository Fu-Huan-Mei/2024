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

//4、自定义构造函数（数据类型）:User与Array、Fuction、Object同为构造函数
// function User(username,userage,useraddress){
//     console.log("我是User构造函数");
//     //设置User实例的属性（描述用户特点：this关键字，表示User的实例对象）
//     this.name = username;
//     this.age = userage;
//     this.address = useraddress;
//     //功能
//     this.addShopcart = function(product){
//         console.log(this.name + "将"+product+"加入购物车")
//     };
//     this.buy = function(product){
//         console.log(this.name + "购买了"+product)
//     };
// };
// //实例化构造函数创建1个对象
// var u1 = new User('小鬼',18,'上海');
// console.log(u1 instanceof User);//true
// console.log(u1.constructor === User);//true
// var u2 = new User();
// console.log(u1 === u2);//false
// console.log(typeof(u1));//object
// console.log(typeof User);//function
// u1.addShopcart('吉他');

//5、自定义构造函数
// function Product(){
//     console.log("Product执行");
//     return [1,2,3,4];
//     console.log("Product结束");
// };
// //创建实例化对象
// var p = new Product();
// //（1）不写return
// console.log(p);//Product {} 新对象构造函数Product的实例
// //（2）写了return

//6、构造函数和函数的返回值 Array Function Object
// function People(){
    
// };
// var r1 = new People();
// var r2 = People();
// console.log(r1);//User {}
// console.log(r2);//undefined
// //如何实现实例化和调用该函数时打印结果相同？
// //答：return复杂类型数据（对象类型数据），就可使构造函数和函数返回结果相同

// //调用和实例化结果相同
// function Product(){
//     return function(){};
// };
// var p1 = Product();
// var p2 = new Product();
// console.log(p1,p2);//[Function (anonymous)] [Function (anonymous)]
// console.log(Product.constructor);//[Function: Function]
// console.log(p1.constructor);//[Function: Function]


// function fun(){
    
// };
// var res = fun();
// console.log(res);

//7、原始数据的对象特性
//创建数字：无论处于什么状态，需要什么形式就会转为什么状态
// //（1）直接量创建 值状态
// var num1 = 886;
// //（2）函数创建 值状态
// var num2 = Number(888);
// //（3）构造函创建 对象状态
// var num3 = new Number(666);
// console.log(num1,num2,num3);//886 888 [Number: 666] 
// //num3自动转为值的状态
// console.log(num1+num3);//1552
// //num1、num2自动包装为对象状态
// console.log(num1.constructor);//[Function: Number]
// console.log(num2.constructor);//[Function: Number]
// console.log(num1 instanceof Number);//false
// console.log(num2 instanceof Number);//false

// console.log('hello'.constructor);//[Function: String]
// console.log(true.constructor);//[Function: Boolean]
// console.log('hello'.length);//5
// console.log('hello'[0]);//h
// console.log(1.12.constructor);//[Function: Number]
// console.log((134).constructor);


// var arr = [];//数组：对象类型：因为本身就是对象类型，不需要包装成对象
// arr.age = 19;
// console.log(arr.age);//19

// //原始类型数据临时包装成对象：默认为值得状态，当成对象去使用时，临时new XXX（）创建1个对象，增删改查都是对临时对象操作
// var msg = '';//字符串：原始类型
// //将msg包装成对象：new String(msg),临时创建1个对象，给临时创建的对象添加属性info，本语句执行完，临时对象自动销毁
// msg.info = 'hello！';  
// //使用mag.info，又临时创建新对象new String(msg)，从该临时对象中读取属性address，用完即毁
// console.log(msg.info);//undefined【使用不存在的属性，自动得到undefined】