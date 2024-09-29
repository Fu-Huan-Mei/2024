// // //单向分支
// // if( 3 > 2){
// //     console.log(111);//111
// // };
// // var age = 18;
// // if( age > 11){
// //     console.log("学习继续加油噢,越努力越幸运！");//学习继续加油噢,越努力越幸运！
// // };
// // console.log("语句1");//语句1

// // console.log(Number('12'));

// //需求：成绩判断案例
// //单向分支：麻烦
// var grade = 50;
// if(Number(grade)<60){
//     console.log("不及格");
// };
// if( Number(grade)>=60 && Number(grade)<= 69){
//     console.log("刚及格");
// };
// if( Number(grade)>=70&&Number(grade)<= 79){
//     console.log("中等");
// };
// if(Number(grade)>= 80 && Number(grade)<= 89){
//     console.log("良好");
// };
// if(Number(grade)>= 90){
//     console.log("优秀");
// };

// //双向分支：可读性差
// if(grade < 60){
//     console.log("不及格");
// }else{
//     if(grade<70){
//         console.log("刚及格");
//     }else{
//         if(grade<80){
//             console.log("中等");
//         }else{
//             if(grade<90){
//                 console.log("良好");
//             }else{
//                 console.log("优秀");
//             }
//         }
//     }
// }

// //switch case
// var num = 20;
// switch(num){
//     case 10:console.log("我是10");break;
//     case 20:console.log("我是20");break;//我是20
//     case 30:console.log("我是30");break;
//     case 40:console.log("我是40");break;
//     case 50:console.log("我是50");break;
//     default:console.log("hello world");
// };

// //需求：加汽油
// var type = 111;
// //95号：1~49L 5元/L
// //92号：>=50L 4.5元/L
// switch(type){
//     case 92:
//         //定义初始单价：92号：1~39L 4元/L
//         var price = 4;
//         //92号：>=40L 3.5元/L
//         if(type>=40){
//             price = 3.5;
//         };
//         //计算总量
//         var total = price * type;
//         console.log(total);
//         break;
//         case 95:
//             //定义初始单价：92号：1~39L 4元/L
//             var price = 5;
//             //92号：>=40L 3.5元/L
//             if(type>=50){
//                 price = 4.5;
//             };
//             //计算总量
//             var total = price * type;
//             console.log(total);
//             break;
//         default:
//             console.log("无");
// }


//需求：加汽油：else if
var type = 111;
//95号：1~49L 5元/L
//92号：>=50L 4.5元/L
if (type === 92) {
    //定义初始单价：92号：1~39L 4元/L
    var price = 4;
    //92号：>=40L 3.5元/L
    if (type >= 40) {
        price = 3.5;
    };
    //计算总量
    var total = price * type;
    console.log(total);
}
else if (type === 95) {
    //定义初始单价：92号：1~39L 4元/L
    var price = 5;
    //92号：>=40L 3.5元/L
    if (type >= 50) {
        price = 4.5;
    };
    //计算总量
    var total = price * type;
    console.log(total);
} else { 
    console.log("无"); 
}

