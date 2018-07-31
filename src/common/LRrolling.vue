<template>
    <div class="rolling" ref="rolling">
           <ul class="banner">
               <li v-for="(item,index) in bannerlist" :key="index" @click="bannerList(index,item.path)"
               :class="{active:bannerlength == index}">
                   {{item.name}}
               </li>
               <li>
                    <div class="box" @click="openlist()">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
               </li>
           </ul>
            <router-view></router-view>
         <transition name="slide">
            <div class="commoditylist" v-show="showNav">
                <ul class="commodity">
                    <p class="allclassification">全部分类
                        <span @click="close()">X</span>
                    </p>
                    <li v-for="(val,index) in list" :key="index">
                        {{val.name}}
                    </li>
                </ul>
            </div>
        </transition>

       
    </div>
</template>

<script>
export default {
    data(){
        return {
            showNav:false,
            bannerlength:0,
            list:[
                {name:'下午茶',path:''},
                {name:'甜品',path:''},
                {name:'水果',path:''},
                {name:'百货',path:''},
                {name:'零食',path:''},
                {name:'饮食',path:''},
                {name:'熟食',path:''}
            ],
            bannerlist:[
                {name:'下午茶',path:''},
                {name:'甜品',path:''},
                {name:'水果',path:''},
                {name:'甜食',path:''}
            ]
        }
    },
    mounted() {
        // var wrapper = document.getElementById('ul').scrollWidth;
        // var li =document.querySelector('li').scrollWidth
        // var lilen =document.querySelectorAll('li')
        // wrapper =1000
        // //console.log(wrapper)
        // this.$refs.rolling.scrollWidth =1000+'px'
        // console.log(this.$refs.rolling.scrollWidth)
        // var myScroll = new IScroll(this.$refs.rolling,{
        //     eventPassthrough:true
        // });
    },
    methods:{
        openlist(){
         this.showNav=true
        },
        close(){
            this.showNav=false
        },
        bannerList(index,path){
          this.bannerlength=index
          this.$router.push({name:path})
        }
    }
}
</script>
<style scoped>
.banner{
   display: flex;
   background: #f5f5f5
}
.banner li{
    flex: 1;
    text-align: center;
    line-height: 0.40rem;
    font-size: 0.15rem
}
.banner li:last-child{
   position: relative;
}
.banner li .box{
    width: 35%;
    position: absolute;
    left: 40%;
    top:20%
}
.banner li .box div {
    
    float: left;
    width: 10px;
    height: 10px;
    background: #FD7787;
    border-radius: 50%;
    text-align: center;
}
.commoditylist{
    width: 100%;
    position: absolute;
    top: .44rem;
    font-size: 0.15rem;
    z-index: 10
   
}
.commoditylist ul{
    width: 100%;
    position: absolute;
    background: #fff;
    z-index: 10;
   
}
.commodity li{
    width: 25%;
    display: inline-block;
    text-align: center;
    padding: 0.1rem 0;
    
}
.commodity .allclassification{
    width:100%;
    text-align: center;
    line-height: 0.6rem;
    position: relative
}
.allclassification span{
    position: absolute;
    right: 10%;
    color: #cccccc
}
   @keyframes slidein{
        0%{transform: translateY(-1.41rem)}
        100%{transform: translateY(0)}
    }
    @keyframes slideout{
        0%{transform:translateY(0%)}
        100%{transform: translateY(-1.41rem)}
    }
    .slide-enter-active{
        animation: slidein 300ms
    }
    .slide-leave-active{
        animation:slideout 300ms
    }
    .active{
        color: #FD7787;
        border-bottom: 2px solid #FD7787
    }
</style>
