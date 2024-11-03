// function A(){

// };
// function B(){

// };
// //A作为父类 B作为子类
// //子类的实例以父类的实例为原型
// //B的实例的构造函数是B
// B.prototype = new A(); 

// //同步任务和异步任务
// //创建定时器本身是同步任务
// //但定时器的回调函数：异步任务：满足执行条件且主线程空闲才可执行
// setTimeout(() => {
//     console.log('定时器执行了！');
// }, 0);
// //同步任务
// console.log(100);
// console.log(200);

//问题描述：请写出最终的输出值，并解释原因
var value1 = 0, value2 = 0, value3 = 0;
 
for (var i = 1; i <= 3; i++) {
    var i2 = i;
    (function () {
        var i3 = i;
        // 每次循环都开启一个定时器,但是定时器的回调函数在循环结束后才会执行！！！！！
        setTimeout(function () {
            value1 += i;//value1 = value1 + i
            value2 += i2;
            value3 += i3;
        }, 1);
    })();
}

// for 循环结束之后 全局变量i的值是4， 全局变量i2的值是3
setTimeout(function () {
    console.log(value1);     // 12
    console.log(value2);     // 9  
    console.log(value3);     // 6=1+2+3
}, 100);