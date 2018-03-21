<template>
    <div>
      <h1>开始</h1>
      <img src="./3.gif" :class="{onOff:loading}" />
      <ul>
        <li v-for="(val,key) in arr">{{val.title}}</li>
      </ul>
    </div>
</template>

<script>
// let url = 'https://api.douban.com/v2/book/search?q=react';
// // console.log(fetch)
// fetch(url).then((response)=>{
//   return response.json();
// }).then((data)=>{
//   console.log(data);
// })
import jsonp from 'fetch-jsonp';
export default {
  name: 'FetchJsonp',
  data () {
    return {
      arr: [],
      loading:true
    }
  },
  beforeCreate(){
    this.loading = true;
    // alert(1);
  },
  created(){
    // this.loading = false;
  },
  mounted(){
    let _this = this;
    jsonp('https://api.douban.com/v2/book/search?q=react')
    .then((response)=>response.json())
    .then((data)=>{
      _this.arr = data.books;
      _this.loading = false;
      // console.log();
    })
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
