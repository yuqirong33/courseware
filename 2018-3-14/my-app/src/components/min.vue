<template>
  <table id="tab" width="600" align="center" border="1">
		<thead>
			<th>全选<input 
        type="checkbox" 
        id="checkAll" 
        :checked="listenArr"
        @click="changeAll"
      ></th>
			<th index="id">编号</th>
			<th>商品</th>
			<th index="price">年龄</th>
			<th>操作</th>
		</thead>
		<tbody>
			<Tr 
                v-for="(val,key) in data" 
                :pval="val"
                @prm="prm"
                @pup="pup"
                @pdown="pdown"
            />
		</tbody>
	</table>
</template>
<script>
import Tr from './tr';
export default {
  name:"Min",
  props:['data','prm','pup','pdown','listenArr'],
  components:{
      Tr
  },
  methods:{
    changeAll(ev){
      let {checked} = ev.target;
      this.$emit('cAll',checked);
    }
  }
}
</script>

