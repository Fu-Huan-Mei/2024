// //1、2个数据都是数字
// console.log(100>20);//true
// console.log(100 < Infinity);//true
// console.log(100 < -1);//false
// //2、2个数据不全是数字：先转为number，再比较大小
// console.log(Number('1-0'));//NaN
// console.log('1-0'<0);//false
// console.log(null < 100);//true
// console.log(undefined>0);//false
// //3、2个数据都是strig，按照字符串规则比大小
// //单个字符：使用字符对应的Unicode编码比较大小
// console.log('a'>'b');//true
// //多个字符：一个字符与一个字符之间进行比较
// console.log('hello'>'hi');//false


// //2个操作数都是number
// console.log(NaN!=NaN);//true
// console.log(NaN!==NaN);//true
// //2个操作数类型不一致，先转为number再比较
// console.log(null==NaN);
// console.log(undefined===NaN);
// //2个操作数类型一致，不转number，直接比较
// console.log(true==true);
// console.log(1==0);
// console.log('halle'=='jale');

//null特殊
// console.log(null=='');//false
// console.log(null == false);//false
// console.log(null==0);//null->0   //false
// console.log(null==undefined);//undefined->NaN  //true

//全等和相等
console.log(''==false);//true
console.log(''===false);//false
console.log('189'==189);//true
console.log('189'===189);//false