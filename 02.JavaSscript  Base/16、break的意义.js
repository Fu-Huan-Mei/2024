switch(20){
    case 20:
        console.log(20);
        break;//决定在哪里停止
    case 30:
        console.log(30);
        break;//决定在哪里停止
    case 40:
        console.log(40);
        break;//决定在哪里停止
}

//break的灵活运用
//用户输入月份，输出改月有多少天
var month = 1;
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("该月有31天");
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("该月有30天");
        break;
    case 2:
        console.log("该月有28天或29天");
        break;          
}
