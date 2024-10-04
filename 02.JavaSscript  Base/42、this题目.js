// var name = '222';

// var a = {
//     name:'111',
//     say:function(){
//         console.log('666name=',name);
//         console.log(this.name);
//     }
// };
// var fun = a.say;
// fun();//this指向window->this.name=222
// a.say();//this指向a对象->this.name=111

// var b = {
//     name:'333',
//     say:function(func){
//         func();
//     }
// };
// b.say(a.say);//this指向window，this.name->222
// b.say = a.say;
// b.say();//this指向b,this.name->333

// var foo = 123;
// function print(){
//     console.log('前=',foo);
//     this.foo = 234;
//     console.log('后=',foo);
// };
// print();//this指向全局window，所以foo=123
// console.log(foo);

// var a = 5;
// function test(){
//     a = 0;
//     console.log(a);//本作用域中的局部变量a
//     console.log(this.a);//this指向window，this.a就是window.a，全局变量a
//     var a;//没值！！！
//     console.log(a);//0
// };
// // test();//输出分别是0 5 0

// //this实例化test(),this指向该实例对象
// new test();//输出分别是0 undefined 0

// //全局变量是window的属性
// console.log(address);//使用不存在的变量报错
// console.log(window.address);//使用不存在的属性得到undefined

//全局变量：其实就是window的属性，可以写为window.age
// var age = 10;
// function func(name,age){
//     this.name = name;//Tom
//     // window.age = 19;
//     this.age = age;//19
//     this.getInfo = function(){
//         console.log('getInfo方法中的this.name =',this.name );
//         console.log('getInfo方法中的this.age =',this.age);
//     };
//     console.log(this.name);
// };

// //调用func函数：this指向window，修改了全局变量age的值为19
// func('Tom',19);//Tom

// //实例化func是构造函数，this指向创建的新对象o
// var o = new func('Tom',19);//Tom
// o.getInfo();//getInfo函数，this指向o   Tom  19 
// console.log(age);//输出全局变量age  19

// //实例化o.getInfo()，this指向新创建的对象g1
// var g1 = new o.getInfo();//this.name是undefined、this.age是undefined

//全局变量
// var age = 20;
// //对象
// var obj = {
//     age:10,
//     getAge:function(){
//         console.log(this.age);
//     }
// };
// //对象
// var obj1 = {
//     age:30
// };
// //给obj1添加属性，属性名prop，属性值是obj对象
// obj1.prop = obj;
// //创建变量fn，fn的值是个函数
// var fn = obj1.prop.getAge;
// //分析：调用getAge函数,this指向obj，所以this.age=10
// obj.getAge();

// //分析：调用getAge函数,this指向prop，this.age=10
// obj1.prop.getAge();

// //分析：调用getAge函数,this指向window，this.age=20
// fn();

//题目：数组扁平化操作
var nums = [
    [1000, 2000, 3000],
    'hello',
    [
        [10,20,30],
        [
            'a', 
            'b', 
            ['A', 'B', 'C']
        ],
        '小乐'
    ],
    12313,
    [101,202,303]
];
//数组扁平化操作
//（1）创建新数组
var newNums = [];
//（2）使用递归函数遍历旧数组
function flatArray(arr){
    //（3）使用循环遍历arr
    for(var i=0;i<arr.length;i++){
        //（4）判断当前元素是否是数组
        if(arr[i] instanceof Array){
            //（5）递归调用
            flatArray(arr[i]);
        }else{
            //（6）结束条件：将元素添加到新数组中
            newNums.push(arr[i]);
        }
    }
};
//调用函数
flatArray(nums);
console.log(newNums);
/**
 * [
  1000,    2000,  3000,
  'hello', 10,    20,
  30,      'a',   'b',
  'A',     'B',   'C',
  '小乐',  12313, 101,
  202,     303
]

 */