//该对象从未被引用，引用是0，该对象创建完就成了垃圾
[1,2,3];
//{name:'Lisa',age:19}这个对象被window.user引用，引用计数+1
var user = {
    name:'Lisa',
    age:19
};
//又被window.address引用，引用计数+1
var address = user;
//window.user不再引用{name:'Lisa',age:19}，引用计数-1
user = 1;
//如果程序运行到最后即关闭页面时，window对象会被自动销毁，则引用计数变为0

//创建对象
////Bob这对象被window.person1引用，引用计数是1
//可通过window.person1到达Bob对象
var person1 = {
    name:'Bob',
    age:18
};
////Amy这对象被window.person2引用，引用计数是1
//可通过window.person2到达Bob对象
var person2= {
    name:'Amy',
    age:18
};
////Amy对象又被person1.children引用，引用计数是2
//可通过window.person1.children到达Amy对象
person1.children = person2;
////Bob对象又被person2.children引用，引用计数是2
//可通过window.person2.children到达Bob对象
person2.children = person1;
////window.person1不再引用Bob，引用计数-1
//window..person1不可到达Bob对象
person1 = 200;
////window.person2不再引用Amy，引用计数-1
//window.person2不可到达Amy对象
person2 = 100;

