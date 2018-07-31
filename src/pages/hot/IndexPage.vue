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
                <content-item class="swiper-slide" v-for="(item,index) in sweetList" :key="index">
                </content-item>
            </div>
        </div>  
    </div>
</template>
<script>
import HotHeader from '../../components/hot/index/HotHeader'
import NavRight from '../../components/hot/index/NavRight'
import ContentItem from '../../components/hot/index/ContentItem'
export default {
    data(){
        return{
            show: false,
            clickIndex: 0,
            sweetList: [{name: '下午茶'},{name: '甜品'},{name: '水果'},{name: '百货'},{name: '零食'},{name: '饮品'},{name: '熟食'}]
        }
    },
    components: {
        HotHeader,
        NavRight,
        ContentItem
    },
    methods: {
        navRightClick(){
            this.$refs.navRight.changeShow(true);
        },
        tabClick(index){
            this.clickIndex = index;
        
            this.mySwiper.slideTo(this.clickIndex, 0);
        }
    },
    mounted() {
         new IScroll(this.$refs.hotIscroll, {
             //x,y轴是否可以滚动
             scrollX: true,
             scrollY: false
        });
         this.mySwiper = new Swiper (this.$refs.content , {
                onSlideChangeEnd:(swiper)=>{
                    this.clickIndex = swiper.realIndex;
            
                }

        }) 
       
    }
}
</script>
<style scoped>
    .hot-contentd{
        top: .44rem !important;
    }
    .hot-iscroll{
        width: 85%;
        /* background: yellow; */
    }
    .nav-items{
        width: 150%;
        height: .35rem;
        display: flex;
        /* background: yellow; */
        /* overflow: auto; */
        /* flex-wrap: wrap; */
    }
    .item{
        /* width: 25%; */
        flex: 1;
        text-align: center;
        line-height: .35rem;
        float: left;
    }
    .nav-right{
        width: 15%;
        height: .35rem;
        position: absolute;
        top: 0;
        right: 0;
        background: #fff;
        text-align: center;
        line-height: .35rem;
    }
    
    /* 大轮播 */
    .content{
        width: 100%;
        position: absolute;
        left: 0;
        top: .79rem;
        bottom: .49rem;
        font-size: 70px;
    }

    .active{
        color:red;
        border-bottom: 1px solid red;
    }
</style>


