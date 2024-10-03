//取参数的最大值
// function max(){
//     //定义变量记录最大值
//     var res1  = arguments[0];
//     for(var i=0;i<arguments.length;i++){
//         if(res1<arguments[i]){
//             res1 = arguments[i];
//         };
//     };
//     return res1;
// };
// var res2 = max(1,2,3,4);
// console.log(res2);

//取参数的最小值
// function min(){
//     //定义变量记录最大值
//     var res3  = arguments[0];
//     for(var i=0;i<arguments.length;i++){
//         if(res3>arguments[i]){
//             res3 = arguments[i];
//         };
//     };
//     return res3;
// };
// var res4 = min(1,2,3,4);
// console.log(res4);

//变量提升
// var num = 10;//全局变量
// function fun(){
//     var num = 20;//局部变量
//     //1、我的误区：找上层作用域时竟然看函数调用位置，错了！！！应该看函数定义（创建/声明的地方）
//     fun2();
// };
// //2、创建fun2函数的地方，所以上层作用域就是全局作用域了
// function fun2(){
//     console.log(num);//10 2、上层作用域就是全局了!自己本身就没有num这个变量！！
// };
// fun();

//原因：预处理阶段只有var关键字创建的变量才会提升
// console.log(a);//报错！！
// a = 0;

// console.log(b);//undefined
// var b = 0;
// console.log(b);//0

// console.log(c);//[Function: c]
// function c(){//函数提升：预处理既创建变量同时赋值
//     console.log("我是函数");
// };
// var c = "我是变量";//变量提升：预处理阶段：只创建变量不赋值
// console.log(c);//我是变量

// console.log(d);//[Function: d]
// d++;
// console.log(d);//关键点：Function-》Number：NaN++的结果还是 NaN
// var d = "我是变量d";//创建变量d
// function d(){console.log("我是函数d");};//既创建变量d同时给d赋值为Function
// console.log(d);// 我是变量d

console.log(e);//正确答案：undefined（全局）
//我的答案：[Function: e]？？为什么是undefined？？？？题目看错了！以为是e函数！！！哈哈哈，低级错误！！
var e = 0;
console.log(e);//0（全局）
function fun3(){
    console.log(e);//undefined（局部）
    var e = 1;
};
fun3();
console.log(e);//0（全局）

