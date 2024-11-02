//函数A
function A() {
    var n1 = 100, n2 = 200;
    //函数B
    function B() {
        //函数B中可访问函数A中的数据
        console.log(n1 + n2);
    };
    //实现闭包的方式1：将函数B作为返回值
    //return B;
    //实现闭包的方式2：将函数B赋值给全局对象属性
    //window.func = B;
    //实现闭包的方式3：将函数B作为事件的回调函数
    document.onclick = B;
};
var r = A();
r();
func();


