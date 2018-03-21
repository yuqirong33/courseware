<template>
  <div>
    <p>{{$store.state.count}}</p>
    <button @click="add">点击自增{{listenCount}}</button>
  </div>
</template>
<script>
export default{
  name:'Index2',
  methods:{
    add(){
      this.$store.commit('ADD');
    }
  },
  computed:{
    listenCount(){
      return this.$store.state.count;
    }
  }

}
</script>

