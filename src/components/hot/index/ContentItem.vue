<template>
    <div class="content-item" ref="item">
        <div class="wrap">
            <ul class="list">
                <li class="item" v-for="(item,index) in list" :key="index">
                    {{item}}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list: [1,3,34,5,6,343,34,3,42,34,234,32,4,234,234,2,34,324]
        }
    },
    mounted(){
       this.contentScroll =  new IScroll(this.$refs.item, {})
   

    }
}
</script>
<style scoped>
    .content-item{
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: .49rem;
        overflow: hidden;
    }
</style>

