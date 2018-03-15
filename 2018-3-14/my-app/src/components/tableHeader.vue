<template>
    <ul id="header">
		<li class="addPre">
			<label>名字： <input v-model="nameVal" type="text" id="name" /></label>
			<label>年龄： <input v-model="ageVal" type="text" id="age" /></label>
			<input 
				type="button" 
				value="添加" id="add" 
				@click="add"
			/>
		</li>
		<li>
			<span>排序</span>
			<select id="s1" v-model="s1">
				<option value="price">年龄</option>
				<option value="id">编号</option>
			</select>
			<select id="s2" v-model="s2">
				<option value="2">从高到底</option>
				<option value="1">从低到高</option>
			</select>
			<input 
				type="button" 
				value="提交" 
				id="stBtn"
				@click="sortFn"
			/>
			<input type="button" value="批量删除" id="rm" @click="allrm"/>
		</li>
	</ul>
</template>
<script>
export default {
    name:"TabHeader",
	data(){
		return {
			s1:'id',
			s2:'1',
			nameVal:"",
			ageVal:""
		}
	},
	methods:{
		allrm(){
			this.$emit('allrm');
		},
		sortFn(){
			this.$emit('pSort',this.s1,this.s2);
		},
		add(){
			if(!this.nameVal && !this.ageVal)return;
			this.$emit('addData',{
				id:new Date().getTime(),
				name:this.nameVal,
				price:this.ageVal,
				checked:false
			});
			this.nameVal = this.ageVal = '';

		}
	}
}
</script>

