import Vue from 'vue'
import Router from 'vue-router';

import Muissc from '@/components/Muissc'
import Song from '@/components/Song'

Vue.use(Router);

const routes = [
  {
    path:'/',
    component:Muissc
  },
  {
    path:'/song/:id',
    component:Song
  }
]

export default new Router({routes,mode: 'history'});

/*
  1.引入vue-router

  2.Vue.use(导入进vue)

  3.配置路由表（数组）

  4.new Router({插入路由表})

  5.**必须** <router-view>
*/


