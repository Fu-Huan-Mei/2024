// //函数A
// function A() {
//     var n1 = 100, n2 = 200;
//     //函数B
//     function B() {
//         //函数B中可访问函数A中的数据
//         console.log(n1 + n2);
//     };
//     //实现闭包的方式1：将函数B作为返回值
//     //return B;
//     //实现闭包的方式2：将函数B赋值给全局对象属性
//     //window.func = B;
//     //实现闭包的方式3：将函数B作为事件的回调函数
//     document.onclick = B;
// };
// var r = A();
// r();
// func();


// // var name = "The Window";
// // var object = {
// //     name: "My Object",
// //     //还未形成闭包！！！
// //     getNameFunc: function () {
// //         return function () {
// //             return this.name;
// //         };
// //     }
// // };
// // console.log(object.getNameFunc()()); //调用者是window，严格模式返回undefined
// // console.log(this.name);//undefined
// // console.log(name);//The Window

// var name2 = "The Window";
// var object2 = {
//     name2: "My Object",
//     getNameFunc: function () {
//         var that = this;
//         return function () {
//             return that.name2;
//         };
//     }
// };
// console.log(object2.getNameFunc()());  //My Object

// function fun(n, o) {
//     console.log(o);
//     return {
//         fun: function (m) {
//             return fun(m, n)
//         }
//     }
// }
 
// var a = fun(0);    // undefeind
// a.fun(1);          // 0
// a.fun(2);          // 0
// a.fun(3);          // 0
// console.log('');

// var b = fun(0).fun(1).fun(2).fun(3);
// /*
//     undefeind
//     0
//     1
//     2
// */
// console.log('');



// var c = fun(0).fun(1);
// /*
//     undefeind
//     0
// */
// c.fun(2);       // 1
// c.fun(3);       // 1

// //题目1：考察this指向问题
// var name = 'hello';
// var obj = {
//     name:'Lisa',
//     getName:function(){
//         return function(){
//             console.log(this);//指向全局对象
//             //我判断错了，以为是Lisa
//             return this.name;//undefined
//         };
//     }
// };
// //this指向问题：谁调用getName的返回值，相当于window调用该函数，所以this指向window
// console.log(obj.getName()());

//题目2：闭包
// var name2 = 'helloWorld';
// var obj2 = {
//     name:'LisaWorld',
//     getName:
//         //形成闭包了！
//         function(){
//         var that = this;
//         return function(){
//             return that.name;//LisaWorld
//         };
//     }
// };
// console.log(obj2.getName()());

//题目3：
function fun(n, o) {
    console.log(o);
    return {
        fun: function (m) {
            return fun(m, n)
        }
    }
}
 
var a = fun(0);    // undefeind
a.fun(1);   fun(0).fun(1);       // 0
a.fun(2);          // 0
a.fun(3);          // 0
console.log('');

var b = fun(0).fun(1).fun(2).fun(3);

