// //创建方式1：直接量
// var arr1 = [1,2,'hello',true,null,undefined];
// console.log(arr1,typeof arr1);//[ 1, 2, 'hello', true, null, undefined ] object

// //创建方式2：Array()函数
// var arr2 = Array(1,2,'hello',true,null);
// console.log(arr2,typeof arr2);//[ 1, 2, 'hello', true, null ] object
// //1个参数且是数值类型：表示有17个元素，但都是空数组，但占位
// var arr2 = Array(17);
// console.log(arr2);//[ <17 empty items> ]

// //创建方式3：new Array();
// console.log(new Array(1,2));//[ 1, 2 ]

// const arr3 = [1,2,"hello world",true,false,undefined,null,NaN,[1,2,3,4,5]];
// //读取元素
// console.log(arr3[3]+arr3[5]);//NaN
// console.log(arr3[8][2]);//3
// console.log(arr3[9]);//使用数组中不存在的元素会得到一个undefined

// //修改数组中的元素的值
// arr3[2] = "快乐";
// console.log(arr3);//[ 1, 2, '快乐', true, false, undefined, null, NaN, [ 1, 2, 3, 4, 5 ] ]
// //给不存在的索引赋值，直接放到该数组夫人最后位置即可
// arr3[10] = 123;
// console.log(arr3);

// //稀疏数组
// var arr4 = [100,0,990,Array(6)];
// console.log(arr4);//[ 100, 0, 990, [ <6 empty items> ] ]

//题目1：
//创建数组
// var nums = [34,101,28,865,341,106,228,199];
// //计算数组中所有元素的和
// var sum = 0;
// //计算数组的元素的平均数
// var evenNum = 0

// for(var i = 0;i<nums.length;i++){
//     sum += nums[i];
//     evenNum = sum / nums.length;
    
// };
// console.log(sum);//1902
// console.log(evenNum);//237.75

// var nums = [34,101,28,865,341,106,228,199];
// //最大值【没啥思路】
// var maxNum = nums[0];
// for(var i=1;i<nums.length;i++){
//     //如果当前遍历到的元素比maxNum大，修改maxNum的值为当前元素
//     if(maxNum < nums[i]){
//         maxNum = nums[i];
//     };
// };
// console.log("数组中最大的元素maxNum=",maxNum);

// var min = nums[0];
// for(var i=1;i<nums.length;i++){
//     //如果当前遍历到的元素比maxNum大，修改maxNum的值为当前元素
//     if(min > nums[i]){
//         min = nums[i];
//     };
// };
// console.log("数组中最大的元素min=",min);//数组中最大的元素min= 28

// var nameList = ["张安","李四","张飞","李逵","松松","小鬼"];
// nameList[nameList.length] = "小娟";
// // console.log(nameList);
// //push()添加到数组的最后
// nameList.push("张张");
// console.log(nameList);
// //unshift()添加到数组的前面
// nameList.unshift("第一","第二");
// console.log(nameList);
// //指定位置添加新元素：位置，，新元素
// nameList.splice(3,0,'刘姥姥');
// console.log(nameList);

// //删除数组元素
// var nameList = ["张安","李四","张飞","李逵","松松","小鬼"];
// nameList.length -= 1;
// console.log(nameList);
// //删除最后1个，1次只能删1个
// nameList.pop();
// console.log(nameList);
// //删除第1个，1次只能删1个
// nameList.shift();
// console.log(nameList);
// //splice()删除指定位置指定数量的元素，不要写第3个参数
// nameList.splice(0,2);
// console.log(nameList);

// //多维数组
// var citys = [['南京','上海','苏州','保山','大理'],
// ['潍坊','济南','湖州','台湾','腾冲']];

//字符串数组
var str = 'hello world!';
// console.log(str.length);
// console.log(str[5]);
// console.log(str[str.length-1]);
//遍历字符串数组的所有字符
// for(var i=0;i<str.length;i++){
//     console.log(str[i]);
// };
//字符串具有部分数组特性
console.log(typeof str,typeof []);//string原始类型 object集合类型 
//str[0]=H//报错
console.log(str);