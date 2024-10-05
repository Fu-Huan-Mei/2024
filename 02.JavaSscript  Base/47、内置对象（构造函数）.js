//Number
// var num = 100.2253;
// //toFixed()：保留小数位（四舍五入）
// console.log(num.toFixed(2));//100.23
// //toString()：
// console.log(num.toString());//100.2253
// console.log(num.toString(16));//10进制：64.39ad42c3c9f
// console.log(Number.MIN_VALUE);//5e-324
// console.log(Number.MAX_VALUE);//1.7976931348623157e+308

//String
var msg = 'Hello Worlderyug!';
// console.log(msg.charAt(2));//l
// console.log(msg.indexOf('l'));//2
// console.log(msg.lastIndexOf('l'));//9
// console.log(msg.indexOf('s'));//-1
// console.log(msg.slice(4,10));//o worl
// console.log(msg.substr(4,3));//
// console.log(msg.toUpperCase());//HELLO WORLDERYUG!
// console.log(msg.toLowerCase());//hello worlderyug!
// console.log(msg.charCodeAt(1));//101
// console.log('A'.charCodeAt(0));//65

//Math
// console.log(Math);//Object [Math] {}
// console.log(Math.abs(-124.3));//124.3
// console.log(Math.pow(2,20));//2的20次方(1048576)
// console.log(Math.sqrt(4));//开平方根(2)
// console.log(Math.floor(1234.4566));//向下取整：1234
// console.log(parseInt(1234.4566));//1234
// console.log(Math.ceil(1234.4566));//向上取整：1235
// console.log(Math.round(1234.4566));//1234
// console.log(Math.max(1,2,35,90));//90
// console.log(Math.min(1,2,35,90));//1

//Date
// console.log(new Date());//2024-10-05T06:34:04.904Z
// //实例化日期：指定日期时间
// console.log(new Date('2008-09-18T10:06:06'));//2008-09-18T02:06:06.000Z
// console.log(new Date('2008-09-18 10:06:06'));
// //数字表示月份：从0开始
// console.log(new Date(1949,10,1,10,10,2));//1949-11-01T02:10:02.000Z
// //实例化日期对象：参数时间戳
// //时间戳：1970年距离目标日期的毫秒数
// console.log(new Date(360000000));//1970-01-05T04:00:00.000Z
//指定日期格式显示给用户
var date = new Date();
// console.log(date.getFullYear());//2024【公元纪年】
// console.log(date.getMonth()+1);//月：从0开始计算  10
// console.log(date.getDay());//星期：6
// console.log(date.getDate());//日期：5
// console.log(date.getHours());//14
// console.log(date.getMinutes());//55
// console.log(date.getSeconds());//51
// console.log(date.getMilliseconds());//335
// console.log('时间戳=',date.getTime());//时间戳= 1728111351335

// console.log(date.getUTCDay());//6
// console.log(date.getUTCDate());//5
// console.log(date.getUTCHours());//7
// console.log(Date.toString(18));
// console.log(new Date());

// console.log(Date.now());//1728112259563
// console.log(Date.UTC(2000,10,5,15,11));//973437060000

//Array
// var age = [1,2,3,5];
// age.push(89);
// console.log(age);

// var ages = [1,2,3,4,5,6,7];
// var prices = ['1','2','3','4','7'];
// console.log(ages.concat(prices));
/**
 * [
  1,   2,   3,   4,   5,
  6,   7,   '1', '2', '3',
  '4', '7'
]
 */
// console.log(ages.concat([90,80,70,60]));
/**
 * [
   1, 2,  3,  4,  5,
   6, 7, 90, 80, 70,
  60
]
*/
// console.log([
//     1, 2,  3,  4,  5,
//     6, 7, 90, 80, 70,
//    60
//  ].slice(0,4));//[ 1, 2, 3, 4 ]【不包含后面】
// console.log([
//   1, 2, 3, 4, 5,
//   6, 7, 90, 80, 70,
//   60
// ].join());//1,2,3,4,5,6,7,90,80,70,60
// console.log('1,2,3,4,5,6,7,90,80,70,60'.split());//[ '1,2,3,4,5,6,7,90,80,70,60' ]
// console.log('1,2,3,4,5,6,7,90,80,70,60'.split(','));
/**
 * [
  '1',  '2',  '3',  '4',
  '5',  '6',  '7',  '90',
  '80', '70', '60'
]
 */
//判断是否存在某个元素
console.log([
  1, 2, 3, 4, 5,
  6, 7, 90, 80, 70,
  60,100,7
].indexOf(2));//1
console.log([
  1, 2, 3, 4, 5,
  6, 7, 90, 80, 70,
  60
].lastIndexOf(7));//6

var user =  {age:19};
var users = [
  {age:18},
  user
];
console.log(users.indexOf({age:19}));//-1
//为什么使用变量？因为变量存储内存地址，凡是使用user就指向一个内存地址（内存空间）
console.log(users.indexOf(user));//6
