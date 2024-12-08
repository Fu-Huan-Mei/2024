//1、属性描述符：描述1个属性的相关信息

const obj = {
    a:1,
    b:2
};
//2、 Object.getOwnPropertyDescriptor()可得到1个对象中某个属性的属性描述符

const res = Object.getOwnPropertyDescriptor(obj,'a');
console.log(res);//{ value: 1, writable: true, enumerable: true, configurable: true }
/**
 * { 
 * value: 1, 属性值
 * writable: true, 该属性是否可被重新赋值（属性值是否可被修改）
 * enumerable: true, 该属性是否可被枚举（被罗列出来/被拿出来）
 * configurable: true 该属性的描述符是否可修改（描述符本身是否可被修改）
 * }
 */
//3、Object.getOwnPropertyDescriptors(对象)：可得到某个对象的所有属性描述符
console.log(Object.getOwnPropertyDescriptors(obj));
//4、Object.defineProperty(对象，属性名，描述符)：可为某个对象添加属性或修改属性时，配置其数属性描述符，可使用下面代码
console.log(Object.defineProperty(obj,'a',{ value: 3, writable: true, enumerable: true, configurable: false }));
//5、Object.defineProperties(对象，{属性名:{get(){},set(){}},属性名:{get(){},set(){}}})
