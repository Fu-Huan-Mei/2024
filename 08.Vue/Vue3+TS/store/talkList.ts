import { defineStore } from 'pinia';
//分别暴露
export const useTalkStore = defineStore("count", {
    //存储数据
    state() {
        return {
            talkList: 6
        }
    }
})