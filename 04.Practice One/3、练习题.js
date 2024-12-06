// const person = {
//   name: "111",
//   age: 12,
//   family: {
//     son: "222",
//   },
// };
// const newPerson = JSON.parse(JSON.stringify(person));
// console.log('11', person);
// console.log('22', newPerson);
// newPerson.family.son = "333";
// person.family.son = "444";
// console.log('33', newPerson);
// console.log('44', person);

// const person = [
//   {
//     name: "111",
//     age: 12,
//     family: [
//       {
//         names: "111",
//         age: 12,
//         son: "222",
//         type: 1
//       }]
//   },
//   {
//     name: "111",
//     age: 12,
//     family: [
//       {
//         names: "111",
//         age: 12,
//         son: "222",
//         type: 2
//       }]
//   }
// ];
// person.forEach(item=>{
//   console.log("~~item=",item);
//   item.family.filter(newItem=>
//     {
//       console.log("~~newItem=",newItem);
//       return newItem.type==1
//     })
// });
// console.log(person);

//我这个确实是想直接修改原数组！！！而不是修改数组！！！
const person = [
  {
    name: "111",
    age: 12,
    family: [
      {
        names: "111",
        age: 12,
        son: "222",
        type: 1
      },
      {
        names: "333",
        age: 10,
        son: "444",
        type: 2
      }
    ]
  },
  {
    name: "555",
    age: 20,
    family: [
      {
        names: "555",
        age: 20,
        son: "666",
        type: 2
      },
      {
        names: "777",
        age: 25,
        son: "888",
        type: 1
      }
    ]
  }
];

person.forEach(item => {
  item.family = item.family.filter(newItem => {
    return newItem.type === 1;
  });
});

console.log(person);