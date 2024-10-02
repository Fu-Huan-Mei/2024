// //函数提升：function关键字创建的变量，预处理阶段直接就创建并赋值了，所以可以调用该函数（其实就是把函数整体做了提升）
// //2、使用函数变量
// console.log('语句前',fn01);//[Function: fn01]  （我想错了，我以为是undefined，其实是整个函数整体了）
// fn01();
// //1、创建函数变量
// //正式执行到该语句时，直接用即可
// function fn01(){
//     console.log('我是fn01');
// };
// console.log('语句后',fn01);

// //创建函数：表达式
// console.log('语句前',fn02);//语句前 undefined
// // fn02();//报错！！！
// var fn02 = function(){
//     console.log('我是fn02');
// };
// console.log('语句后',fn02);//语句后 [Function: fn02]
// //正式执行后进行赋值
// fn02();//我是fn02


//3、使用变量
console.log(add);//🔺代码刚开始执行时，add值是[Function: add]
add();
//var和function
//1、使用var创建变量
//🔺执行到这里时对add重新赋值进行了修改
var add = 'hhh';//变量提升【光找到var】->创建
//2、使用function创建函数
function add(){//函数提升【找到funcion并且要赋值】->创建并赋值
    console.log("我是函数add");//我是函数add
};
console.log(add);//hhh[到34行代码，add的值是hhh字符串了，所以字符串不能调用]
add();
//自始至终就只有1个变量add，只是刚开始时add的值是函数，后来被修改重新赋值为了字符串'hhh'