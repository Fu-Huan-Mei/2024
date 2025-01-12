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
第3种：函数返回值（getter函数）
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
第4种：1个包含上述内容的数组
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
10、watchEffect
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
        <a href="#">首页</a>
         <a href="#">新闻</a>
          <a href="#">关于</a>
    </div>
    <!--展示区-->
    <div class="content">
        <!--此处可能要展示各种组件，具体展示啥组件需要看路径-->
    </div>
</div>
</template>
<script setup lang="ts">   
import {createApp} from 'vue';
import App from './App.vue';
import router from './router';
let app = createApp(App);
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
            }
        ]
    });
    //暴露router
    export default router;
</script>









