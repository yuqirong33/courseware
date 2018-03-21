<template>
  <div>
    <h1>商品</h1>
    <ul>
      <li v-for="(val,key) in $store.state.arr">
        <button @click="rm(val.id)">-</button>
        <span>{{val.count}}</span>
        <button @click="add(val.id)">+</button>
        <span>{{val.name}}</span>
        <span>{{val.price}}</span>
      </li>
    </ul>
    <div>总计:<strong>{{$store.getters.total}}</strong></div>
  </div>
</template>
<script>
export default{
  name:'Getter',
  methods:{
    rm(id){
      this.$store.commit('REMOVE',id);
    },
    add(id){
      this.$store.commit('ADD',id);
    }
  }
}
</script>

