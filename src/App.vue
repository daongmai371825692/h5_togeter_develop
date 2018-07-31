<template>
<div id="app">


    <!-- 进入是页面的状态  -->
    <div class="box" ref="box" v-show="showfite">
          <p class="setinterval">{{num}}后关闭</p>
       <div class="introduce">
            <p class="box-top">99款不同的下午茶套餐</p>
            <p class="box-top">99+1款不同甜品</p>
            <p class="box-conter">任你选</p>
            <p class="box-bottom">全场5折起</p>
       </div>
            <div class="box-list">
                <div class="box-content">
                        <li v-for="(imgs,index) in imglist" :key="index">
                            <img :src="imgs.img">
                            <div>
                                <p>{{imgs.name}}</p>
                                <p class="up">  原价  <i class="upprice">{{imgs.upprice}}</i> </p>
                                <p>{{imgs.price}}</p>
                            </div>
                        </li>
                </div>
            </div>
        <div class="btnactive">
            <button class="btn">立即抢购</button>
        </div>
    </div>
  
         <router-view/>

    <!-- 底部 -->
    <footer>
        <router-link to="/home">
            <i class="iconfont">&#xe61e;</i>
            <p>首页</p>
        </router-link>
        <router-link to="/hot">
             <i class="iconfont">&#xe638;</i>
             <p>热卖</p>
        </router-link>
        <router-link to="/cart">
             <i class="iconfont icon-03f"></i>
             <p>购物车</p>
        </router-link>
        <router-link to="/mine">
             <i class="iconfont">&#xe61a;</i>
             <p>我的</p>
        </router-link>
    </footer>
</div>
</template>
<script>
let time
export default {
    data(){
        return {
            showfite:false,
            num:3,
            imglist:[
                {img:'img/homeimg/home.jpg',id:'0',name:"宁馨郁金香",price:"99",upprice:"199"},
                {img:'img/homeimg/home1.jpg',id:'1' ,name:"白蛋糕",price:"199",upprice:"299"},
                {img:'img/homeimg/home2.jpg',id:'2' ,name:"蛋挞",price:"299",upprice:"399"},
                {img:'img/homeimg/home3.jpg',id:'3',name:"圣杯",price:"79",upprice:"99"},
                {img:'img/homeimg/home4.jpg',id:'4',name:"甜丸",price:"89",upprice:"192"},
                {img:'img/homeimg/home5.jpg',id:'5',name:"大丸",price:"78",upprice:"332"}
            ]
        }
    },
    mounted(){
    //    setTimeout(()=>{
    //        this.showfite = false
    //    },3000),
      
    //   time = setInterval(()=>{
    //        this.num--
    //        if(this.num==0){
    //           clearInterval(time)
    //        }
    //    },1000)
    }
}
</script>


<style scoped>




    footer{
        width:100%;
        height: .49rem;
        position: absolute;
        left:0;
        bottom: 0;
        overflow: hidden;
        display: flex;
        align-items: center;
        background: #fff;
    }
    footer a{
        display: block;
        flex: 1;
        text-align: center;
        font-size: .12rem; 
        color: #666666;
    }
    footer p{
        margin-top:.02rem;
    }
    footer .router-link-active{
        color:#F87D88;
    }
    footer .iconfont{
        font-size: .22rem;
    }









    .setinterval{
        font-size:0.16rem;
        padding: 0.2rem
    }
    .box-top{
        font-size: 0.2rem
    }
    .box-conter{
        font-size: 0.3rem;
    }
    .box-bottom{
        font-size: 0.36rem
    }
  
    .introduce{
        width: 100%;
        text-align: center
    }
.box{
    width: 100%;
    position: absolute;
    background: #F87D88;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 77;
    color: #fff
}
.box-list{
    width: 3.45rem;
    height: 2.74rem;
    border: 4px #fff solid;
    margin:0.4rem 0.14rem;
    border-radius: 0.15rem
}
  .box-content{
        width: 3.25rem;
        height: 2.54rem;
        border: 3px #E2D23B solid;
        border-radius: 0.12rem;
        margin: 0.07rem;
        display: flex;
        flex-wrap: wrap;
        justify-content:center;
         align-items: center;
        box-shadow: 0 2px 4px 0 rgba(0,0,0,0.5);
        }
    .box-content li{
        width: 30%;
         display: flex;
         justify-content:center;
         position: relative;
       
    }
  .box-content li img{
     width: 0.78rem;
     height: 0.78rem;
     
    
  }
  .box-content li div{
      width: 70%;
      height: 0.35rem;
      position: absolute;
      text-align: center;
      bottom: -0.1rem;
      font-size: 0.1rem;
      background: #60AEA8;
      border-radius: 0.08rem
  }
  .box-content li div .up{
      background: #fff;
      color: #60AEA8;
  }
  .box-content li div .upprice{
      text-decoration:line-through
  }
  .btnactive{
      width: 100%;
      height: 15%;
      position: relative
  }
.btn{
        width: 1.05rem;
        height: 0.35rem;
        border-radius: 0.3rem;
        background: #E2D23B ;
        font-size: 0.14rem;
        color: #fff;
        position: absolute;
        left: 35%;
        top: 10%;
  }
</style>



