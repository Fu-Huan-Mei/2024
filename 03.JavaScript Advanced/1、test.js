// // const p = new Promise(reject=>{
// //     reject(1);
// // }).catch(err=>{
// //     console.log(err);
// // }).then(
// //     (res)=>{
// //         console.log(res);
// //         console.log(2);
// //     },
// //     ()=>{
// //         console.log(3);
// //     }
// // );
// // console.log(p);

// // const nestedArray = [1, [2, [3, [4, 5]]]];
// // const flatArray = nestedArray.flat(Infinity); // Infinity 表示无限递归深度
// // console.log(flatArray); // 输出：[1, 2, 3, 4, 5]

// const nestedArray = [1, [2, [3, [4, 5]]]];
// //??
// const flatArray = nestedArray.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flat(cur) : cur), []);
// console.log(flatArray); // 输出：[1, 2, 3, 4, 5]

// var arr = [0,1, 2, 3, 4, 5];
// arr.splice(1, 2, 'a', 'b'); // 
// console.log(arr);

// var arr = [0,1, 2, 3, 4, 5];
// arr.sort(); // 排序
// console.log(arr); // [0, 1, 2, 3, 4, 5]

// let arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// let array1 = Array.prototype.slice.call(arrayLike); // 使用 Array.prototype
// const array2 = slice.call(arrayLike); // 直接使用 slice

// console.log(array1); // 输出：['a', 'b', 'c']
// console.log(array2); // 输出：['a', 'b', 'c']
// console.log([].__proto__ === Array.prototype);
// console.log(Array.prototype.__proto__ === Object.prototype);
// console.log(Object.prototype.__proto__ === null);

let obj = { a: 1, b: 2, length: 2 };
// for(item in obj){
//     console.log(obj[item]);
// };
// let arr = Object.entries({a:1,b:2}).forEach((item,index)=>{
//     console.log(item[0]+'='+item[1]);
// });
// console.log(Object.keys(obj));//[ 'a', 'b' ]
// console.log(Object.values(obj));//[ 1, 2 ]

// console.log(Object.getOwnPropertyNames(obj));
// for(let item of obj){
//     console.log(item,obj);
// }

//实现数组的随机排序
let arr = [1, 2, 3, 5, 4, 6, 8, 7, 9];
// console.log(arr.sort());
// console.log(parseInt(Math.random()*10));
let newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randomSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var r = parseInt(Math.random() * arr.length);
        var temp = arr[r];
        arr[r] = arr[i];
        arr[i] = temp;
    }
    return arr;

}
console.log(randomSort(newArr));



arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function randSort2(arr) {
    var mixedArray = [];
    while (arr.length > 0) {
        //获取随机索引
        var randomIndex = parseInt(Math.random() * arr.length);
        //通过索引值获取元素放入新数组中
        mixedArray.push(arr[randomIndex]);
        //记得在原数组中删除该元素
        arr.splice(randomIndex, 1);
    }
    return mixedArray;
}
console.log(randSort2(arr))

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.sort(function () {
    console.log(Math.random());
    return Math.random() - 0.5;
})
console.log(arr);