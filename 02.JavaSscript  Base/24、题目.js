//题目1
// for(var i=2;i<=5;i+=3){

// };
// console.log(i);//8

//题目2：死循环
// var tag = 10;
// do {
//     console.log(tag);//10 
//     tag++;
// }while(tag < 10);

//题目3：眼神有问题
// for(var i = 1;i <= 10;i++){
//     console.log(i);//1 3 5 7 9 
//     i++;
// };
// console.log(i);//11

//题目4：
// for(var i = 1;i <= 5;i++){
//     if(i > 3){
//         continue;//4 5停止执行
//     }
//     console.log(i); //1 2 3 
// };

//题目5：能被3或7整除的100到200以内的整数
// let arr = [];
// for(var i = 100;i<=200;i++){
//     if(i % 3 === 0 || i % 7 ===0){
//         // console.log(i);
//         arr.push(i);
//         // console.count();
//     };
// };
// console.log(arr);
/*
[
  102, 105, 108, 111, 112, 114, 117,
  119, 120, 123, 126, 129, 132, 133,
  135, 138, 140, 141, 144, 147, 150,
  153, 154, 156, 159, 161, 162, 165,
  168, 171, 174, 175, 177, 180, 182,
  183, 186, 189, 192, 195, 196, 198
] */

//题目6：位上有3或7的3位数【以目前学习的方法还没啥思路】
//先找到三位数，100~999
//关键是分别取出个位数、十位数、百位数
//103 113
//107 117
// var arr = [];
// for(var num = 100;num<=999;num++){
//     //百位
//     var bai = parseInt(num / 100);
//     //十位
//     var shi = parseInt((num - bai * 100) / 10);
//     //个位
//     var ge = num - bai * 100 - shi * 10;
//     if(bai === 3 || bai === 7 ){
//         // console.log(num);
//         arr.push(num);
//     }else if(shi === 3 || shi === 7){
//         // console.log(num);
//         arr.push(num);
//     }else if(ge === 3 || ge === 7){
//         // console.log(num);
//         arr.push(num);
//     };
// };
// console.log(arr);

// //第2种方法：获取百位数、十位数、个位数
// var n1 = parseInt(num % 100);
// var n2 = parseInt(num % 100 / 10);
// var n3 = num % 10;


//题目7：20阶乘的和
var res = 1;
var sum = 0;
for(var i = 1;i<=20;i++){
   res = res * i;//其实我这个有点儿绕弯路了！！！
   sum = sum + res
};
console.log("20的阶乘res=",res);//2432902008176640000
console.log("20的阶乘的和sum=",sum);//2561327494111820300
//使用1层循环实现
var sum1 =0,res1=1;
//循环从1~20
for(var n = 1; n <= 20; n++){
    res1 *= n;
    sum1 += res1;
};
console.log( res1,sum1);//2432902008176640000 2561327494111820300
