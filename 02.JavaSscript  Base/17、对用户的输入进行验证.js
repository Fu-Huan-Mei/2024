//获取用户输入
var score = "";
// //判断不及格的情况
// if(score<60){

// }

console.log(Number("hello"));//NaN
console.log(isNaN("hello"));//true
console.log(Number(true));//1
console.log(isNaN(true));//false
console.log(Number(""));//0
console.log(isNaN(""));//false
//只要能转为数字的，isNaN都为false

//判断是否为NaN，判断结果是布尔值（NaN本身或转为NaN的判断结果都是true）


//如果用户输入格式错误
if(isNaN(score) || score === ""){
    console.log("请正确输入您的成绩");
}else{
    //空串、前后有空格（去掉空格）
    //Number()🔺（2）自动去掉🔺字符串两端🔺所有空格，去除空格之后再转
    //如果用户输入格式正确
    if(score < 60){
        console.log("不及格");
    }else if(score < 70){
        console.log("及格");
    }
}