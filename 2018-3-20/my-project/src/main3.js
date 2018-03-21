// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false;
import Getter from './components/vuex/getter';
import Vuex from 'vuex';
/*
  getter:可以认为是 store 的计算属性（类似于computed）
    当数据发生变化的时候进一步处理数据
*/
Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    arr:[{
      id:0,
      name:'汤锅',
      price:200,
      count:0
    },{
      id:2,
      name:'螺丝刀',
      price:99,
      count:0
    }]
  },
  mutations:{
    ADD(state,id){
      let obj = state.arr.find(e=>e.id == id);
      obj.count ++;
    },
    REMOVE(state,id){
      let obj = state.arr.find(e=>e.id == id);
      obj.count --;
    }
  },
  getters:{
    total:(state,getters) => {
      // console.log(getters);
      let arr = [];
      state.arr.forEach(e=>{
        arr.push(e.price * e.count);
      });

      return arr.reduce((total,num)=>total+num);
    } 
  }
}); 

new Vue({
  el:'#app',
  store,
  template:'<Getter />',
  components:{Getter}
});





