//选项式
import { defineStore } from 'pinia';
//（1）分别暴露
export const useCountStore = defineStore("count", {
    //（2）存储数据
    state() {
        return {
            sum: 6,
            num:0,
            school:'shanghai'
        }
    },
    //（3）方法：响应组件中的动作（动态功能）
    actions:{
        increment(value){
            console.log("~~increment被调用了value=",value);
            //如何修改数据？->this是谁？->this是当前store
            console.log("~~this是谁=",this);
            console.log("~~this.sum=",this.sum);
        }
    },
    //（4）getters属性
    getters:{
        bigSum(state){
            return state.sum * 999;
        },
        //限制返回值是1个string字符串
        uppperSchool(state):string{
            // return this.school.toUpperCase();
            return  state.school.toUpperCase();
        }
    },
    //（5）
})