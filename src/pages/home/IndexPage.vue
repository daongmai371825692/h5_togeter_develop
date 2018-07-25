<template>
    <div class="page">
         <!-- <div class="afternoontea" ref="afternoontea" v-show="show">
             <p>{{time}}秒关闭</p>
             <div class="setmeal">
             <p class="top_list">99款不同的下午茶套餐</p>
             <p class="top_list">99+1款不同甜品</p>
             <p>任你选</p>
             <p>全场5折起</p>
            </div>
    </div> -->
     <app-header></app-header>
   
                <nav class="nav" ref="nav">
                    <li class="nav-item" v-for="(item,index) in list " :key="index" 
                    :class="{active:bannerlength ==index}" @click="changecontent(index)">
                       <p> {{item.name}}</p>
                    </li>
                </nav>

        <div class="swiper-container box" ref="box">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list " :key="index">
                   {{item.name}}
                </div>
            </div>
        </div>



     </div>
</template>


<script>
 import AppHeader from '../../common/Appheader.vue'
import DetailPage from './detailPage.vue'
export default {
    data(){
        return {

show:true,
time:3,
bannerlength:0,
list:[
                {name:'下午茶',path:'',id:'1'},
                {name:'甜品',path:'',id:'2'},
                {name:'水果',path:'',id:'3'},
                {name:'百货',path:'',id:'4'},
                {name:'零食',path:'',id:'5'},
                {name:'饮食',path:'',id:'6'},
                {name:'熟食',path:'',id:'7'}
            ],
        }
    },
    components:{
        AppHeader,
        DetailPage
       
    },
    mounted(){
        this.contentcontent = new Swiper(this.$refs.box,{
            onSlideChangeEnd:(swiper)=>{
                this.bannerlength = swiper.activeIndex
                
            }
            
            
        })
     
    },
    methods:{
        changecontent(index){
            this.bannerlength=index
            this.contentcontent.slideTo(index,0)
            
        }
    }
  



//     mounted(){
//     setTimeout(()=>{
//         this.show=false
        
//     },3000),
//    setInterval(()=>{
//        this.time--
//    },1000)
    
//     }
}
</script>

<style scoped>
   .page{
    width: 100%;
    top: 0;
    bottom: o.49rem;
    position: absolute;
    height: 100%;
}
.page .box{
    width: 100%;
    position: absolute;
    top: 0.8rem;
    bottom: 0.49rem;
    
}
   .box{
       width: 100%;
   }
   .nav{
       width: 100%;
       display: flex;
       height: 0.36rem;
       line-height: 0.36rem;
       overflow: auto
   }
   .nav-item{
       width:1rem;
       text-align: center;
       flex-shrink: 0;
   }
   .active{
        color: #FD7787;
        border-bottom: 2px solid #FD7787
    }
</style>
