// //创建数组
var nameList = ['小鬼','艾米','张三','李四','丽丽','南南'];
// //数组放法 forEach();遍历数组
// //加上（）调用forEach函数：实参：需要1个函数
// //高阶函数：forEach()
// nameList.forEach(
//     //1、匿名函数作为回调函数：我创建的、我没调用、但却执行了：function
//     function(){
//         console.log("函数被调用了");
//         // console.count();
//     }
// );

// //2、有名字的函数作为回调函数
// function func(){
//     //函数调用次数与数组元素个数有关
//     console.log("我是func函数");
// };
// //forEach调用了func函数
// nameList.forEach(func);
// //func()函数调用表达式无返回值，自动得到undefined
// // nameList.forEach(func());//报错：因为undefined不可作为回调函数

//3、使用forEach遍历数组
//创建函数给的：形参
//调用函数给的：实参
nameList.forEach(function(item,index,arr){
    console.log("创建函数给的：形参item,index,arr=",item,index,arr);
    /**
     * 创建函数给的：形参item,index,arr= 小鬼 0 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
创建函数给的：形参item,index,arr= 艾米 1 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
创建函数给的：形参item,index,arr= 张三 2 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
创建函数给的：形参item,index,arr= 李四 3 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
创建函数给的：形参item,index,arr= 丽丽 4 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
创建函数给的：形参item,index,arr= 南南 5 [ '小鬼', '艾米', '张三', '李四', '丽丽', '南南' ]
     */
})