// //1、写出下列程序的输出结果：
// var num = 10;
// //分析：110 && 
// //"hello"->数值：NaN
// //NaN->布尔值：
// if(100+10 && "hello" * 10){
//     num += 10;
// };
// console.log(num);//10

// console.log(Boolean(NaN));//false

// //2、写出下列程序的输出结果：
// var a = 20;
// switch(a){
//     case 10:a += 10;
//     case 20:a += 20;//40
//     case 30:a += 30;//70
//     default:a += 100;//170
// };
// console.log(a);//170

// //3、字符串拼接
// var age = 18;
// console.log("我的年龄是"+age);

//4、阶梯水价
var num = 310;
var total = 0;
//分类判断
if(isNaN(num) || num === ""){
    console.log("您的输入有误，只能输入数字，请重新输入！");
}else{
    if(num > 0 && num <= 220){
        total = 4.05*num;
        console.log(1);
    }else if(num > 220 && num <= 300){
        total = 4.05*220 + (num - 220) * 5.8;
        console.log(2);
    }else{
        total = 4.05 * 220 + 5.8 * (300-220) +(num - 300) * 8.79;
        console.log(3);
    };
};
console.log("您需要缴纳水费"+total+"元");//1442.0=9元

//5、闰年的判断
//我的问题：不知道怎么判断平年和闰年？
//世纪年：整百年  能被400整除  eg：2100、2200、2000、2300
//非世纪年：      能被4整除
var year = 490;
// if(isNaN(year) || year === ""){
//     console.log("您的输入有误，请重新输入！");
// }else{
//     if(year % 400 === 0 || year % 4 === 0){
//         console.log(year+"年是闰年");
//     }else{
//         console.log(year+"年不是闰年");
//     }
// };

//非世纪闰年：year % 100 !== 0 && year % 4 === 0
//世纪闰年：year % 100   === 0 && year % 400 === 0
if(year % 100 !== 0 && year % 4 === 0 || year % 400 === 0){
    console.log(year+"年是闰年");
}else{
             console.log(year+"年不是闰年");
}