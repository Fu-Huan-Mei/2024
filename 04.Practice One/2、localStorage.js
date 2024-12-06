// export default {
//     //思路：在localStorage的外面再包一层takeWay=>这个系统的local{}对象
//     setItem(key,val){

//     }
// }
// import local from "./2、localStorage.js";
// local.getItem();
const array = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = array.filter((item, index) => array.findIndex((x) => x === item) === index);
console.log(uniqueArray); // [1, 2, 3, 4, 5]