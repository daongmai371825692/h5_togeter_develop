import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import appTitle from './appTitle.js'

const store = new Vuex.Store({
	modules:{
		appTitle
	}

})



export default store;