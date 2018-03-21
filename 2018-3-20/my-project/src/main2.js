// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import FetchJsonp from './components/fetch-jsonp';
import vuxDemo from './components/vuex';
Vue.config.productionTip = false;
import Vuex from 'vuex';  //1.引入vuex

Vue.use(Vuex);  //2.使用中间件

//3.创建一个store

const store = new Vuex.Store({
  state:{
    count:0
  },
  //只有通过mutations才能改变数据,等同于redux中的触发action
  mutations:{ //4.设置触发器
    ADD(state){ //state原始的数据
      state.count++;
    } 
  }
});

// store.commit('ADD'); //5.调用ADD这个"事件"
// console.log(store.state.count);
new Vue({
  el: '#app',
  store, //把store注入到组件中
  components: { App,vuxDemo },
  template: '<vuxDemo/>'
})
