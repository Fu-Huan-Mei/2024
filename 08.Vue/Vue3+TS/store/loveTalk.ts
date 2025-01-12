//组合式
import {reactive} from "vue";
export const useTalkStore = defineStore("talk",()=>{
    //（1）talkList就是state
    const talkList = reactive(JSON.parse(localStorage.getTItem('talkList') as string) || []);
    //（2）getAllTalk函数相当于action
    async function getAllTalk(){
        //发请求，下面这行写法：连续解构赋值+重命名
        let {data:{content:title}} = await axios.get('');
        //把请求回来的字符串包装成1个对象
        let obj = {is:nanoid(),title}
        //放到数组中
        talkList.unshift(obj);
    }
    return {talkList,getAllTalk};
})