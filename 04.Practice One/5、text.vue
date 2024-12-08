<template>
    <!--官网源码-->
    <a-table :columns="columns" :data-source="data">
        <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
    </a-table>
    <!--我自己改造-->
    <a-table :columns="columns" :data-source="data">
        <span slot="action" slot-scope="text, record"
        v-for="let button in buttonList(record)">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
        </span>
    </a-table>
</template>
<script>
exort default {
    methods:{
        getButton(record){
            let buttonList;
            if(record == 1)
        }
        
    }
}
</script>