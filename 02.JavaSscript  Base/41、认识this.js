//1、在构造函数中使用this
// function User(name,age,address){
//     //this指向实例对象本身
//     console.log('构造函数执行了this=',this);
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.addShopcart = function(product){
//         console.log(this.name+"将"+product+"加入购物车");
//     };
// };
// //实例化构造函数创建对象
// var u1 = new User('小鬼',18,'上海');
// console.log(u1);
// var u2 = new User('张三',28,'上海');
// console.log(u2);

//2、在函数中使用this（只能调用）
var user = {
    name:'Bob',
    age:28,
    getInfo:function(){
        console.log('getInfo方法');
        console.log('getInfo方法中的this=',this);
        console.log('this.name=',this.name);
    },
    friend:{
        name:"张三",
        say:function(){
            console.log('say方法');
            console.log('say方法中的this=',this);
            console.log('this.name=',this.name);
        }
    }
};
user.getInfo();
console.log('--------------------------');
user.friend.say();
console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
var name = '潘展乐';//修改全局变量name值
//创建func函数
function func(){
    console.log('func函数');
    console.log('func的this=',this);
    console.log('this.name=',this.name);//全局变量就是widnow的属性,window.name就是this.name
};
//调用func函数
func();//window调用了func函数，this指向window

user.friend.eat = func;
//this指向friend
user.friend.eat();