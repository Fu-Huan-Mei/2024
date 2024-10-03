//递归函数
// function func(){
//     console.log("func被调用了");
//     func();
// };

//使用递归实现某个数字的阶乘
// function factorial(n){
//     //递归结束条件
//     if(n <= 2){
//         return n;
//     };
//     //n乘以n-1的阶乘
//     return n * factorial(n-1);
// };
// console.log(factorial(5));//5*4*3*2*1=120
//实现过程详解
/**
 * factorial(5)开始调用->return 5*factorial(4)
 *      factorial(4)开始调用->return 4*factorial(3)
 *          factorial(3)开始调用->return 3*factorial(2)
 *              factorial(2)开始调用->return 2
 *              factorial(2)结束调用 return 2
 *         factorial(3)结束调用->return 3 * 2
 *      factorial(4)结束调用->return 4*6
 * factorial(5)结束调用->return 5*24
 */

// function fun(n){
//     console.log('第1次输出n=',n);
//     //条件成立，开始递归调用
//     //递归停止条件：n<=1
//     if(n > 1){
//         fun(n-1);
//     }
//     console.log('第2次输出n=',n);
// };
// fun(3);
// fun(2);
// fun(1);
/**执行过程【没理解？？？】
 * fun(3)开始调用-》输出3 
 *    fun(2)开始调用-》输出2
 *      fun(1)开始调用-》输出1
 *      fun(1)输出1-》结束调用
 *    fun(2)输出2-》结束调用
 * fun(3)输出3-》结束调用
 *    
 * fun(1)-》1
 */

var res = [1,2,3,[4,5,6,['a','n']]].flat();
console.log(res);