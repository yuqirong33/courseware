<template>
  <div id="app">
    <section class="tBody">
      <TabHeader 
        @addData="addData" 
        @pSort="psort"
        @allrm="allrm"
      />
      <Min 
        :data="arr" 
        :prm="Premove"
        :pup="Pup"
        :pdown="Pdown"
        :listenArr="listenArr"
        @cAll="cAll"
      />
    </section>
  </div>
</template>

<script>
import TabHeader from './components/tableHeader';
import Min from './components/min';
export default {
  name: 'App',
  data(){
    return {
      arr:[
          {
              'id' : 1,
              'name' : 'momo',
              'price' : 36,
              'checked':false
          },
          {
              'id' : 2,
              'name' : '小恋',
          'price' : 40,
          'checked':false
          },
          {
              'id' : 3,
              'name' : 'yaya',
          'price' : 20,
          'checked':false
          },
          {
              'id' : 4,
              'name' : 'feifei',
          'price' : 10,
          'checked':false
          },
          {
              'id' : 5,
              'name' : 'hhehe',
          'price' : 35,
          'checked':true
          }
      ]
    }
  },
  components: {
    TabHeader,
    Min
  },
  methods:{
    allrm(){
      this.arr = this.arr.filter(e=>!e.checked);
    },
    psort(s1,s2){
      if(s2 == 1){ //从小到大
        this.arr.sort((a,b)=>{
          return a[s1] - b[s1];
        })
      }else{
        this.arr.sort((a,b)=>{
          return b[s1] - a[s1];
        })
      }
    },
    cAll(bloo){
      this.arr.forEach(e=>{
        e.checked = bloo;
      });
    },
    addData(newVal){
      this.arr.push(newVal);
    },
    Premove(id){
      this.arr = this.arr.filter(e=>e.id!=id);
    },
    Pup(id){
      let index = this.arr.findIndex(e=>e.id == id);
      if(index !== 0){
        let arr = this.arr.concat();
        let a = arr[index-1];
        let b = arr[index];
        arr[index-1] = b;
        arr[index] = a;
        this.arr = arr;
      }else{
        alert('到头了');
      }
      console.log(index);
     
    },
    Pdown(id){

      let index = this.arr.findIndex(e=>e.id == id);
      if(index !== this.arr.length-1){
        let arr = this.arr.concat();
        let a = arr[index+1];
        let b = arr[index];
        arr[index+1] = b;
        arr[index] = a;
        this.arr = arr;
      }else{
        alert('到尾了');
      }
    }
  },
  computed:{
    listenArr(){
      return this.arr.every(e=>e.checked);
    }
  }
}
</script>

<style>
body,
h1 {
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
	list-style: none;
}
input {
	outline: none;
}
table {
	border-collapse: collapse;
	border: #bbb;
}
body {
	width: 100%;
	height: 100%;
	/*background: url(img/2.jpg) no-repeat;*/
}
.tBody {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 30px;
	padding: 20px 30px 40px;
	background-color: rgba(255,255,255,.6);
}
.title {
	text-align: center;
	color: #fca113;
	text-shadow: 0 0 2px #fcf913;
	line-height: 50px;
}
table {
	background-color: #fff;
}
th {
	background-color: #ddd;
}
tr {
	height: 30px;
}
ul {
	padding: 5px 0;
	width: 600px;
	text-align: center;
}
td{
	text-align: center;
}
td input {
	margin: 0 2px;
}
li {
	padding: 5px 0;
	overflow: hidden;
}
label {
	display: inline-block;
}
input[type="text"] {
	border: 1px solid #ccc;
	width: 80px;
	height: 20px;
}
</style>
