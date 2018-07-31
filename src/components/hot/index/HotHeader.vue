<template>
    <div class="hot-content">
        <div class="address" @click="gotocity()">
            <p>深圳</p>
            <i class="iconfont">&#xe731;</i>
        </div>
        <div class="search">
            <i class="iconfont search-icon">&#xe6e4;</i>
            <span>搜索</span>
        </div>
        <i class="iconfont weather">&#xe694;</i>
    </div>
</template>
    <script>
    export default {
        methods:{
            gotocity(){
                navigator.geolocation.getCurrentPosition(
                    function(position){
                        console.log('成功')
                        console.log(position)
                    },
                    function(error){
                        console.log('失败')
                        console.log(error)
                    }
                )      
            }
        }
    }
    </script>
    



<style scoped>


    
    .hot-content{
        width: 100%;
        height: .44rem;
        background: #F87D88;
        line-height: .44rem;
        color: #fff;
        position: relative;
        z-index: 66;
    
    }
    .hot-content,.address,.search{
        display: flex;
    }
    .address{
        padding:0 .10rem 0 .15rem
    }
    .address p{
        font-size: .16rem;
    }
    .search{
        background: #fff;
        height: .3rem;
        align-self: center;
    
    }
    .search-icon{
        width: .4rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
        font-size: .2rem;
        color: #000;
        display: block;
        background: #fff;
    }
    .search span{
        width: 2rem;
        height: .3rem;
        background: #fff;
        display: block;
    }
    .weather{
        font-size: .3rem;
        padding-left: .15rem;
    }
</style>

