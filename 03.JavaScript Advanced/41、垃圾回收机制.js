//1、垃圾对象：JS中没有被引用的对象
//2、垃圾回收：销毁垃圾对象，释放内存
//3、自动回收垃圾的编程语言：Java、Python、JS等
//4、垃圾没有回收后果：内存泄漏->内存溢出（内存空间不够，电脑越来越卡或者打开网页时打不开）
//5、垃圾回收常见算法：
//（1）引用计数：引用标记：被引用+1、未被引用-1、引用为0时就被回收了，但互相引用的对象无法被回收（内存泄漏）
//（2）标记清除：
//标记阶段：从根对象出发，每一个可访问的对象都会被添加1个标记，于是这个对象就被标记为可到达对象
//清除阶段：垃圾回收器会对内存从头到尾进行遍历，如果发现有对象没有被标记为可到达对象，那将该对象占用的内存回收
//一轮结束，将原来标记清除，便于开启下一轮标记清除