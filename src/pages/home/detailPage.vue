<template>
<app-content>
  <!-- <li v-for="item in img " :key="item.id" :id="item.id">
     <img :src="item.img" class="img">
   
  </li> -->
 <slot/>
</app-content>
    
</template>




<script>
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

],
        }
    }
}
</script>


<style scoped>
.img{
    width: 100%;
}
</style>
