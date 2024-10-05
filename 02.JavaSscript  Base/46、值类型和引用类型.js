// var a = 100;
// var b = a;
// b = 200;//1、直接修改变量b的值
// console.log(a);//100


// var obj1 = {age:100};
// var obj2 = obj1;
// obj2.age = 18;//2、没有重新创建变量，只是修改obj2对象的属性
// console.log(obj1.age);//18
// obj2 = {age:400};//3、相当于新创建的对象重新赋值给obj2【直接修改对象的值】
// console.log(obj1.age);//18

// console.log('hello' === 'hello');//true
// console.log(100===100);//true
// console.log({age:18}==={age:18});//false
// console.log([1,2,3] === [1,2,3]);//false
// console.log([1,2,3]==[1,2,3]);

// var arr = [1,2,34,5,6];
// var arr2 = arr;
// console.log(arr===arr2);//true

// var rr3 = ['a','b'];
// var rr4 = ['a','b'];

//num全局变量
// var num = 50;
// function f1(num){
//     //num形参：局部变量
//     num = 60;
//     console.log(num);//局部变量：60
// };
// f1(num);
// console.log(num);//50

// var num1 = 55;
// var num2 = 66;
// function f1(num,num1){
//     num = 100;//形参：局部变量
//     num1 = 100;//形参：局部变量
//     num2 = 100;//全局变量：100
//     console.log(num);//100
//     console.log(num1);//100
//     console.log(num2);//100
// };
// f1(num1,num2);
// console.log(num1);//全局变量：55
// console.log(num2);//全局变量：100
// console.log(num);//报错

// var a = 10;
// var b = 20;
// function add(a,b){
//     a = 30;//局部：a：30
//     //局部b：20
//     return a+b;
// };
// add(a,b);//值传递
// console.log(a);//全局：10

// function f1(arr){
//     //引用：arr = [1,2];
//     for(var i=0;i<arr.length;i++){
//         arr[i] += 2;
//     };
//     console.log(arr);//[3,4]
// };
// var arr;
// arr = [1,2];
// f1(arr);//引用传递：存储地址相同
// console.log(arr);//[3,4]

// var a = [1,2];
// var b = a;//引用传值
// a[0] = 20;
// console.log(b);//[ 20, 2 ]

function Person(name,age,salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}
function f1(pp){
    //修改PP的属性：pp和p指向同一个对象
    pp.name = '1s';
    //给PP重新赋值：pp指向一个新对象
    pp = new Person('aa',18,10);
}
//实例化
var p = new Person('zs',18,1000);
//属性值
console.log(p.name);//'zs'
//调用函数f1
f1(p);//[传引用地址]
console.log(p.name);//'1s'
console.log(pp.name);//报错！！！【多看看这个：全局没有该作用域】