// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false;
// import Getter from './components/vuex/getter';
import Actions from './components/vuex/actions';
import Vuex from 'vuex';
/*
  getter:可以认为是 store 的计算属性（类似于computed）
    当数据发生变化的时候进一步处理数据
*/
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    count:0
  },
  mutations:{//只有mutations才能改变状态
    ADD(state){
      // setTimeout(()=>{
      //   state.count ++
      // },3000);
      state.count ++;
     
    }
  },
  //1.创建一个actions方法，调用指定的mutations
  //2.在某个条件成立的情况下,通过store.dispatch('actions方法')
  actions:{
    //在异步环境下调用mutations , jsonp,ajax
    asycAdd(){
      setTimeout(()=>{
        store.commit('ADD');
      },3000);
    }
  }
 
}); 

new Vue({
  el:'#app',
  store,
  template:'<Actions />',
  components:{Actions}
});





