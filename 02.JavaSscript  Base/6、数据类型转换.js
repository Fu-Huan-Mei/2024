//1、其他类型转number
//函数：Number(参数)
//（1）字符串->number：只有纯数字字符串才可转为有效数字，否则转为NaN
// console.log(Number("hello"));//NaN
// console.log(Number('1'));//1
// console.log(Number('1.3456'));//1.3456
// console.log(Number('text.xls'));//NaN
// console.log(Number('0xab'));//16进制  171
// console.log(Number('045'));//45
// console.log(Number('22222   2'));//NaN
// console.log(Number('    2344.14 '))//2344.14
// console.log(Number(' '));//0
//（2）布尔值->number
// console.log(Number(true));//1
// console.log(Number(false));//0
//（3）null->number
// console.log(Number(null));//0
// //（4）undefined->number
// console.log(Number(undefined));//NaN

//其它->string：String()函数
// console.log(String(12.333));
// console.log(String(true));
// console.log(String(false));
// console.log(String(null));
// console.log(String(undefined));

//其它->boolean：Bollean()函数
console.log(Boolean(false));
console.log(Boolean(-112));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(Infinity));
console.log(Boolean(null));
console.log(Boolean(undefined));