//1、创建对象
// //（1）直接量
// var obj1 = {};
// console.log(obj1,typeof obj1);//{} object
// var obj2 = {name:'Bob',age:18,gender:'男'};
// //（2）函数：Object()
// var obj2 = Object();
// obj2['a'] = 1;
// console.log(obj2);
// //（3）构造函数：new Object()
// var obj3 = new Object();
// console.log(obj3);

//2、遍历Object对象的属性
var obj4 = {
    username:'高小乐', 
    age:67,
    'home-address': '上海',
    schollAddress: '北京',
    firends: ['刘姥姥', '欧阳姥姥', '司马姥姥'],
    child: {
        name: '高小小乐', 
        age: 37
    },
    getInfo: function() {
        console.log('obj2 getInfo');
    },
    eat: function() {
        console.log('高小乐爱吃！');
    }
};

//使用for in结构
// for(var attr in obj4){
//     // console.log(obj4[attr]);//属性名使用attr变量接收，使用[]语法获取属性值
// };

//delete删除
// delete obj4.username;
// console.log(obj4);
// delete obj4['home-address'];
// console.log(obj4);

//in运算符：判断对象中是否存在某个属性
// console.log('getInfo' in obj4);//true
// // console.log(username in obj4);//报错： username is not defined！！！
// var drink = 'eat';
// console.log(drink in obj4);//true

//object是最纯洁的对象：具备对象的基本特征
// //1、数组
// var arr = [1,2,3,4,5,6];
// //给数组添加属性
// arr.name = "张三";
// arr.age = 18;
// console.log(arr);
// for(var i in arr){
//     console.log(i);
// };
// delete arr.name;
// console.log(arr);
// delete arr[3];//元素的索引必须是连续的，所以被删的这个位置自动补上空
// console.log(arr);//[ 1, 2, 3, <1 empty item>, 5, 6, age: 18 ]
// console.log('age' in arr);//true
// // console.log(age in arr);//变量age未创建，直接报错！！！

//创建函数
function func(){};
func.age = 90;
func.gender = 'male';
for(var attr in func){
    console.log(attr);//age gender
    console.log(func[attr]);//90 male
};
console.log(func);//[Function: func] { age: 90, gender: 'male' }
console.log('age' in func);//true
delete func.age;
console.log(func);//[Function: func] { gender: 'male' }
