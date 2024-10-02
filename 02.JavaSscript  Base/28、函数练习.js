// //1、翻转字符串
// var str = 'hello message!你好呀！';
// //（1）创建空字符串：给字符串进行拼接
// var newStr = '';
// //（2）遍历原字符串：倒序遍历
// for(var i = str.length-1;i >= 0;i--){
//     newStr += str[i]
// };
// console.log(newStr);//！呀好你!egassem olleh
// /**
//  * 翻转字符串
//  * @param {string} 要进行翻转的字符串
//  * @returns {string} 翻转好的字符串
//  */
// function fun(str){
//     //（1）创建空字符串：给字符串进行拼接
//     var newStr = '';
//     //（2）遍历原字符串：倒序遍历
//     for(var i = str.length-1;i >= 0;i--){
//         newStr += str[i]
//     };
//     console.log(newStr);//！呀好你!egassem olleh
// };
// fun(str);


// //2、质数
// //标记遍历  看能否推翻默认值
// function isNum(num) {
//     var flag = true;//默认是质数
//     //3、判断一个数字是否为质数
//     for (var i = 2; i <= num / 2; i++) {
//         //判断num能否被i整除
//         if (num % i === 0) {
//             flag = false;

//             break;
//         };
//     };
//     //难点：只想让下面结论输出1次，可以根据flag来做出提示
//     if (flag) {
//         return true;
//         console.log(num + "是质数");
//     } else {
//         //num + "不是质数";
//         return false;
//     }

// };
// isNum(13);

// //3、输出100~200之间所有质数
// var arr = [];
// for(var i = 100;i<=200;i++){
//     var res = isNum(i);
//     if(res){
//         arr.push(i);
//     };
// };
// console.log(arr);
/**
 * [
  101, 103, 107, 109, 113,
  127, 131, 137, 139, 149,
  151, 157, 163, 167, 173,
  179, 181, 191, 193, 197,
  199
]
 */

//3、控制台输出三角形    空格
//第1次循环输出1个  0    4
//第2次循环输出3个  1    3
//第3次循环输出5个  2    2
//第4次循环输出7个  3    1
//第5次循环输出9个  4    0
//                2n-1  总行数-n
// function triangle(){
//     //控制行数
//     for(var i = 1; i <= 5;i++){
//         //定义字符串，拼接*符号
//         var str = "";
//         //拼接空格【这里我没考虑到】
//         for(var n = 0;n < 5 -i;n++){
//             str += ' ';
//         }
//         //循环拼接*
//         //控制列数
//         for(var j = 1; j <= 2*i-1;j++){
//             str += "*";//【这里我没考虑到】
//         }
//         //输出本行的*，但是*位置不对
//         console.log(str);
//     }
// }
// triangle();

//5、输出到页面：数字陈列 
for(var i = 1; i <= 50;i++){
   
    //个位数补0
    if(i<10){
        var num = "0" + i;
    }else{
        num = i;
    };
    console.log(num);
    //整十换行
    if(i % 10 === 0){
        console.log("换行");
    };
}