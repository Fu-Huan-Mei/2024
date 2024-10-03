// //定义数组
var arr = [23, 101, 12, 45, 89, 56, 78, 18];
// //排序：从小到大
// //第1轮比较：找出最大值放在最后:i和i+1进行比较
// //比较次数：7次
// for(var i=0;i<arr.length-1;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第1轮比较',arr);

// //第2轮比较：找出第二大值放在倒数第二位:i和i+1进行比较
// //比较次数：6次
// for(var i=0;i<arr.length-2;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第2轮比较',arr);

// //第3轮比较：找出第3大值放在倒数第3位:i和i+1进行比较
// //比较次数：5次
// for(var i=0;i<arr.length-3;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第3轮比较',arr);

// //第4轮比较：找出第4大值放在倒数第4位:i和i+1进行比较
// //比较次数：4次
// for(var i=0;i<arr.length-4;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第4轮比较',arr);

// //第5轮比较：找出第5大值放在倒数第5位:i和i+1进行比较
// //比较次数：3次
// for(var i=0;i<arr.length-5;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第5轮比较',arr);

// //第6轮比较：找出第6大值放在倒数第6位:i和i+1进行比较
// //比较次数：2次
// for(var i=0;i<arr.length-6;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第6轮比较',arr);

// //第7轮比较：找出第7大值放在倒数第7位:i和i+1进行比较
// //比较次数：1次
// for(var i=0;i<arr.length-7;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// console.log('第7轮比较',arr);

// console.log('最终从小到大排序结果arr=',arr,'arr.length=',arr.length);

//专注专注！！！
// //1、升序：从小到大
// //外层循环：控制比较轮数，比较数组长度-1轮
// for(var k = 1;k < arr.length;k++){
//     //内层循环：控制比较次数
//     for(var i=0;i<arr.length-k;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] > arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// };
// console.log("升序arr=",arr);//升序= [12, 18, 23,  45,56, 78, 89, 101]

// //2、降序：从大到小
// //外层循环：控制比较轮数，比较数组长度-1轮
// for(var k = 1;k < arr.length;k++){
//     //内层循环：控制比较次数
//     for(var i=0;i<arr.length-k;i++){
//     //相邻两个元素进行比较arr[i] arr[i+1]
//     if(arr[i] < arr[i+1]){
//         //交换2个元素的值
//         var temp = arr[i];
//         arr[i] = arr[i+1];
//         arr[i+1] = temp;
//     }
// };
// };
// console.log("降序arr=",arr);
// /**
//  *   101, 89, 78, 56,
//    45, 23, 18, 12
// ]
//  */

//数组排序函数封装
/**
 * 数组排序
 * @param {array} 要排序的数组
 * @param {boolean} true：降序 false：升序，默认值false
 * @returns {array} 排好序的数组
 * */
function sortArr(arr, isDown = false) {
    //外层循环：控制比较的轮数：length-1轮数
    for (var i = 1; i < arr.length; i++) {
        //内层循环：该轮比较的次数
        for (var j = 0; j < arr.length - i; j++) {
            if (isDown) {
                //降序
                if (arr[j] < arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            } else {
                //升序
                if (arr[j] > arr[j + 1]) {
                    var temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        };
    };
    return arr;
};
var arrs = [23, 101, 12, 45, 89, 56, 78, 18];
console.log("降序",sortArr(arrs));
/**
 * 降序 [
  12, 18, 23,  45,
  56, 78, 89, 101
]
 */
console.log('升序',sortArr(arrs, true));
/**
 * 升序 [
  101, 89, 78, 56,
   45, 23, 18, 12
]
 */