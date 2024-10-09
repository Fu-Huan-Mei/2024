//1、数组
//值的有序集合
//元素：组成数组的成员（值），任意类型
//索引：每个元素都有位置，位置使用数字表示，连续的数字，从0开始，数组索引必须是连续的
//2、创建数组方式
//（1）直接量

// console.log([10]);//[ 10 ]
// console.log(Array(10));//[ <10 empty items> ]

var A = [{ id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }];
var B = [{ id: 2, a: 2 }];

const filteredArray = A.filter(itemA => 
{
    return B.some(itemB => 
        {return itemB.id === itemA.id && itemB.a === itemA.a})
}   
);
console.log(filteredArray);

const filteredArrays = A.filter(itemA => 
    {
        return B.forEach(itemB => 
            {return itemB.id === itemA.id && itemB.a === itemA.a})
    }   
    );
console.log(filteredArrays);

// var newArr = A.filter(item=>item.id===1);
// console.log(newArr);//[ { id: 1, a: 1 } ]
// var res = A.some(item=>item.id === 1);
// console.log(res);//true
