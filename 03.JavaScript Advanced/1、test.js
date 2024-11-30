// // // const p = new Promise(reject=>{
// // //     reject(1);
// // // }).catch(err=>{
// // //     console.log(err);
// // // }).then(
// // //     (res)=>{
// // //         console.log(res);
// // //         console.log(2);
// // //     },
// // //     ()=>{
// // //         console.log(3);
// // //     }
// // // );
// // // console.log(p);

// // // const nestedArray = [1, [2, [3, [4, 5]]]];
// // // const flatArray = nestedArray.flat(Infinity); // Infinity 表示无限递归深度
// // // console.log(flatArray); // 输出：[1, 2, 3, 4, 5]

// // const nestedArray = [1, [2, [3, [4, 5]]]];
// // //??
// // const flatArray = nestedArray.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat(cur) : cur), []);
// // console.log(flatArray); // 输出：[1, 2, 3, 4, 5]

// // var arr = [0,1, 2, 3, 4, 5];
// // arr.splice(1, 2, 'a', 'b'); // 
// // console.log(arr);

// // var arr = [0,1, 2, 3, 4, 5];
// // arr.sort(); // 排序
// // console.log(arr); // [0, 1, 2, 3, 4, 5]

// // let arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// // let array1 = Array.prototype.slice.call(arrayLike); // 使用 Array.prototype
// // const array2 = slice.call(arrayLike); // 直接使用 slice

// // console.log(array1); // 输出：['a', 'b', 'c']
// // console.log(array2); // 输出：['a', 'b', 'c']
// // console.log([].__proto__ === Array.prototype);
// // console.log(Array.prototype.__proto__ === Object.prototype);
// // console.log(Object.prototype.__proto__ === null);

// let obj = { a: 1, b: 2, length: 2 };
// // for(item in obj){
// //     console.log(obj[item]);
// // };
// // let arr = Object.entries({a:1,b:2}).forEach((item,index)=>{
// //     console.log(item[0]+'='+item[1]);
// // });
// // console.log(Object.keys(obj));//[ 'a', 'b' ]
// // console.log(Object.values(obj));//[ 1, 2 ]

// // console.log(Object.getOwnPropertyNames(obj));
// // for(let item of obj){
// //     console.log(item,obj);
// // }

// //实现数组的随机排序
// let arr = [1, 2, 3, 5, 4, 6, 8, 7, 9];
// // console.log(arr.sort());
// // console.log(parseInt(Math.random()*10));
// let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function randomSort(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         var r = parseInt(Math.random() * arr.length);
//         var temp = arr[r];
//         arr[r] = arr[i];
//         arr[i] = temp;
//     }
//     return arr;

// }
// console.log(randomSort(newArr));



// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function randSort2(arr) {
//     var mixedArray = [];
//     while (arr.length > 0) {
//         //获取随机索引
//         var randomIndex = parseInt(Math.random() * arr.length);
//         //通过索引值获取元素放入新数组中
//         mixedArray.push(arr[randomIndex]);
//         //记得在原数组中删除该元素
//         arr.splice(randomIndex, 1);
//     }
//     return mixedArray;
// }
// console.log(randSort2(arr))

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// arr.sort(function () {
//     console.log(Math.random());
//     return Math.random() - 0.5;
// })
// console.log(arr);

//（1）构造函数
function Person(name){
    //（2）实例属性：给实例添加1个属性
    this.name = name;
    //（3）实例方法：可被实例调用的方法需要绑定this
    this.sayHello = function(){
        console.log(`${this.name}的实例方法被调用了`);
    }
}
//（4）静态属性
Person.count = 0;
//（5）静态方法：可在构造函数上直接调用，不需要通过实例调用
Person.describe = function(){
    console.log('人类的静态方法被调用了');
};
// （1）创建构造函数的实例
const person1 = new Person('Kimi');
const person2 = new Person('Bob');
// （2）访问实例属性
console.log('Person 1 name:',person1.name); // Person 1 name: Kimi
console.log('Person 2 name:',person2.name); // Person 2 name: Bob
//（3）调用实例方法
person1.sayHello(); // Kimi的实例方法被调用了
person2.sayHello(); // Bob的实例方法被调用了
//（4）访问静态属性
console.log('Static count:', Person.count); // Static count: 0
//（5）调用静态方法
Person.describe(); // 人类的静态方法被调用了

class Person {
    //(1)构造函数：用于创建和初始化类的1个新实例
      constructor(name) {
        //（2）实例属性：给实例添加一个属性
        this.name = name; 
      }
      // （3）实例方法：可以被类的实例调用
      sayHello() {
            console.log(`${this.name}实例方法调用`);
      }
      // （4）静态属性
      static count = 0;
      // （5）静态方法：可以在类上直接调用，不需要创建类的实例
      static describe() {
        console.log('静态方法调用了');
      }
    }
    // （1）创建类的实例
    const person3 = new Person('Kimi');
    const person4 = new Person('Bob');
    // （2）访问实例属性
    console.log( person3.name); // Kimi
    console.log( person4.name); // Bob
    // （3）调用实例方法
    person3.sayHello(); // Kimi实例方法调用
    person4.sayHello(); // Bob实例方法调用
    // （4）访问静态属性
    console.log( Person.count); // 0
    // （5）调用静态方法
    Person.describe(); //静态方法调用了