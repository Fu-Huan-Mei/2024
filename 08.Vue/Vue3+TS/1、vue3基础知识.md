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