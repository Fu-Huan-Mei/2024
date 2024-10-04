// //1、下面代码中的对象f有方法a和b吗？有a
// //F函数->Function.prototype->Object.prototype
// var F = function(){};
// Object.prototype.a = function(){};
// Function.prototype.b = function(){};
// //f实例->F.prototype->Object.prototype
// var f = new F();
// //console.log(F.prototype,typeof F.prototype);//{} object

// //2、写出代码输出结果
// Object.prototype.a = function(){
//     console.log('a');
// };
// Function.prototype.b = function(){
//     console.log('b');
// };
// //函数F->Function.prototype->Object.prototype  有a和b
// var F = function(){};
// //数组f->Array.prototype->Object.prototype  只有a
// var f = [];
// f.a();//a
// F.a();//a
// // f.b();//undefined
// F.b();//b
// console.log(f.b);//undefined-》undefined()调用肯定是报错！！！

//3、代码输出结果
function User(){};

//修改User实例的原型
User.prototype = {
    name:'aaa'
};

//创建User实例
//u实例->User.prototype->Object.prototype   
var u = new User();
console.log(u.name);//'aaa'

//再次修改User实例的原型
User.prototype.name = 'bbb';
console.log(u.name);//'bbb'

//重新给User.prototype赋值了！！！
User.prototype = {
    name:'ccc'
};
console.log(u.name);//'bbb'

