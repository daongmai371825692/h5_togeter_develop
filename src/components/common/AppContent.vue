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
        new IScroll(this.$refs.content, {

        });
    }
}
</script>


<style scoped>
.content{
    width: 100%;
    position: absolute;
    top: 0.44rem;
    left: 0;
    bottom: .49rem;
<<<<<<< HEAD:src/common/AppContent.vue
    background: #fff;
=======
	background: #f5f5f5;
>>>>>>> 902716dc2106ab6ac102088ec0b68e9a4c43e596:src/components/common/AppContent.vue
    overflow: hidden;
    font-size:0.16rem;
}
</style>

