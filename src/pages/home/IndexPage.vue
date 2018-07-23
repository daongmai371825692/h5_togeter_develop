<template>
    <div>
        
     <app-header></app-header>
     <app-content class="content">
     <left-ringt></left-ringt>
           <swiper>
               <swiper-item v-for="item in img" :key="item.id">
                  <img :src="item.img" class="banner-img">
               </swiper-item>
           </swiper>
     </app-content>
     
     </div>
</template>


<script>
import AppHeader from '../../common/Appheader.vue'

import Swiper from '../../common/Swiper.vue'

import SwiperItem from '../../common/SwiperItem.vue'
export default {
    data(){
        return {
            img:[
    {
        "id":"1",
        "img":"https://j-image.missfresh.cn/img_20180723012132898.jpg?iopcmd=thumbnail&type=4&width=640"
    },{
        "id":"2",
        "img":"https://j-image.missfresh.cn/img_20180723165601367.jpg?iopcmd=thumbnail&type=4&width=640"
    },{
        "id":"3",
        "img":"https://j-image.missfresh.cn/img_20180723111211032.jpg?iopcmd=thumbnail&type=4&width=640"
    },{
        "id":"4",
        "img":"https://j-image.missfresh.cn/img_20180723165314024.jpg?iopcmd=thumbnail&type=4&width=640"
    },{
        "id":"5",
        "img":"https://j-image.missfresh.cn/img_20180723101537079.jpg?iopcmd=thumbnail&type=4&width=640"
    }

]
        }
    },
    components:{
        AppHeader,
        Swiper,
        SwiperItem
    },
    mounted(){
     
    }
}
</script>

<style scoped>
    .content{
        width: 100%;
        position: absolute;
        top:0.44rem !important;
        left: 0
    }
   .banner-img{
       width: 100%;
   }
</style>
