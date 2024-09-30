/**
 * 输入年份获取生肖 输入公元纪年
 * 2011 兔年
 * 2023 兔年
 * 2035 兔年
 * +-12、%12
 */
//如何把业务需求转成程序判断
// console.log(2028%12);//0  猴
// console.log(2029%12);//1  鸡  
// console.log(2030%12);//2  狗
// console.log(2031%12);//3  猪
// console.log(2032%12);//4  鼠
// console.log(2033%12);//5  牛
// console.log(2034%12);//6  虎  
// console.log(2023%12);//7  兔
// console.log(2024%12);//8  龙
// console.log(2025%12);//9  蛇
// console.log(2026%12);//10 马
// console.log(2027%12);//11 羊

//（1）获取用户输入的年份
var year = 5090;//5090年出生的人属狗
switch(year % 12){
    case 0:console.log(year + "年出生的人属猴"); break;
    case 1:console.log(year + "年出生的人属鸡"); break;
    case 2:console.log(year + "年出生的人属狗"); break;
    case 3:console.log(year + "年出生的人属猪"); break;
    case 4:console.log(year + "年出生的人属鼠"); break;
    case 5:console.log(year + "年出生的人属牛"); break;
    case 6:console.log(year + "年出生的人属虎"); break;
    case 7:console.log(year + "年出生的人属兔"); break;
    case 8:console.log(year + "年出生的人属龙"); break;
    case 9:console.log(year + "年出生的人属蛇"); break;
    case 10:console.log(year + "年出生的人属马"); break;
    case 11:console.log(year + "年出生的人属羊"); break;
}









