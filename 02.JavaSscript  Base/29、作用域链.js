//作用域链：变量冲突时，取谁
//（1）创建变量（全局）
var name = "小鬼0";
var age = 18;
var address = "背景";
var job = "艺人";

function fun1() {
    //（2）创建变量（fun1的作用域）
    var name = "张三1";
    var age = 20;
    var address = "上海";
    var job = "管饭";

    function fun2() {
        //（3）创建变量（fun2的作用域）
        var name = "李四2";
        var age = 30;
        var address = "保山";
        var job = "英雄";

        function fun3() {
            //（4）创建变量（fun3的作用域）
            var name = "小王";
            var age = 40;
            var address = "大理";
            var job = "导游";
            console.log(name,age,address,job);
        };
        fun3();
    };
    fun2();
};
fun1();

//作用域与函数调用位置无关，与函数声明位置有关
var num = 600;
//fun4是一个全局变量
function fun4(){
    console.log('fn4',num);//fn4 600
};
function fun5(){
    var num = 800;
    //调用函数fun4()
    fun4();
};
//调用fun5
fun5();