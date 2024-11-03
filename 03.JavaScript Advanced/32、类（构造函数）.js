//数组的构造函数是Array
var arr = [];
//原型链：arr->Array.prototype->Object.prototype
//构造函数 Array Object
//Array是子类 Object是父类

//字符串的构造函数是String
var msg = new String();
//原型链：msg->String.prototye->Object.prototype
//构造函数 String Object
//String是子类 Object是父类

//元素类型的对象
var box = document.querySelector('#box');
//原型链：box->HTMLDivElement.prototype->HTMLElement.prototype->Element.prototype->Node.HTMLDivElement.prototype->EventTarget.prototype->Node.prototype
//构造函数：     HTMLDivElement          HTMLElement            Element   