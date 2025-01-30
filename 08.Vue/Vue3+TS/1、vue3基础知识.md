1、setup语法糖
（1）写在script标签中：setup函数中的数据自动return
（2）组件名字：借助插件：
第1步：先安装
npm i vite-plugin-vue-setup-extend
第2步：再配置：vite.config.js
<script>
    import {defineConfig} from 'vite';
    import VueSetupExtend from 'vite-plugin-vue-setup-extend';
    export default defineConfig({
        plugins:[VueSetupExtend()]
    })
</script>
<script lang="ts" setup name="Person">
let a = 666;
</script>
2、ref创建-基本类型数据的响应式数据
（1）创建（语法）：let 变量名 = ref('xxx')
（1）读取：template中不需要xxx.value
（2）读取：script中需要xxx.value
（3）修改：xxx.value = 新值
<script lang="ts" setup name="Person">
    import {ref} from 'vue';
    //响应式数据：只要数据改变才做成响应式
    let name = ref('张三');
</script>
3、reactive-只能定义对象类型的响应式数据
<script lang="ts" setup name="Person">
    import {reactive} from 'vue';
    //（1）创建：响应式对象（深层次响应）：使用代理对象proxy
    let name = reactive({
        brand:'奔驰',price:100
    });
    //（2）读取：
    console.log(name.brand,name.price);
    //（3）修改：
</script>
4、ref：可以定义：基本类型、对象类型的响应式数据
<script lang="ts" setup name="Person">
    //（1）创建
    let car = ref({
        brand:'奔驰',price:100
    });
    //（2）读取
    console.log(car.value.brand);
    //（3）修改
    car.value.brand = '小米';
</script>
5、ref对比reactive（到底用谁）？
答：（1）宏观角度看：
ref：定义基本类型、对象类型
reactive：定义对象类型
（2）区别：
ref：创建遍历使用.value（可使用volar插件自动添加.value）
reactive：重新分配1个新对象，失去响应式（可使用Object.assign整体替换）
<script lang="ts" setup name="Person">
    import {reactive} from "vue";
    let car = reactive({
        brand:'奔驰',price:100
    });
    //错误方式：car = {brand:'宝马',price:1000};->页面不更新->为什么ref定义的响应式对象就更新？因为ref读取使用xxx.value，只要修改了value，就相当于更新了响应式数据
    //三角形🥰正确方式：Object.assign()方法整体替换1个新对象
    Object.assign(car,{brand:'宝马',price:1000});
</script>
<script lang="ts" setup name="Person">
    let car = reactive({
        brand:'奔驰',price:100
    });
    //错误方式：car = ref({brand:'宝马',price:1000});->页面不更新
    //三角形🥰正确方式：整体替换1个新对象
    Object.assign(car,{brand:'宝马',price:1000});
</script>
（3）使用原则：
如果需要1个基本类型的响应式数据，必须使用ref
如果需要1个响应式对象，层级不深：ref、reactive都可
如果需要1个响应式对象，层级较深：推荐使用reactive
6、解构赋值：toRef()和toRefs()：把响应式对象直接解构成响应式值
<script lang="ts" setup name="Person">
   import {reactive,toRef} from "vue";
   //响应式对象
   let person = reactive({
    name:'张三',
    age:18
   });
   //（1）解构赋值：toRefs()：把reactive定义的对象每一组key:value都变成新对象，但value都变为ref定义的响应式数据值：{name:ref(person.name),age:ref(person.age)}
   //解构
   let {name,age} = toRefs
   (person);
   console.log("直接解构出响应式数据name,age=",name,age);
   //（2）toRef（）
     let n1 = toRef(person,'name');
     let a1 = toRef(person,'age');
   (person);
</script>
7、computed计算属性：本质：ref定义的响应式数据
<script lang="ts" setup name="Person">
    import {ref,computed} from 'vue';
    let firstName = ref('李');
    let lastName = ref('四');
    // let fullName = computed(()=>{return firstName.value+lastName.value});
    let fullName = computed({
        get(){
            return firstName.value+ '-' + lastName.value
        },
        set(val){
            let [str1,str2] = val.split('-');
            firstName.value = str1;
            lastName.value = str2;
        }
    });
    //（1）读取计算属性
    console.log("~~fullName=",fullName);
    //（2）修改计算属性
    function changeName(){
        fullName.value = '张-三'
    }
</script>
8、watch监视
（1）作用：监视数据变化
（2）特点：可监视以下4种数据：
第1种：ref定义的数据
<script setup lang="ts">
import { ref, watch } from 'vue';
const count = ref(0);
watch(count, (newVal, oldVal) => {
  console.log(`count 从 ${oldVal} 变为 ${newVal}`);
});
count.value++; // 触发 watch 回调
</script>
第2种：reactive定义的数据
<script setup lang="ts">
import { reactive, watch } from 'vue';
const state = reactive({
  count: 0
});
watch(() => state.count, (newVal, oldVal) => {
  console.log(`state.count 从 ${oldVal} 变为 ${newVal}`);
});
state.count++; // 触发 watch 回调
</script>
第3种：函数返回值（getter函数）：只要想监视对象中的某个属性，最好写函数式
注意点：若是对象监视的是地址值，需要关注对象内部，需要手动开启深度监视
<script setup lang="ts">
import { reactive, watch } from 'vue';
const state = reactive({
  count: 0
});
watch(() => state.count, (newVal, oldVal) => {
  console.log(`state.count 从 ${oldVal} 变为 ${newVal}`);
});
state.count++; // 触发 watch 回调
</script>
第4种：1个包含上述内容：使用数组包裹即可
<script setup lang="ts">
import { ref, reactive, watch } from 'vue';
const count = ref(0);
const state = reactive({
  count: 0
});
watch([count, () => state.count], ([newCount, newStateCount], [oldCount, oldStateCount]) => {
  console.log(`count 从 ${oldCount} 变为 ${newCount}`);
  console.log(`state.count 从 ${oldStateCount} 变为 ${newStateCount}`);
});
count.value++; // 触发 watch 回调
state.count++; // 触发 watch 回调
</script>
---------------------------------------------------------------------------------------
下面代码是课堂案例
<script lang="ts" setup name="Person">
    import {ref,watch} from 'vue';
    //🥰第1种：监视ref定义的基本类型数据
    let sum = ref(0);
    function changeSum(){
        sum.value += 1;
    };
    let stopWatch = watch(sum,(newVal,oldVal)=>{
        console.log("sum变化了");
        if(newVal >= 10){
            stopWatch();
        }
    });
    //监视ref定义的对象类型数据
    let person = {
        name:'张三',
        age:18
    }
    function changeName(){
        person.value.name += "~";
    }
    function changeAge(){
        person.value.name += 1;
    }
    function changePerson(){
        person.value = {name:'丽丽',age:28};
    }
    //监视ref定义的对象类型数据，监视对象的地址值，若想监视对象内部属性变化，需要手动开启深度监视
    //注意：若修改ref定义的对象中的属性，则newValue和oldValue都是新值，因为它们是同一个对象
    //注意：若修改ref定义的对象，则newValue是新值，oldValue是旧值，因为它们是不同对象
    //watch(被监视的数据，监视的回调，配置对象等)
    watch(person,(newVal,oldVal)=>{
        console.log()
    }，{deep:true,immediate:true})
    //第2种：监视reactive定义的对象类型数据，默认开启深度监视【隐式创建深层监听】
    let obj = reactive({
        name:'张三',
        age:90
    });
    //注意：修改reactive定义的整个对象，为什么需要使用Object.assign()？
    //原因：因为使用 Object.assign() 可以将新对象的属性复制到原响应式对象上，而不是直接替换整个对象。当使用 Object.assign() 复制属性时，Proxy 代理会拦截这些属性的设置操作。对于已经存在的属性，Proxy 会触发相应的更新逻辑，通知 Vue 进行响应式更新。对于新添加的属性，Vue 会自动将其也纳入响应式系统，确保后续对该属性的修改也能触发更新。
    function changeObj(){
            Object.assign(obj, {name:'李四',
        age:80})
    }
    //为什么newVal和oldVal相同？
    //答：因为没有创建新对象，一直都是在原对象上操作属性，底层帮我们打印对象一直都是打印新对象（地址值没变）
    watch(obj,(newVal,oldVal)=>{
        console.log("~~obj变化了",newVal,oldVal);
    })

    //第3种：监视上述多个数据：监视人的名字和1台车【注意：写法】
  
    watch([()=>person.name,()=>person.car.c1],(newVal,oldVal)=>{
        console.log("~~newVal,oldVal=",newVal,oldVal);
    },{deep:true});

    //🥰第4种：监视ref或reactive定义的对象类型中的某个属性，注意点如下：
    //🥰（1）若该属性值不是对象类型，则需要写成函数形式
    //注意：非对象类型属性：需要使用 getter 函数形式传递给 watch。
    const person = reactive({
        name: 'Kimi',// 非对象类型
        car: {
            brand: 'Toyota',
            model: 'Corolla'
        }
    });
    watch(()=>person.name,(newVal,oldVal)=>{console.log("person.name变化了",newVal,oldVal)});

    //🥰（2）若该属性值依然是对象类型，可直接写成函数
    //注意：对象类型属性：可以直接传递给 watch，但需要设置 deep: true 来深度监听内部属性的变化。
    watch(person.car,(newVal,oldVal)=>{console.log("person.car变化了",newVal,oldVal)});
</script>
9、总结1个问题：
（1）reactive 定义的对象：newVal 和 oldVal 相同，因为对象的引用未改变。可以通过计算属性或深拷贝来解决。
（2）ref 定义的基本类型：newVal 和 oldVal 会正确反映变化前后的值。
（3）ref 定义的对象：newVal 和 oldVal 会指向同一个对象，情况与 reactive 类似。
10、watchEffect(()=>{   })
<script setup lang="ts">
    import {ref} from "vue";
    //数据
    let temp = ref(10);
    let height = ref(0);
    //方法
    function changeTemp(){
        temp.value += 10;
    }
    function changeHeight(){
        height.value += 10;
    }
    //（1）watch：按需监视 明确指出监视的数据
    watch([temp,height],(value)=>{
        let [newTemp,newHeight] = value;
        if(newTemp >= 60 || newHeight >= 80){
            console.log("~~给服务器发请求");
        }
    })
    //🔺（2）watchEffect：自动监视函数中用到哪些属性，就会监视哪些属性
    watchEffect(()=>{
        console.log("~~默认开启立即监视");
        if(temp.value >= 60 || height.value >= 80){
           console.log("~~给服务器发请求"); 
        }
    });
</script>
11、标签中的ref属性：局部
子组件
（1）作用：注册模板引用
（2）普通DOM标签：获取DOM节点
（3）组件标签：获取组件实例对象
<script>
    import {ref,defineExpose} from 'vue';
    let a = ref(0);
    let b = ref(1);
    let c = ref(2);
    function showLog(){
        console.log("~~a.value=",a.value);
    };
    //注意：只有子组件使用defineExpose()把数据暴露出去了，在父组件的使用ref属性获取该子组件数据时，才可获取这些值，否则无法获取这些值
    defineExpose({a:a.value,b:b.value,c:c.value});
</script>

父组件
<template>
<h2 ref="title">上海</h2>
<button @click="showLog">点我输出h2的title</button>
<Person ref="person">子组件</Person>
</template>
<script>
    import {ref} from "vue";
    let title = ref();
    function showLog(){
        console.log("~~title.value=",title.value)
    }
</script>
12、回顾TS中的接口、泛型、自定义类型
<script lang="ts" setup name="Person">
    //接口规范
    import {type PersonInter,type Persons} from "./types/index.ts";
    //（1）限制单条数据：
    let person:PersonInter = {
        id:001,
        name:'张三',
        age:60
    }
    //（2）限制多条数据
    let personList:Array<PersonInter> = [
        {
        id:001,
        name:'张三',
        age:60
    },
    {
        id:002,
        name:'李四',
        age:80
    }
    ]
    let personList:Persons = [
        {
        id:001,
        name:'张三',
        age:60
    },
    {
        id:002,
        name:'李四',
        age:80
    }
    ]
</script>
13、props的使用:在 Vue 3 中，defineProps 可以非常灵活地定义组件的 props，你可以根据需要选择最适合你的场景的用法。使用对象、数组、字符串或类型定义 props 都是可以的，具体取决于你的偏好和项目的需求。
（1）父组件：App.vue
<template>
<Child a="哈哈哈" b="嘻嘻嘻"></Child>
</template>
<script setup lang="ts">
    //let personList:Persons = xxxxx
    // 或  直接传泛型
    let personList = reactive<Persons>([
          {
        id:001,
        name:'张三',
        age:60
    },
    {
        id:002,
        name:'李四',
        age:80
    },
    {
        id:003,
        name:'王五',
        age:80
    }]);
</script>
（2）子组件：Child.vue
<template>
<div>
<h2>{{a}}</h2>
</div>
</template>
<script setup lang="ts">
//（1）接收list
//defineProps(['list']);
//（2）接收list + 限制类型 
let x = defineProps<{list:Persons}>();
// defineProps<{ list: Persons[] }>();
//（3）接收list + 限制类型 +限制必要性
widthDefaults(defineProps<{list:Persons}>(),list:()=>[{{
        id:000,
        name:'小李',
        age:100
    }}
]);
</script>
14、Vue3生命周期：特定时刻调用特定函数
（1）创建：setup()
（2）挂载：onBeforeMount()、onMounted()
（3）更新：onBeforeUpdate()、onUpdated()
（4）卸载：onBeforeUnmoun()、onUnmouted()
15、自定义hooks：类似于mixin
<script setup lang="ts">
    import useDog from "./hook/2、useDog.js";
    let {dogList,getDog} = useDog();  
</script>
16、对路由的理解、基本效果切换
（1）导航区、展示区
（2）路由器
（3）路由规则
（4）形成xx.vue组件
App.vue根组件
<template>
<div>
    <!--导航区-->
    <div class="navigate">
        <!-- <a href="#">首页</a>
         <a href="#">新闻</a>
          <a href="#">关于</a> -->
          <RouterLink to="/home" active-class="active">首页</RouterLink>
          <RouterLink to="/news"  active-class="active">新闻</RouterLink>
          <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <!--展示区-->
    <div class="content">
        <!--此处可能要展示各种组件，具体展示啥组件需要看路径-->
        <router-view></router-view>
    </div>
</div>
</template>
//main.ts文件
<script setup lang="ts">   
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
//创建1个应用
let app = createApp(App);
//使用路由器
app.use(router);
//挂载整个应用到app容器中
app.mount('#app');

</script>
router.ts创建路由器并暴露
<script lang="ts">
    //第1步：引入createRouter
    import {createRouter,createWebHistory} from 'vue-router';
    import Home from './components/Home';
    //第2步：创建路由器
    let router = createRouter({
        history:createWebHistory(),
        routes:[
            {
                path:'/home',
                component:Home
            },
             {
                path:'/about',
                component:About
            },
             {
                path:'/news',
                component:News
            }
        ]
    });
    //暴露router
    export default router;
</script>
17、路由的注意点
（1）路由组件通常放在pages或views文件夹，一般组件放在components文件夹
（2）通过点击导航，视觉上消失了的路由组件，默认是被卸载的，需要时才回去挂载
路由组件：靠路由规则渲染出来的组件
一般组件：亲手写标签写好的
18、路由器的工作模式
（1）history模式：
vue2：mode:'history'
vue3：history:createWebHistory()
（2）hash模式
vue2：mode:'hash'
vue3：hash:createWebHasHistory()
19、路由：router-link组件中to的两种写法：
（1）to的字符串写法：to="path"
<RouterLink to="/home"></RouterLink>
（2）to的对象写法：:to="{path:'路由路径'}
<RouterLink :to="{path:'/home'}"></RouterLink>
20、嵌套路由：
<script lang="ts">
    //第1步：引入createRouter
    import {createRouter,createWebHistory} from 'vue-router';
    import Home from './components/Home';
    //第2步：创建路由器
    let router = createRouter({
        history:createWebHistory(),
        routes:[
            {
                path:'/home',
                component:Home
            },
             {
                path:'/about',
                component:About
            },
             {
                path:'/news',
                component:News
            }
        ]
    });
    //暴露router
    export default router;
</script>
21、路由：query参数
<li v-for="news in newsList" :key="news.id">
<!--（1）第1种写法-->
<router-link :to="`/news/detail?id=${news.id}&&title=${news.title}&&content=${news.content}`">{{news.title}}</router-link>
<!--（2）第2种写法-->
<router-link :to="{path:'/news/detail',query:{
id:news.id}}">{{news.title}}</router-link>
<router-link :to="{name:'detail',query:{
id:news.id}}">{{news.title}}</router-link>
</li>
<script setup lang="ts">
    //Detail.vue
    import {toRefs} from "vue";
    import {useRoute} from 'vue-router';
    let route = useRoute();
    //解构响应式对象
    let {query} = toRefs(route);
</script>
22、params参数：占位！！！
router.js
<script>
    import Detail from "./components/"
    {
        name:'detail',
        path:'/news/detail/:x/:y/:z',//占位符
        component:Detail
    }
</script>
<!--第1种写法：-->
<router-link to="/news/detail/哈哈哈/您好/哈哈哈">{{news.title}}
</router-link>
<!--第2种写法：-->
<router-link :to="{name:'detail',params:{id:news.id,title:news.title,content:news.content}}">{{news.title}}
</router-link>
Detail.vue组件
<script>
</script>
params传参注意点：
（1）传递params参数时，若使用to的对象写法，必须使用name配置项，不能使用path
（2）传递params参数时，需要提前在路由规则中占位
23、路由规则的props配置
router.js
<script>
    import Detail from "./components/"
    {
        name:'detail',
        path:'/news/detail/:id/:title/:content',//占位符
        component:Detail,
        //写法1：布尔值写法：将路由收到的所有params参数作为props传给路由组件
        // props:true,
        //写法2：函数式写法：可自由决定将什么作为props参数传给组件
        props(route){
            return route.query;
        },
        //写法3：对象式写法：可自由决定将什么作为props参数传给组件【写死了，用得较少】
        // props:{
        //     a:100,
        //     b:200,
        //     c:300
        // }
    }
    defineProps(['id','title','content'])
</script>
24、路由的replace、push属性：控制路由跳转时操作浏览器历史记录的模式
25、编程式导航：比如支付成功后3秒跳转到支付成功页面
<script setup lang="ts">
    //Detail.vue
    import {onMounted} from "vue";
    import {useRouter} from 'vue-router';
    let router = useRouter();
    onMounted(()=>{
        //编程式路由导航（脱离router-link的导航）
        router.push('/news');
    },3000);
</script>
26、多个组件共享数据：集中式状态（数据）管理：pinia和vuex、redux
27、搭建pinia环境
（1）安装：npm install pinia
（2）在mian.ts进行配置：
<script lang="ts">
//引入
import {createPinia} from 'pinia';
//创建
const pinia = createPinia();
//安装
app.use(pinia);
</script>
（3）使用pinia存储数据并读取数据：
<script lang="ts">
//存数据：defineStore()
import { defineStore } from 'pinia';
//分别暴露
export const useCountStore = defineStore("count", {
    //(1)存储数据
    state() {
        return {
            sum: 6
        }
    }
})
</script>
------------------------------------------------------------
求和组件：Count.vue
<template>
    <div>
        <h2>我是App组件</h2>
    </div>
</template>
<script lang="ts" setup name="Count">
import {useCountStore} from './store/count.ts';
let n = ref(1);
//(3)使用useCountStore得到1个专门保存count相关的store
const countStore = useCountStore();
//(2)读数据：获取store中state中的数据：两种方式
console.log("~~countStore.sum=",countStore.sum);
console.log("~~countStore.$state.sum=",countStore.$state.sum);
//（4）修改数据
function add(){
    //方式1：单个修改
    countStore.sum += 1;
    countStore.num += 666;
    //方式2：批量修改（批量变更）
    countStore.$patch({
        sum:888,
        num:1000
    });
    //方式3：
    countStore.increment(n.value);
}
//减法
function decrese(){
    //方式1：单个修改
    countStore.sum += 1;
    countStore.num += 666;
    //方式2：批量修改（批量变更）
    countStore.$patch({
        sum:888,
        num:1000
    });
    //方式3：
    countStore.increment(n.value);
}
</script>
------------------------------------------------------------
根组件App.vue
<template>
    <div>
        <h2>我是App组件</h2>
    </div>
</template>
<script lang="ts" setup name="App">

</script>
前端面试题：默认导出和命名导出有啥区别？
特点	                 命名导出	                    默认导出
导出方式	          export	                    export default
导入方式	          import { ... }	            import ...
模块中导出数量	       多个	                         一个
导入时的名称	 必须使用相同名称（或别名）	           可以任意命名
适用场景	         多个导出内容	                  单个主要导出内容
--------------------------------------------
30、storeToRefs()：
（1）只会关注store中的数据，使其变成响应式数据，不会对方法包装为响应式数据
（2）借助storeToRefs将store中的数据转为ref对象，方便在模板中使用
（3）注意：pinia提供的storeToRefs()只会对state中的数据做转换，但vue中的toRefs会转换store中所有内容，包括state数据、actions方法等等
<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {useTalkStore} from "./store/talkList.ts";
    const talkStore = useTalkStore();
    const {talkList } = storeToRefs(talkStore);
</script>
31、getters的使用：
（1）当state中的数据需要经过处理后再使用，可使用getters配置
（2）追加getters配置
<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {useTalkStore} from "./store/talkList.ts";
    const talkStore = useTalkStore();
    const {talkList } = storeToRefs(talkStore);
</script>
32、$subscribe的使用：订阅：可监视vuex中数据的修改
<script setup lang="ts">
    import {storeToRefs} from "pinia";
    import {useTalkStore} from "./store/talkList.ts";
    const talkStore = useTalkStore();
    const {talkList } = storeToRefs(talkStore);
    talkStore.$subscribe((mutate,state)=>{
        console.log("~~talkStore中保存的数据发生了变化");
        localStorage.setItem("talkList",JOSN.stringify(state.talkList));
    })
</script>
33、组件通讯方式
（1）props：父传子：属性值是非函数、子传父：属性值是函数
父组件：
<template>
<!--@1:传递props-->
<Child :car="car" :getToy="getToy"></Child>
<h2>子组件给的玩具：{{toy}}</h2>
</template>
<script setup lang="ts">
    import Child from "./Child.vue";
    //数据
    let car = ref('奔驰');
    let toy = ref('');
    //方法
    function getToy(value:string){
        toy.value = value;
    }
</script>
子组件：
<template>
<div>
    <h2>子组件</h2>
    <h3>父组件的车：{{car}}</h3>
    <h3 @click="getToy(toy)">把玩具给父组件</h3>
</div>
</template>
<script setup lang="ts">
    let toy = ref("奥特曼");
    //@2:声明接收props
    defineProps(['car','getToy']);
</script>
（2）自定义事件：子传父：
<template>
<!--给子组件Child绑定事件-->
<Child @custom="custom"></Child>
<h2>子组件给的玩具：{{toy}}</h2>
</template>
<script setup lang="ts">
   function test(value:number,a:number,b:number,c:number,event:Event){
    console.log("test",value);
   }
</script>
子组件：
<template>
<button @click="emit('custom',888)">测试</button>
</template>
<script setup lang="ts">
   let toy = ref('奥托');
   //声明事件
   const emit = defineEmits(['custom']);
//    onMounted(()=>{
//     setTimeOut(()=>{
//         //调用事件
//         emit('custom');
//     },3000);
//    })
</script>
（3）mitt：任意组件通讯：mitt插件【类似于emit()事件】
接收数据：提前绑定好事件（提前订阅消息）
提供数据：在合适的时间出发事件（发布消息）
@1:安装：npm i mitt
<script lang="ts">
    //@2：引入mitt
    import mitt from 'mitt';
    //@3：调用mitt得到emitter，emitter可：绑定事件、触发事件
    const emitter  = mitt();
    //@5：绑定事件
    emitter.on("fn1",()=>{
        console.log("~~fn1调用了");
    })
    emitter.on("fn2",()=>{
         console.log("~~fn2调用了");
    })
    setInterval(()=>{
      //@6：触发事件
      emitter.emit('test1');
      emitter.emit('test2');  
    },1000);
    setTimeout(()=>{
      //@7：解绑事件
      emitter.off('test1');
      emitter.off('test2');  
    },1000);
    //@8：清空事件
    emitter.all.clear();
    //@4：暴露emitter
    export default emitter;
</script>
<script lang="ts">
    import emitter from "./emitter.ts";
    //解绑事件
    onUnmounted(()=>{
        emitter.off('send-toy');
    })
</script>
（4）v-model：表单标签、组件标签：父传子，子传父
问题：$event到底是啥？
答：对于原生事件，$event就是事件对象，能XXX.target；
对于自定义事件，$event就是触发事件时传递的数据，不能XXX.target。
<AtguiguInput :modelValue="username" @update:modelValue="username == $event"></AtguiguInput>
（5）$atrrs：祖组件->孙组件：$attrs是1个对象，包含所有父组件传入的标签属性
注意：$attrs自动排除props中声明的属性（可认为声明过的props以被子组件自己消费了）
（6）$refs（父传子）和$parent子传父）
父组件
<script setup lang="ts">
    
</script>
子组件
<script setup lang="ts">

</script>
（7）provide和inject：祖孙组件
在祖先组件中通过provide配置向后代组件提供数据、在后代组件中通过inject配置来声明接收数据
（8）插槽：
默认插槽、具名插槽、作用域插槽
34、注意点：当访问obj.c时，底层会自动读取value属性，因为c是在obj这个响应式对象
let obj = reactive({
    a:1,
    b:2,
    c:ref(3)
});
let x = ref(4);
Vue3组件通讯总结：
组件关系                               传递方式
父传子                 props、v-model、$refs、默认插槽、具名插槽
子传父                 props、自定义事件、v-model、$parent、作用域插槽
祖传父                 $attrs、provide、inject
兄弟间、任意组件间传值   mitt、pinia
35、shallowRef浅层次ref（第1层）、shallowReactive浅层次响应式
（1）作用：创建1个响应式数据，但只对顶层属性响应式处理
（2）用法：let myVar = shallowRef(initialValue);
（3）特点：只追踪引用值变化，不关心值内部的属性变化
<script setup lang="ts">
    import {ref,shallowRef,shallowReactive} from 'vue';
    let sum = shallowRef(0);
    let person = shallowRef({
        name:'张三',
        age:18
    });
    //修改成功：因为sum.value是第1层（浅层）
    function changeSum(){
        sum.value += 1;
    };
    //修改失效：因为person.value是第1层，再.name就是第2层【深层】
    function changeName(){
        person.value.name = '李四';
    };
    //修改失效：因为person.value是第1层，再.age就是第2层【深层】
    function changeAge(){
        person.value.age = 28;
    };
    //修改成功：因为person.value是第1层（浅层）
    function changePerson(){
        person.value = {
            name:'Tony',
            age:100
        }
    };
    //深层次响应式
    let car = reactive({
        color:'red',
        brand:'奔驰'
    });
    //浅层次响应式
    let car = shallowReactive({
        color:'red',
        options:{
            brand:'奔驰',
            engin:'V8'
        }
    });
    //修改成功：浅层次
    function changeColor(){
        car.color = 'black';
    }
    //修改失败：深层次
    function changeBrand(){
        car.options.brand = '宝马';
        Objec.assign(car.options) = {
             brand:'大众',
             engin:'V10'
        }
    }
</script>
36、readonly（限制所有层次只读）、shallowReadonly（只限制第1层只读）：保护数据
<script setup lang="ts">
    import {readonly} from 'vue';
    //sum可修改
    let sum = ref(0);
    //sum2不能修改
    let sum2 = readonly(sum);
    //修改成功：因为sum.value是第1层（浅层）
    function changeSum(){
        sum.value += 1;
    };
    //修改失败：sum2是只读
    function changeSum2(){
        sum2.value += 1;
    };
    let car = reactive({
        color:'red',
        options:{
            brand:'奔驰',
            engin:'V8'
        }
    });
    let car2 = shallowReadonly(car);
</script>
37、toRaw(获取响应式对象的原始对象)和markRaw(标记1个对象，使其永远不会变成响应式)
<script setup lang="ts">
    import {reactive,toRaw,markRow} from 'vue';
    //响应式数据
    let person = reactive({
        name:'张三',
        age:18
    });
    //获取响应式数据的最原始格式：比如使用第3方库：mockjs、中国4个直辖市
    let oldPerson = toRaw(person);
    let citys = markRow({id:001,name:'北京'},{id:002,name:'上海'},{id:003,name:'天津'},{id:004,name:'重庆'})
</script>
38、customRef的使用：自定义ref
<script setup lang="ts">
    import {ref} from 'vue';
    //（1）需求：使用Vue默认提供的默认ref定义响应式数据，页面改变，数据等1秒后才更新
    let msg1 = ref('您好');
    //（2）解决：自定义ref
    let initValue = '你好';//初始值
    let timer;
    //track跟踪、trigger触发（发射器）
    let msg2 = customRef((track,trigger)=>{
        return {
            //msg2被读取时调用
            get(){
                track();//持续跟踪：告诉vue数据msg2很重要，要对msg2进行持续关注，一旦msg2变化就去更新
                return initValue;
            },
            //msg2被修改时调用
            set(val){
                clearTimeout(timer);
                timer = setTimeout(()=>{
                    initValue = val;
                    trigger();//通知变化：通知Vue数据msg变化了
                },1000);
            }
        }
    });
</script>
39、Teleport：传送：将组件html结构移动到指定位置的技术
<teleport to="body">
    <div class="modal" v-show="isShow">
    </div>
</teleport>
40、Suspense：
（1）作用：等待异步组件时渲染一些额外内容，增强用户体验
（2）步骤：
第1步：异步引入组件
第2步：使用Suspense包裹组件，并配置好default和fallback
<template>
<Suspense>
    <template v-slot:default>
        <Child/>
    </template>
    <template v-slot:fallback>
        <h3>加载中......</h3>
    </template>
</Suspense>
</template>
41、全局API转移到应用对象：app.component('hello')、app.config.globalProperties【添加全局属性】、app.mount、app.unmount、app.use
42、Vue3的非兼容性使用
