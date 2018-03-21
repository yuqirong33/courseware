<template>
  <div>
    <p>{{$store.state.count}}</p>
    <button @click="add">点击自增{{listenCount}}</button>
  </div>
</template>
<script>
export default{
  name:'Actions',
  methods:{
    add(){
      this.$store.dispatch('asycAdd');
    }
  },
  computed:{
    listenCount(){
      return this.$store.state.count;
    }
  }

}
</script>

