// function func(num1, num2) {
//     console.log('func函数中的this,num1,num2=', this, num1, num2);
//     return num1 + num2;
// };
// var user = {
//     name: '张三',
//     getInfo: func//引用赋值
// };
// // user.getInfo(18,19);
// //直接调用函数：window调用,this指向window
// // func(10,20);
// // console.log(func.call.length);//1
// //call()：函数会被call间接调用，call调用func的同时课设置函数里面的this，返回值就是调用的函数返回值
// var res = func.call({name:'张三'},1,2,3,4);
// user.getInfo.call([1,2,3],10,30);
// console.log(res);

// apply调用函数并设置this，与call区别，apply只能接收2个参数，第2个参数是数组,func需要几个参数，数组里就写几个元素
// func.apply('hello',[1,2]);
// user.getInfo.apply(new Date());

// 使用forEach遍历字符串
var str = 'hello张三';
//forEach谁调用就遍历谁，因为this就指向这个对象，所以使用call改变this指向时，第1个参数就要指向这个对象，第2个参数就是function(){}回调函数
// [].forEach.call(str, function (item, index, arr) {
//     console.log(item, index, arr);
// //对象的属性值：函数类型的数据->类型：Function
// console.log([].forEach);
// //为什么forEach遍历的是this？

// //call()的返回值就是reduceRight的返回值
// var str1 = [].reduceRight.call(str, 
//     function (prev, item) {
//         return prev + item;
//     }
// );
// console.log('str1=', str1);

// //reduceRight哪个数组调用，就遍历哪个数组
// console.log([].reduceRight);//[Function: reduceRight]

//使用forEach和apply
// [].forEach.apply(str, [function (item, index, arr) {
//     console.log(item, index);
// }]);

function func(num1, num2) {
    console.log('func函数中的this,num1,num2=', this, num1, num2);
    return num1 + num2;
};
//bind()：this，固定指向bind()方法中的参数，不会因为调用者改变this指向,，返回新函数
//写法1：传递1个参数：第1个参数：this指向
var fn1 = func.bind([10,20,30,40,50]);
fn1(66,88);//unc函数中的this,num1,num2= [ 10, 20, 30, 40, 50 ] 66 88
//写法2：传递2个参数：第1个参数：this指向，第2个参数：10000
var fn2 =func.bind([10,20,30,40,50],10000);//第1个参数固定为10000
//只传第2个参数
fn2(88);//func函数中的this,num1,num2= [ 10, 20, 30, 40, 50 ] 10000 88 
//写法3：传递3个参数：第1个参数：this指向，第2个参数：100，第3个参数：200
var fn3 =func.bind([10,20,30,40,50],100,200);
fn3();//func函数中的this,num1,num2= [ 10, 20, 30, 40, 50 ] 100 200