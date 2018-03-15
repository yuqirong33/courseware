<template>
  <div class="tab">
     <!-- {{arr[num]}} -->
     {{$route.query.txt}}
  </div>
</template>

<script>
export default {
  name: 'Tab',
//   props:['num'],
//   data(){
//       return {
//           arr:[1111111,2222222,333333]
//       }
//   }
}
</script>

<style>
.btns .router-link-active{
    background: yellow;
}
.tab{
    width:200px;
    height: 150px;
    border: 5px solid #000;
    margin: 0 auto;
}
</style>