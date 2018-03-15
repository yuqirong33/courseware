import Vue from 'vue'
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import Tab from '@/components/aboutTab';

Vue.use(Router);

const routes = [
  {
    path:'/',
    component:HelloWorld
  },
  {
    path:'/about',
    //重定向
    redirect:'/about/0',
  },
  {
    path:'/about/:id',
    component:About,
    children:[
        {
          path:'',
          component:Tab
        }
    ]

    // children:[
    //   {
    //     path:'0',
    //     component:Tab
    //   },
    //   {
    //     path:'1',
    //     component:Tab
    //   },
    //   {
    //     path:'2',
    //     component:Tab
    //   }
    // ]
  },
  
]

export default new Router({routes,mode: 'history'});

/*
  1.引入vue-router

  2.Vue.use(导入进vue)

  3.配置路由表（数组）

  4.new Router({插入路由表})

  5.**必须** <router-view>
*/


