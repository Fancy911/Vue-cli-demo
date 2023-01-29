<template>
    <h1 class="title">hello app</h1>
    <el-button type="primary">按钮</el-button>
    <ul>
        <li>
            <!-- router-link是vue-router提供的组件，用来跳转路由 -->
            <router-link to="/home">Home</router-link>
        </li>
        <li>
            <router-link to="/about">About</router-link>
        </li>
    </ul>
    <!-- router-view是vue-router提供的组件，用来加载展示路由对应的组件 -->
    <router-view/>
</template>

<script>
// 按需导入：需要什么组件就导入什么组件，不要忘记引入后还要在components里注册。
// 但其实按需加载也不是那么省体积，所以一般都是全局全部导入就好
import {ElButton} from 'element-plus';

export default {
    name: 'App',
    components: {
        ElButton,
    },
};
</script>

<style>
.title {
    color: pink;
}
</style>
