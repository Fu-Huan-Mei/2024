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
function randomArray(arr){
    return parseInt(Math.random()*(arr.length));
}
var arr = ['李','王','张','牛','六','符','刘'];
var index = randomArray(arr)
console.log(arr[index]);//牛


