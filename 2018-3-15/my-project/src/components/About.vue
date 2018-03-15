<template>
  <div class="hello">
    <!-- <button>
      返回首页
    </button> -->
    <router-link to="/">返回首页</router-link>
    <h3>我是about</h3>

     <div class="btns">
      <router-link :to="{path:'/about/0',query:{txt:'这是第一条内容'}}" tag="button">按钮一</router-link>
      <router-link :to="{path:'/about/1',query:{txt:'这是第二条内容'}}" tag="button">按钮二</router-link>
      <router-link :to="{path:'/about/2',query:{txt:'这是第三条内容'}}" tag="button">按钮三</router-link>
    </div>


    <button @click="click">跳到第二个按钮上</button>

    
    <!-- <div class="btns">
      <router-link to="/about/0" tag="button">按钮一</router-link>
      <router-link to="/about/1" tag="button">按钮二</router-link>
      <router-link to="/about/2" tag="button">按钮三</router-link>
    </div> -->
    <router-view :num="$route.params.id" />
  </div>
</template>

<script>
/*
    关于路由的细节信息都是从$route中获取
      比如:
        $route.params去获取id值

    如果要使用push，那么得去this.$router中调用。
      this.$router.push('/about/2');
*/

export default {
  name: 'About',
  methods:{
    click(){
      // console.log(this.$route.params)
      console.log(this.$route)
      // this.$router.push('/about/1?txt=这次就把第二条改了');
      this.$router.push({
        path:'/about/1',
        query:{txt:'这次就把第二条改了'}
      })
    }
  }
}
</script>
<style>

</style>