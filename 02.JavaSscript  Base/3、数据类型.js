// var userName = "张三";
// console.log(userName,typeof userName);//张三 string
// var isActive = true;
// console.log(isActive,typeof isActive);//true boolean
// console.log(typeof(isActive));

// //整型
// var n1 = 123;//十进制
// n1 = 0x12;//16进制  18
// console.log(n1);
// //浮点型
// var n2 = 1.23;
// console.log(n2+0.1);//1.33
// console.log(0.1+0.2);//0.30000000000000004
// //科学计数法表示number  e=10
// var n3 = 1.2e3;
// console.log(n3);//1200
// var n4 = 2.3e-2;
// console.log(n4);//0.023

// console.log(NaN,typeof(NaN));//NaN number

// console.log(NaN*123);//NaN
// console.log(NaN==NaN);//false
// console.log(isNaN("hll"));//true
// console.log(isNaN(123));//false
// console.log(isNaN(null));//false
// console.log(isNaN(NaN));//true

// //数字的有效范围
// var n5 = 4.5e400;
// console.log(n5);//Infinity（正无穷）
// console.log(Number.MAX_VALUE);//1.7976931348623157e+308（最大数）
// console.log(Number.MIN_VALUE);//5e-324（最小数）
// console.log(3e-400);//0
// console.log(Infinity,-Infinity);

console.log(isFinite(100));//true
console.log(isFinite(Infinity));//false
console.log(isFinite(-Infinity));//false
console.log(isFinite(NaN));//false
console.log(isFinite(4e500));//false