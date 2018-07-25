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
    top: 0.44rem;
    left: 0;
<<<<<<< HEAD:src/components/common/AppContent.vue
    bottom: .49rem;
	background: #f5f5f5;
=======
    bottom: 0.49rem;
>>>>>>> sui:src/common/AppContent.vue
    overflow: hidden;
    font-size:0.16rem;
}
</style>

