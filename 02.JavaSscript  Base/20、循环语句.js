// //循环输出14遍：越努力越幸运！进大厂找优质朋友，赚大钱！
// var i = 0;
// while(i<4){
//     console.log("越努力越幸运！进大厂找优质朋友，赚大钱！",i);
//     i++;
// };
// console.log("循环结束后",i);//4
// //循环：我就一直有点儿分不清循环的这个过程

// var num = 7;
// while(num<=15){
//     console.log(num);//7 8 9 10 11 12 13 14 15
//     num++;
// }
// console.log("循环结束后num=",num);//16

// var i = 56;
// while(i>=51){
//     console.log(i);//56 55 54 53 52 51 
//     i--;
// };
// console.log("循环结束后i=",i);//50

// //输出10以内（包括10）所有的偶数，偶数判断依据：能被2整除
// var num = 0;
// while(num <= 10){
//     if(num % 2 === 0){
//         console.log(num);//0 2 4 6 8 10
//     }
//     num += 2;
// }
// console.log("循环结束num=",num);//12

// //计算100以内所有数字的和，包括100
// //（1）定义循环标记变量
// var i = 0;
// //（2）定义变量：记录和
// var total = 0;
// while(i<=100){
//     total += i;
//     i++;
// }
// console.log(i);//101
// console.log(total);//5050

// //计算10以内所有奇数的和
// var odd = 1;
// var sum = 0;
// while(odd <= 10){
//     if(odd % 2 === 1){
//         sum += odd;
//     }
//     odd++;
// };
// console.log("10以内的奇数和为sum=",sum);



// //定义循环标记变量
// var time = 0;
// //开始循环
// do {
//     //0 1 2 3 4 5 6 7 8 9 
//     console.log("喜欢吃烤包子time=",time);
//     time++;
// }while(time<10);
// console.log(time);

// //循环输出数字7~15
// //定义循环标记变量
// var num1 = 7;
// //开始循环
// do {
//     //7 8 9 10 11 12 13 14 15
//     console.log("喜欢吃烤包子num1=",num1);
//     num1 += 1;
// }while(num1<16);
// console.log(num1);//16

// //倒序输出数字 56~43
// var num2 = 56;
// do {
//     console.log("喜欢吃烤包子num2=",num2);
//     num2--;
// }while(num2 >= 43);
// console.log(num2);//42

// //输出10（包括10）以内所有的偶数
// var num3 = 0;
// do{
//     if(num3 % 2 === 0){
//         console.log("偶数num3=",num3);
//     };
//     num3 += 1;
    
// }while(num3 <= 10);
// console.log(num3);//11

// //输出100以内（包括100）所有数字的和
// var num3 = 0;
// var total = 0;
// do {
//     total += num3;
//     num3++;
// }while(num3 <= 100);
// console.log(total);//5050

// //计算10以内所有奇数的乘积
// var num4 = 1;
// var total = 1;
// do {
//     if(num4 % 2 !== 0){
//         total *= num4;
//     }
//     num4++;
// }while(num4 <= 10);
// console.log(total);//945
// console.log(num4);//11

// //while和do while的区别
// //while循环
// var num5 = 0;
// while(num5 < 5){
//     console.log(num5);//0 1 2 3 4
//     num5++;
// };
// console.log(num5);//5

// //do while循环
// var num6 = 0;
// do{
//     console.log(num6);//0 1 2 3 4
//     num6++;
// }while(num6 < 5);
// console.log(num6);//5

// //执行0次
// var num7 = 10;
// while (num7 < 10){//10 
//     console.log('num7=',num7);
//     num7 += 1;
// };

// //无论条件是否满足都会执行1次
// var num8 = 10;
// do{
//     console.log('num8=',num8);//10
//     num8 +=1;
// }while(num8 < 10);

// //10次
// for(var i =1;i<=10;i++){
//     console.log(i);//1 2 3 4 5 6 7 8 9 10
// };
// console.log('循环标记变量结束的值i',i);//11

// //循环输出数字7~15
// for(var i = 7;i<16;i++){
//     console.log(i);
// };
// console.log("结束循环i=",i);

// //循环输出数字56~43【错了】
// for(var i = 56;i > 42;i--){
//     console.log(i);
// };
// console.log("结束循环i=",i);

// //输出10（包括10）以内的所有偶数
// for(var i = 1;i < 11;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// };
// console.log("结束循环i=",i);

//计算10以内的所有奇数的乘积
// var total = 1;
// for(var i = 1;i < 11;i++){
//     if(i%2 !== 0){
//         total *= i;
//     }
    
// };
// console.log("结束循环i=",i);
// console.log(total);

//循环输出10以内的奇数
// for(var i = 1;i<10;i+=2){
//     console.log(i);//1 3 5 7 9
// }

// //特殊结构的for循环
// var i =1;
// for(;i<10;i += 2){
//     console.log(i);
// };
// console.log(1);

// //和while相同了
// var i =1;
// for(;i<10;){
//     console.log(i);
//     i += 2;
// };
// console.log(2);

//使用2个循环标记变量
//逗号运算符：取第二个操作数的值
// for(var x=1,y=1;x<=5,y<=1;x++,y++){
//     console.log(x,y);
// }

// //不使用标记变量的循环
// //随机数
// // console.log(Math.random());
// //需求：取>0.99的随机数,当>0.99时循环就会停止
// var res = Math.random();
// while( res <= 0.99){
//     res = Math.random();
//     console.count();//循环次数
// };
// console.log("随机数res=",res);

// //取一个小于0.001的随机数
// do{
//     var res = Math.random();
//     console.count();//循环次数
// }while(res >= 0.001);
// console.log("随机数res=",res);

// //>0.59且<0.61的随机数
// for(var num = Math.random();num <= 0.59 || num >= 0.61;){
//     console.count();//循环次数
//     num = Math.random();
// };
// console.log(num);

//循环嵌套
//输出表格table：10行8列
var row = 1;
var column = 1;
while(row<=10){
    console.log(row);
    row++;
};
console.log(row);
while(column<=8){
    console.log(row);
    row++;
};