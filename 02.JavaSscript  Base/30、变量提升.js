// //创建变量
// //1、全局变量提升：先预处理，再赋值：
// //代码在执行前，进行预处理，会查找全局代码中的关键字var，提前将变量创建好但不赋值
// console.log(names);//undefined
// //console.log(age);//报错！！！不加var不提升！！!
// //正式执行声明变量的代码，只进行赋值操作
// var names = "小鬼";
// //没有var不提升，但浏览器会自动给创建var age = 18;[正式执行到才创建，不会提升！！！]
// age = 18;
// console.log(age);//18
// console.log(names);//小鬼

// //2、局部变量提升：先预处理（开辟内存空间占位子），再赋值：
// function func(){
//     console.log("创建前=",num);//创建前= undefined
//     var num = 1000;
//     console.log("创建后=",num);//创建后= 1000
// };
// //调用函数：先预处理，再赋值：
// //先执行直到调用函数的代码，正式执行函数体语句之前，会进行预处理，预处理过程中找函数中的var关键字，提前将变量创建好但不赋值
// func();

//-----------------------------------------
//创建全局变量
var count = 100;
var message = '你好，疯狗！';
//创建函数
function fn(){
    console.log('前=',count);//undefined
    console.log('前=',message );//'你好，疯狗！';
    //局部变量：加了var才是新变量，否则就是老变量，重新赋值
    var count = 200;
    //全局变量，修改全局变量！！！【作用域链】
    message = 'hello,dog！';
    console.log('后=',count);//200
    console.log('后=',message);//hello,dog！
};
//调用函数
fn();
console.log('全局变量=',count);//100
console.log('全局变量=',message );//hello,dog！