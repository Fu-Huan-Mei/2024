// console.log(true*1);
// console.log(true+1);
// console.log(true-1);
// console.log(true*'1');
// console.log('hello'*false);//NaN

//取余：判断数据是否可做除法
// console.log(45%10);//5
// console.log(50%0);//NaN
// // console.log(50%10);//0

// //正负号：改变的是表达式的值，不会改变数据本身的值
// console.log(+true);//1
// console.log(-true);//-1
// console.log(+false);//0
// console.log(-false);//-0
// //改变的是表达式的值，不会改变数据本身的值
// var res = true;
// console.log(+res);//1
// console.log(res);//true
// console.log(+-1344);//-1344

//累加累减：数据（操作数）是变量，不可是直接量或表达式
// var num = 1;
// console.log(num++);//1
// console.log(num);//2
// console.log(num--);//2
// console.log(num);//1
// var num1 = 1;
// console.log(++num1);//2
// console.log(num1);//2
// console.log(--num1);//1
// console.log(num1);//1
// var r = true;
// console.log(r++);//1
// console.log(r);//2
// var n = null;
// console.log(n++);//0
// console.log(n);//1

// var str = '';
// //累加累减前的值作为表达式的值
// console.log(str++);//0
// //副作用的值都是累加累减后的值
// console.log(str);//1
// //累加累减后的值作为表达式的值
// console.log(++str);//2
// //副作用的值都是累加累减后的值
// console.log(str);//2

// var num = 10;
// //10-11+11+10+10=31
// var res = num++ - num-- + ++num + --num + num++;
/*num++  取值10   （变量值）副作用值11
num--    取值11   （变量值）副作用值10
++num    取值11   （变量值）副作用值11
--num    取值10   （变量值）副作用值10
num++    取值10   （变量值）副作用值11
*/
//累加累减看取值
// console.log(res);//30
//副作用的值只看num本身即变量值
//console.log(num);//11

var n = 1;
//原值   1  2  4  4   4  5      用这个值做累加累减计算
//变量值 2  3  4  3   4  5   
var res = (n++) + (n++) + (++n) + (n--) + (++n) + (--n);
var res2 = n++;
console.log(res2);//1
var res3 = res2++;
console.log(res3);//1
var res4 = ++res3;
console.log(res4);//2
var res5 = res4--;
console.log(res5);//2
var res6 = ++res5;
console.log(res6);//3
var res7 = --res6;
console.log(res7);//2
/*
num++   取值1  变量值2
n++     取值1  变量值2
++n     取值2  变量值4
n--     取值4  变量值3
++n     取值4  变量值4
--n     取值3  变量值3
*/
console.log(n,res);//3 18