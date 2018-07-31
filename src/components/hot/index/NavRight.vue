<template>
    <div>
        <div class="nav-bg" v-show="isShow"></div>
        <div class="nav-banner" v-show="isShow">
            <div class="title">
                <h2>全部分类</h2>
                <i class="iconfont chaIcon" @click="clickAction">&#xe64b;</i>
            </div>
            <ul class="nav-banner-list">
                <li class="nav-banner-item" v-for="(item,index) in allCatigory" :key="index">
                    <img :src="item.img"/>
                    {{item.name}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
      data(){
        return{
            isShow: false,
            allCatigory: [
                { img: 'https://j-image.missfresh.cn/img_20170613155448054.png', name: '下午茶'},
                { img: 'https://j-image.missfresh.cn/img_20170712183416540.png', name: '甜品'},
                { img: 'https://j-image.missfresh.cn/img_20170712184022323.png', name: '水果'},
                { img: 'https://j-image.missfresh.cn/img_20170613155656228.png', name: '百货'},
                { img: 'https://j-image.missfresh.cn/img_20170613155335895.png', name: '零食'},
                { img: 'https://j-image.missfresh.cn/img_20170712184335921.png', name: '饮品'},
                { img: 'https://j-image.missfresh.cn/img_20171031191941929.png', name: '熟食'}
            ]
        }
    },
    methods: {
        clickAction(){
            this.isShow = false;
            
        },
        changeShow(flag){
            this.isShow = flag;
        }
    },
 
}
</script>
<style scoped>
    .nav-bg{
        width: 100%;
        position: absolute;
        left: 0;
        top:.44rem;
        bottom: 0;
        background: #000;
        opacity: .1;
    }
    .nav-banner{
        position: absolute;
        left: 0;
        top: 0.44rem;
        background: #fff;
        z-index: 44;
        /* display: flex; */
    }
    .nav-banner .title{
        width: 100%;
        height: .35rem;
        line-height: .35rem;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .chaIcon{
        position: absolute;
        top: 10%;
        right: .2rem;
        font-size: .18rem;
    }
    .nav-banner .title h2{
        font-size: .16rem;
        font-weight: normal;
    }
    .nav-banner .title,.nav-banner-list,.nav-banner-item{
        display: flex;
    }
    .nav-banner-list{
        flex-wrap: wrap;
    }
    .nav-banner-item{
        width: 25%;
        height: .6rem;
        line-height: .6rem;
        justify-content: center;
        /* align-content: center; */

    }
    .nav-banner-item img{
        width: .3rem;
        height: .3rem;
        align-self: center;
        margin-right: 14px;
    }
</style>

