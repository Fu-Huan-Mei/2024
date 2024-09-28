// // //&&：全真才真，一假全假
// // //2个数据都是布尔值
// // // console.log(true&&true);//true
// // // console.log(true&&false);//false
// // // console.log(false&&false);//false
// // //数据不是布尔值，会被转为布尔值再比较
// // //如果第一个数成立，取第二个数
// // // console.log(true&&666);//666
// // // //如果第一个数不成立，取第1个数
// // // console.log(null&&888);//null
// // // console.log(Boolean(''));//false
// // var n = 0;
// // var res = n++ && ++n;
// // //数据值n    0  
// // //表达式值  0+1=1
// // console.log(res);//0
// // console.log(n);//1

// // //获取用户输入年龄 18~60
// // var age = 18;
// // //分析：age > 18为false ,说明第1个值不成立，则取第1个值
// // var res = age > 18 && age < 60;
// // console.log(res);//false

// //逻辑或：
// //如果第1个操作数成立，则取第1个操作数作为表达式的值

// // console.log(false || true);//true
// // console.log(1 || true);
// // console.log('hello' || 100);
// // console.log(null || 100);
// // console.log(undefined || 666);

// var num = 0;
// var res = num++ || ++num;
// //数据值n    0   2
// //表达式值   1    2
// console.log(res);//2
// console.log(num);//2

//逻辑非：取反的值作为表达式的值
console.log(!true);//false
console.log(!0);//true
console.log(!null);//true
