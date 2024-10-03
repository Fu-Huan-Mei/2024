// //高阶函数
// //1、返回值是一个函数
// function fun(){
//     var sum = 100 +2e34;
//     return function(){
//         console.log('求和sum*2=',sum*2);
//     };
// };
// fun();//没输出
// var res = fun();//输出：[Function (anonymous)]
// res();//输出：求和sum*2= 4e+34

// //2、高阶函数：参数是个函数
// function func(cb){
//     //cb实参接受这个形参函数
//     cb(100,200);//调用函数并传递实参

// };
// //调用func函数时，把匿名函数作为形参传递
// func(function(a,b){
//     console.log("我是回调函数！",a,b);
// });

// //3、高阶函数：参数和返回值都是函数
// function funct(n1,n2,cb){
//     //n1=100,n2=200
//    return cb(n1,n2);
// };
// var res = funct(100,200,function(a,b){
//     //形参a接受实参n1的值，形参b接受实参n2的值
//     return a-b;
// });
// console.log(res);//-100

//回调函数和作用域
//作用域与调用位置无关！！！
var num = 10;
function fn01(fn){
    var num = 20;
    fn();
};
function fn02(){
    console.log(num);//10【注意：全局变量和局部变量只看定义/创建该函数的地方，不看调用该函数的地方噢！！！】
};
fn01(fn02);
