// 定义数组
var users = [
    {name: '曹操', age: 67, address: '许昌'},
    {name: '刘备', age: 47, address: '成都'},
    {name: '孙权', age: 37, address: '南京'},
    {name: '吕布', age: 51, address: '包头'},
    {name: '赵云', age: 46, address: '石家庄'},
    {name: '诸葛亮', age: 53, address: '南阳'}
];
// console.log(users);
// users.forEach(function(item,index,arr){
//     //有几个元素就被调用几遍
//     console.log(item,index);
// });
//filter()方法：
var res = users.filter(function(item,index){
    console.log(item,index);
});
console.log(res);