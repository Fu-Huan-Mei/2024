import { ref } from 'vue';
import axios from 'axios';
export default function (){
//数据
let dogList = reactive([]);
//方法
async function getDog() {
    try {
        let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random');
        dogList.push(result.data.message);
        console.log("~~result=", result);
    } catch (err) {
        //拦截器可统一处理所有错误
        alert('~~请求出错了err=', err);
    }
}
//向外提供东西
return {dogList,getDog};
}
