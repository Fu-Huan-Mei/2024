var arr = [1, 132, 12, 3, 48, 5];
//sort()排序按照字符串排序比较！！
// var res = arr.sort();
// console.log(res);

//使用sort()方法自定义排序规则
arr.sort(function (next, pre) {
    //相邻两个元素传递进入该匿名函数
    // console.log(a, b);
    /**a是后面元素,b是前面元素
     * 132 1
        12 132
        3 12
        48 3
        5 48
     */
    //升序：[ 1, 3, 5, 12, 48, 132 ]
    // if(pre > next){
    //     return -1;//返回值是负数：自动交换元素位置
    // }

    //降序：[ 132, 48, 12, 5, 3, 1 ]
    // if(pre<next){
    //     return -1;
    // }

    //升序
    // return next - pre;

    //降序
    return pre - next;
});
console.log(arr);