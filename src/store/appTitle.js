 import Vue from 'vue'
 const state ={
 	//app中间的标题
 	title :'购物车',
 	cart:{}
 }
const getters ={
	
}
const mutations ={
	//修改app中间的标题
	modifyTitle(state,val){
		state.title =val;
	},
//	a(state,goods){
//		Vue.set(state.cart ,`p${goods.id}`,goods)
//		
//	}
}
const actions ={
	//执行修改app中间的标题
	handleModifyTitle(context,val){
		context.commit('modifyTitle',val)
	},
//	b({commit},val){
//		commit('a',val)
//	}
}

export default{
	namespaced:true,
	state,
	actions,
	getters,
	mutations
}
