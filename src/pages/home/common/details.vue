<template>
<div>
 <h1 class="details">商品详情</h1>
    <app-content id="content">
        <swiper ref="banner" class="banner">
            <swiper-item v-for="(item,index) in details.banner" :key="index">
             <img :src=item.imgUrl class="img">
            </swiper-item>
        </swiper>
        
            
                <div class="list">
                   <p class="name">{{init.name}}</p>
                   <p>{{init.goodsDesc}}</p>
                   <br>
                   <p><i v-show="init.memberprice" class="membprice">￥{{init.memberprice}}</i><span v-show="init.price" class="price">￥{{init.price}}</span></p>
                </div>
           
        
    </app-content>
    <div class="footer">
        <i class="iconfont icon-03f"></i>
        <span class="join">加入购物车</span>
    </div>
    </div>
</template>

<script>
import {getlist} from '../../../services/homeService.js'

import Swiper from '../../../components/common/Swiper.vue'

import SwiperItem from '../../../components/common/SwiperItem.vue'
export default {
    props:['id'],
    
    data(){
        
        return {
            details:[],
            init:[]
        }
    },
    components:{
        Swiper,
        SwiperItem
    },
    mounted(){
        getlist(this.id).then(item=>{
           this.details=item
           console.log(item)
           this.init=item.data
           this.$nextTick(()=>{
               this.$refs.banner.updateDOM()
           })
        })
    }
}
</script>

<style scoped>
#content{
    position: absolute;
    top: .5rem !important;
    bottom: .49rem !important;
    background: #fff;
    z-index: 99
}
.details{
    width: 100%;
    text-align: center;
    color: #ff4891;
    font-size: 0.18rem;
    line-height: 0.5rem;
    display: inline-block;
    border-bottom: 1px #ff4891 solid
}
.banner{
    height: 2.8rem;
}
.img{
    width: 100%;
    height: 100% ;
}
.footer{
    width: 100%;
    height: .49rem;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99;
    background: #fff;
     display: flex
}
.icon-03f{
   font-size: 0.3rem;
   width: 20%;
    display: inline-block;
    line-height: 0.49rem;
   text-align: center
}
.join{
    width: 80%;
    height: 100%;
     background: #ff4891;
     color: #fff;
     font-size: 0.18rem;
     text-align: center;
     line-height: 0.49rem
}
                   
.list{
    padding: 0.2rem
}
.name{
    font-size: 0.2rem;
    font-weight: bold;
    line-height: 0.4rem
}
.membprice{
    color: #ff4891
}
.price{
    color: rgb(150, 150, 150);
    font-size: 0.12rem;
    text-decoration: line-through
}
</style>
