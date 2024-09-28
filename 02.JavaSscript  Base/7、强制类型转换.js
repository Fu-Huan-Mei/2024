console.log(parseInt(1.000102));//1
console.log(parseFloat(1.000102));//1.000102
console.log(parseInt(false));//NaN
console.log(parseFloat(false));//NaN
console.log(parseInt('hn1230'));//NaN
console.log(parseFloat(''));//从空字符串中无法提取数字
console.log(parseFloat('123.13'));
console.log(parseInt(12.34));//从数字中提取整数部分