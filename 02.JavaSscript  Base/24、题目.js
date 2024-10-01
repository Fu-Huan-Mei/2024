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

//题目4：眼神有问题
for(var i = 1;i <= 5;i++){
    if(i > 3){
        continue;//4 5停止执行
    }
    console.log(i); //1 2 3 
};
