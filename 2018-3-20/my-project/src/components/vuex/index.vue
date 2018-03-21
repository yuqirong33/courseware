<template>
    <div>
      <p> {{$store.state.count}} </p>
      <button @click="fn">{{listenNum}}</button>
      {{num}}
    </div>
</template>

<script>
/*
  在模板中通过:
    $store.state去获取store中的数据

  在组件对象中是通过:
    this.$store.state去获取store中的数据
*/
export default {
  name: 'vuxDemo',
  data(){
    return {
      num:this.$store.state.count
    }
  },
  computed:{
    listenNum(){
      return this.$store.state.count;
    }
  },
  methods:{
    fn(){
      this.$store.commit('ADD');
    }
  }
}
</script>
<style>
img{
  display:none;
}
img.onOff{
  display:block;
}

</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
