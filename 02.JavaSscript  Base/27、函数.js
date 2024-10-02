// //系统函数：Number()、String()、Boolean()、isNaN()、isFinite()、parseInt()、parseFloat()、alert()、propmt()、Array()、new Array()、
// //对象的方法：console.log()、document.write()、数组.push()、数组.unshift()、数组.pop()、数组.shift()
// //函数
// console.log(typeof Number);//function
// //函数的调用
// console.log(typeof Number());//number
// //函数的组成：函数名
// var msg = "hello";//msg是一个值是字符串的变量
// var arr = [1,2,3,4];//arr是一个是是数组的变量
// Number;//是一个值是function的变量
// Number = 100;
// Number();

// //参数
// //函数调用表达式（函数的计算结果）
// var res = parseInt(17.738)
// console.log(res);//17
// var res1 = Array(1,2,3,3);
// console.log(res1);//[ 1, 2, 3, 3 ]

//1、创建函数
// //（1)第1种：function关键字
// //创建没参数的函数
// function fun(){
//     console.log("hello fun!");//hello fun!
// };
// //调用函数：函数名（）
// fun();//hello fun!
// //创建有参数的函数
// function fun1(name,age){
//     console.log("我是"+name+"今年"+age+"了！");
// };
// fun1("大头",18);//我是大头今年18了！
// fun1("小鬼",16);//我是小鬼今年16了！
// //创建1个有返回值的函数
// function fun2(num1,num2){
//     return num1 + num2;
// };
// var res = fun2(100,200);
// console.log(res);//300
// parseInt(1.3455);//没输出语句，浏览器也不知道输出到哪里，所以不能获取结果
// var res1 = fun2(12e2,100);
// console.log(res1);//1300
//（2）第2种：表达式方式
// var fun1 = funcion(){
//     console.log("hello world!");
// };
// fun1();
//（3）第3种：用Function函数创建函数
// var arr = Array();
// var num = Number();
// var fun01 = Function(console.log("hello world!"));
// //调用
// fun01();
//（4）第4种：构造函数

// //创建函数
// function fn(){
//     console.log("我是fn");
// };
// fn();//我是fn
// //系统函数：都有返回值
// var res = Array();
// console.log(res);//[]
// var res1 = Array;
// console.log(res1);//[Function: Array]

// //创建函数
// function fn1(){
//     return 10 * 5;
// };
// //返回值
// console.log(fn1());

// function fn2(){
//     return fn1();
// };
// console.log(fn2());
// function fn3(){
//     var sum = 100 * 2 + 300;
//     return;
// };
// console.log(fn3());
// function fn4(){
//     var sum = 100 * 2 + 300;
// };
// console.log(fn4());

// function fn5(){
//     console.log(100);//100
// };
// var res1 = fn5;
// var res2 = fn5();
// console.log(res1);//[Function: fn5]函数本身
// console.log(res2);//undefined没返回值

//参数
// //实参：调用函数时传递的数值(直接量，变量，表达式)
// parseInt(19.099e1);
// var num = 100.13466;
// parseInt(num);
// parseInt(num+199);

//形参：创建函数时使用的参数
//形参：没有赋值的变量
//可在函数中使用
// function fn6(name,age){
//     console.log("我叫"+name,"今年"+age+"了!");
// };
// //调用函数时传递实参，实参用于给形参赋值
// fn6("小鬼",18);

// //形参和实参的数量问题
// function fun7(name1,name2){
//     console.log(name1+"和"+name2+"跳舞");
// };
// fun7("小鬼","小富");
// fun7("贾宝玉","林黛玉");
// //实参>形参，按照顺序赋值
// fun7("张翰","郑爽","古力娜扎");
// //实参<形参
// fun7();

// //形参的默认值
// function func1(name,age,address){
//     //ES5的方式给形参设置默认值
//     if(age === undefined){
//         age = 20;
//     };
//     if(address === undefined){
//         address = "云南保山";
//     };

//     console.log("name=",name,"age=",age,"address=",address);
// };
// func1("搞笑了","");

//     //ES6的方式给形参设置默认值
// function func2(name="笑笑",age=18,address="上海"){
//     console.log("name=",name,"age=",age,"address=",address);
// };
// //按顺序赋值
// func2("搞笑了",20,"上海");
// func2("搞笑了", "上海");

// //arguments
// function fun3(arg1,arg2){
//     // console.log(arg1,arg2);//1 2
//     // console.log(arguments);//[Arguments] { '0': 1, '1': 2, '2': 3 }【类数组】
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);
//     }
//     arguments = 100;
//     //系统创建的变量，既然是变量，就可修改变量的值！但是系统创建的函数内部使用的变量
//     // console.log(arguments);
// };
// fun3(1,2,3);

//创建函数，该函数计算所有参数的和
// function sum(){
//     var res = 0;
//     for(var i=0;i<arguments.length;i++){
//         res += arguments[i];
//     };
//     return res;
// };
// console.log(sum(10e2,102,2910));
// console.log("全局sum=",sum);//全局sum= [Function: sum]

//创建全局变量
// var username = "小鬼";
// console.log('全局username=',username);
// function f1(){
//     console.log("函数内部=",username);
// };
//for循环类似于while循环
// for(var i=0;i<=10;i++){
// console.log(i);
//     var age = i + 10;
//i++其实是在这个位置
// };
// console.log('全局i,age=',i,age);//11 20
// if(true){
//     var address = "上海";
// };
// console.log("全局address=",address);


// //局部变量
// var age;
// function func3(){
//     //局部变量
//     var address = "保山";
//     age = 10;//不规范代码，不建议使用（缺陷）
//     console.log("函数内部=",address,age);
// };
// func3();
// // console.log(address);//报错
// // console.log('函数外部全局变量=',age);

//关键：自己要学会分析代码怎么执行！！！
//全局变量
var age = 10;
var name = "小鬼"
function func4() {
    var age = 20;
    //修改变量的值
    age = 30;//局部变量
    name = "张三";//全局变量
    console.log("函数里的age,name=", age, name);//30 张三
};
func4();
console.log("函数外的age,name=", age, name);//10 张三

//区分全局变量和局部变量
var name01 = 100;
var name02 = 200;
//创建函数
//形参：局部变量
function func5(name01, name02) {
    name01 *= 2;
    name02 *= 2;
    console.log("局部变量=",name01, name02);//200 400
};
func5(name01,name02);
console.log("全局变量=",name01,name02);//100 200