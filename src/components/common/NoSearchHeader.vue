<template>
    <header class="noSearchHeader">
          <button class="leftBtn" v-if='leftBtn'>{{leftBtn}}</button>
          <h1>选择地址</h1>
          <button class="rightBtn" v-if='rightBtn'>{{rightBtn}}</button>
    </header>

</template>

<script>
import Vuex from 'vuex';
export default{
	data(){
		return{
			
		}
	},
	props:['leftBtn','rightBtn'],
	mounted(){
		
	}
}
</script>
<style scoped>
.noSearchHeader{
    line-height: 0.44rem;
    width:100%;
 
  	position: sticky;
  	text-align: center;
  	color: #fff;
  	background: #F87D88;
}
button{
	color: inherit;
	
}
h1{
	display: inline-block;
	font-size: 0.16rem;
	
}
.leftBtn,.rightBtn{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	
}
.leftBtn{
	left: 0.16rem;
}
.rightBtn{
	right: 0.23rem;
	font-size: 0.15rem;
}

</style>
