// // var r = 100;
// // //修改变量的值
// // r=800;
// // console.log(r=111111);//111111
// // console.log(null==undefined);//true
// // console.log(null==true);//false
// // console.log(null===undefined);//false

// // console.log(r++);//111111
// // console.log(++r);//111113

// var n = 1;
// n += 1;//n = n + 1;
// console.log(n);//2
// n -= 1;//n = n -1;
// console.log(n)//1
// n *= 99;//n = n * 99;
// console.log(n)//99
// n /= 5;//n = n / 5;
// console.log(n);//19.8
// n %= 10// n = n % 10
// console.log(n);//9.8
// var str1 = 'hello';
// var str2 = 'world';
// console.log(str1+str2);//helloworld
// console.log(str1 + str2);//helloworld

// console.log(typeof 1111);//number
// console.log(typeof '');//string
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined
// console.log(typeof typeof '1234');//string

// //逗号元素运算符：同时创建多个变量并赋值
// var a = 100,b=200,c=300;
// //同时修改多个变量的值
// a = 1000,c = 3890;
// console.log(a,b,c);//1000 200 3890
var res = (a=666,c=888);
console.log(res);//888


console.log(1+1);//2
//只要有一个操作数是string，就是字符串连接
console.log('1'+'1');//11
console.log(1+'1');//11
console.log(+1);//1


console.log(1+true);//2
console.log(1+false);//1

//null->number：0
console.log(1+null);//1
//undefined->number：NaN
console.log(1+undefined);//NaN

console.log()

