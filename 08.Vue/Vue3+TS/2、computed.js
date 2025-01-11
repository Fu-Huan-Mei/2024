function computed() {
    // 定义一个对象
    let data = {
        age: 18
    };

    // 定义一个函数
    const getAge = () => {
        return 20;
    };

    // 打印对象的属性
    console.log("data.age =", data.age);

    // 打印函数的返回值
    console.log("方法返回值 =", getAge());
}

computed();