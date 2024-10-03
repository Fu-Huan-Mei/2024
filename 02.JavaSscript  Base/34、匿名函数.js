//以下都只是1种数据类型
//1、数字直接量
// var num = 100;
// console.log(num * 45);
// console.log('');
//2、数组直接量
// console.log([1,2,3].length);
// console.log([1,2,3][1]);
//3、函数直接量(匿名函数)
// (function(){
//     console.log("我是一个函数！");
// })();
//4、IIFE 立即调用函数->产生自己独立的作用域
//避免全局变量污染
(function(){
    var address = '保山';
    console.log("我是立即调用函数!局部变量address=",address);
})();
//console.log("全局变量address=",address);//报错
//5、不加分号产生了两个语法问题：连续执行两个IIFE
//（1）解决方法1：
(function(){
    console.log(100);
})();//加分号
(function(){
    console.log(200);
})();
//（2）解决放法2：
(function(){
    console.log(100);
})()
//加上一元运算符
!(function(){
    console.log(200);
})();