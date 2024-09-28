var a = 20;
//++a取值21 变量21
//a++取值21 变量22
//a--取值22 变量21
//--a取值20 变量20
var res = ++a - a++ || a-- - --a;
console.log(a);//20
console.log(res);//2

