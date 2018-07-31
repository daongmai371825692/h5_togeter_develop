<template>
<div class="content-item" ref="item" >
   <div>
      <div>
          <ul>
              <li v-for="(imgurl,index) in banner.banner" :key="index">
                  <img :src=imgurl.imgUrl alt="" class="img">
                <ul>
                    <li v-for="(item,index) in banner.allDetail" :key="index">
                        <img :src=item.catigoryImg alt="" class="img">
                       <ul>
                           <li v-for="(obj,index) in item.detail" :key="index" @click="golist(obj.id)">
                            <div class="hot-list">
                                <img :src=obj.imgUrl alt="" class="imgs">
                                <div class="hot-content">
                                    <h3 class="sbu-title">{{obj.title}}</h3>
                                    <p class="mess-title">{{obj.descript}}</p>
                                    <p class="item-list">{{obj.tag}}</p>
                                    <p class="price">￥{{obj.price}}</p>
                                    <p v-if="obj.deprice" class="deprice">￥{{obj.deprice}}会员</p>
                                </div>
                            </div>
                           </li>
                       </ul>
                    </li>
                </ul>
              </li>
          </ul>
      </div>
   </div>
</div>
</template>



<script>
import {getgoodstype} from '../../../services/homeService.js'
export default {
    props:{
        id:Number,
        active:Boolean
    },
    data(){
        return {
                banner:[]
        }
    },
    watch:{
        active(newVal){
            if(newVal && this.banner.length<=0){
                this.getinit()
            }
        }
    },
    methods:{
       getinit(){
            getgoodstype(this.id).then(result=>{
                this.banner=result
                //console.log(result)
              
            })
       },
       golist(id){
        //    console.log(id)
           this.$router.push({
               name:'details',
               params:{
                   id
               }
           })
       }
    },
    mounted(){
       this.my=new IScroll(this.$refs.item,{});
        this.my.on('beforeScrollStart',()=>{
            this.my.refresh()
        })
       if(this.active){
           this.getinit()
           
       }
    }
}
</script>


<style scoped>
.content-item{
   overflow: hidden;
}
.img{
    width: 100%;
}
.imgs{
    width: 1.2rem;
    height: 1.2rem;
}
.hot-content{
    padding-left: 0.3rem
}
.hot-list{
    display: flex;
    padding: 0.2rem;
    border-bottom: 1px #ccc dashed
}
.sbu-title{
    font-size: .16rem;
    width: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    color: #474245;

}
.mess-title{
    color: #969696;
    font-size: 0.14rem
}
.item-list{
    color: rgb(245, 159, 193);
    display: inline-block;
    border: 1px solid rgb(245, 159, 193);
}
.price{
    color: rgb(255, 72, 145)
}
.deprice{
    color: rgb(248, 188, 0)
}
</style>
