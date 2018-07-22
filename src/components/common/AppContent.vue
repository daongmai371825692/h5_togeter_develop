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
    top: 0;
    left: 0;
    bottom: .49rem;

    overflow: hidden;
    font-size:0.16rem;
}
</style>

