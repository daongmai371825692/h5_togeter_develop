<template>
<div class="content" ref="content">
    <div>
        <slot></slot>
    </div>
</div>
</template>


<script>
export default {
    mounted(){
       let myScroll = new IScroll(this.$refs.content, {
            scrollbars: true, mouseWheel: true,
                  probeType:3
        });
         
        myScroll.on('beforeScrollStart',()=>{
               myScroll.refresh()
           })
    }
}
</script>


<style scoped>
.content{
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0.49rem;
    overflow: hidden;
    font-size:0.16rem;
}
</style>

