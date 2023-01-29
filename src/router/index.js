import { createRouter, createWebHistory } from "vue-router";

// 路由懒加载
const Home = () => import('../views/Home'); 
const About = () => import('../views/About')

// 暴露createRouter函数，会返回一个路由对象
export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/about',
            component: About
        }
    ]
})