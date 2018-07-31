<template>
    <div class="hot">
        <hot-header></hot-header>
         <app-content class="hot-contentd">
             <div class="hot-iscroll" ref="hotIscroll">
                    <ul class="nav-items">
                        <li class="item" :class="{active : index == clickIndex}" v-for="(item,index) in sweetList" :key="index" @click='tabClick(index)'>
                            {{item.name}}
                        </li>
                    </ul>
             </div>
             <div class="nav-right" @click="navRightClick"><i class="iconfont">&#xe62e;</i></div>
         </app-content>
        <nav-right ref="navRight"></nav-right>

        <div class="swiper-container content" ref="content">
            <div class="swiper-wrapper">
                <afte-tea class="swiper-slide" v-for="(item,index) in sweetList" :key="index" :id="item.id" :active="clickIndex==index">
                        
                </afte-tea>
                
            </div>
        </div>  
    </div>
</template>
<script>
import HotHeader from "../../components/hot/index/HotHeader";
import NavRight from "../../components/hot/index/NavRight";
//下午茶
import AfteTea from "./common/AfternoonTea.vue";
export default {
  data() {
    return {
      show: false,
      clickIndex: 0,
      sweetList: [
        { name: "下午茶",id:1 },
        { name: "甜品",id:2 },
        { name: "水果",id:3 },
        { name: "百货",id:4 },
        { name: "零食",id:5 },
        { name: "饮品",id:6 },
        { name: "熟食",id:7}
      ]
    };
  },
  components: {
    HotHeader,
    NavRight,
    AfteTea
  },
  methods: {
    navRightClick() {
      this.$refs.navRight.changeShow(true);
    },
    tabClick(index) {
      this.clickIndex = index;
      this.mySwiper.slideTo(this.clickIndex, 0);
    }
  },
  mounted() {
    this.myiscroll = new IScroll(this.$refs.hotIscroll, {
      //x,y轴是否可以滚动
      scrollX: true,
      scrollY: false
    });
    this.mySwiper = new Swiper(this.$refs.content, {
      onSlideChangeEnd: swiper => {
        this.clickIndex = swiper.activeIndex;
        console.log(this.myiscrolls)
      }
    });
  }
};
</script>
<style scoped>
.hot-contentd {
  top: 0.44rem !important;
}
.hot-iscroll {
  width: 85%;
  /* background: yellow; */
}
.nav-items {
  width: 150%;
  height: 0.35rem;
  display: flex;
  /* background: yellow; */
  /* overflow: auto; */
  /* flex-wrap: wrap; */
}
.item {
  /* width: 25%; */
  flex: 1;
  text-align: center;
  line-height: 0.35rem;
  float: left;
}
.nav-right {
  width: 15%;
  height: 0.35rem;
  position: absolute;
  top: 0;
  right: 0;
  background: #fff;
  text-align: center;
  line-height: 0.35rem;
}

/* 大轮播 */
.content {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0.79rem;
  bottom: 0.49rem;
}

.active {
  color: red;
  border-bottom: 1px solid red;
}
</style>


