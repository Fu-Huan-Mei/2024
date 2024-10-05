// //实现思路一：字符串转换
// function concat(str){
// //将字符串分割为数组
// var arr = str.split('-');//[ 'get', 'element', 'by', 'id' ]
// var newStr = '';
// //遍历数组
// arr.forEach(function(item,index){
//     if(index === 0){
//         newStr += item.toLowerCase();
//     }else{
//         newStr += item[0].toUpperCase()+item.slice(1).toLowerCase();
//     }
// });
// //将数组合拼接为字符串
// console.log(newStr);
// };
// concat('get-element-by-id');

// //实现思路二：字符串拼接
// var arr = 'get-element-by-id'.split('-');
// var newArr = arr.map(function(item,index){
//     return index === 0 ?  item.toLowerCase() :  item[0].toUpperCase()+item.slice(1).toLowerCase()
// });
// //将数组转为字符串
// var newStr = newArr.join('');
// console.log(newStr);

// //实现思路三：字符串拼接
// //将数组转为字符串：链式调用
// var str = 'get-element-by-id';
// var newStr = str.split('-').map(function(item,index){
//     return index === 0 ?  item.toLowerCase() :  item[0].toUpperCase()+item.slice(1).toLowerCase()
// }).join('');
// console.log(newStr);

//字符串翻转
// var str = 'helloworld!';
// var newStr = str.split('').reverse().join('');
// console.log(newStr);

//随机数0~arr.length
// function randomArray(arr){
//     return parseInt(Math.random()*(arr.length));
// }
// var arr = ['李','王','张','牛','六','符','刘'];
// var index = randomArray(arr)
// console.log(arr[index]);//牛

//输出当前时间；格式：'2021-03-04 19:02:56'
var date = new Date();
//分别获取
var y = date.getFullYear();
var m = date.getMonth();
var d = date.getDate();
var h = date.getHours();
var i = date.getMinutes();
var s = date.getSeconds();
//补0
m = m < 10 ? '0'+m : m;
//拼接日期时间字符串
var curDate = y + '-' + m + '-' + d+' '+h+':'+i+':'+s;
console.log(curDate);

