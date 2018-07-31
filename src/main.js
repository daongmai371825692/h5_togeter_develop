import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$pubsub = new Vue();

import AppContent from './components/common/AppContent.vue'
Vue.component('app-content', AppContent);
//左右滑动
// import LeftRingt from './common/LRrolling'
// Vue.component('LeftRingt',LeftRingt)
//日期过滤器
import {formatDate} from './filter/dateFilter'
Vue.filter('formatDate', formatDate);

import NoSearchHeader from './components/common/NoSearchHeader';
Vue.component('NoSearchHeader',NoSearchHeader)




import AppHeader from './common/Appheader.vue'
Vue.component('app-header',AppHeader)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//1.设置html font-size
function resizeFontsize(){
  // 物理像素1080也就是设计图大小
document.documentElement.style.fontSize = (document.documentElement.clientWidth/375)*100+'px';
}
resizeFontsize();
window.addEventListener('orientationchange',resizeFontsize);
window.addEventListener('resize',resizeFontsize);
