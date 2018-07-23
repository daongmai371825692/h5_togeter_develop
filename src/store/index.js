import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//全局状态，全局数据
const state = {
  username: null,

  userid: null,
  age: null,
  headerImg: 'https://cn.vuejs.org/images/logo.png'
}

//全局计算属性
const getters = {
  isLogin(state){
    console.log('调用了isLogin');
    if(state.username){
      return true;
    }else{
      return false
    }
  }
}

//操作状态的方法
//外部通过commit调用
const mutations = {
  modifyName(state, value){
    state.username = value;
  }

}

// 操作状态的事件，有逻辑操作的，有异步操作的
// actions是可以包含异步操作的
//外部通过dispatch调用
const actions = {
  modifyname(context, params){
    // console.log('modifyname执行了');
    //.....
    // context.state.username = params;
    context.commit('modifyName', params);

  },
  modifyage(){
    // console.log('modifyage执行了');
  },
  initUserData(context, params){
    // console.log('初始化事件');
    // console.log(params);
    context.commit('modifyName', params.username);
    context.state.age = params.age;
    context.state.userid = params.id;
  },
  logoutAction(context){
    context.commit('modifyName', null);
    context.state.age = null;
    context.state.userid = null;
  },
  getCity(){
    //定位，得到经纬度
    // 经纬度转城市位置
    // 赋值给全局状态
  }
}


//集中式存储管理应用的所有组件的状态
//集中式存储管理项目中的所有组件能够访问的状态的仓库
const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations

})

//console.log(store);


export default store;