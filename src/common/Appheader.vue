<template>
    <header class="app-header">
      <span @click="gotocity()">深圳</span><i class="iconfont icon-xiajiantou"></i>
      <div class="input">
          <input type="text" class="inp"> <i class="iconfont icon-fangdajing"></i>
      </div>
    </header>
</template>
<script>
export default {
  methods:{
    gotocity(){
    this.$router.push({name:'city'})
    }
  }
}
</script>


<style scoped>
.app-header{
  width: 100%;
  height: .44rem;
  background:#FD8391;
  color:#fff;
  line-height: .44rem;
  display: flex;
}

.app-header span{
  padding-left: 10px;
}
.input{
  width:2.03rem;
  height: 0.3rem;
  position: relative;
  margin-left: 10px;
  
}
.inp{
  width: 100%;
  height:100%;
   position: relative;
   padding: 0 0.3rem;
   background: #fff
  }
.icon-fangdajing{
  position: absolute;
  top:0;
  z-index: 10;
  color: #000;
  font-size: 0.3rem;
}
</style>
