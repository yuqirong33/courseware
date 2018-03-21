<template>
  <div id="app">
    <button @click="fn">点击</button>
    <div>{{num}}</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  data(){
      return {
        num:0
      }
  },
  methods:{
    fn(){
      this.num ++;
    }
  },
  components: {
    HelloWorld
  },
  beforeCreate(){
    alert('组件创建之前')
  },
  created(){
    alert('组件创建之后')
  },
  beforeMount(){
    alert('组件挂在之前,还没有显示内容')
  },
  mounted(){
    alert('组件挂在之后，会显示内容了') 
  },
  beforeUpdate(){
    alert('更新前') 
  },
  updated(){
    alert('更新后，就会更改内容') 
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
