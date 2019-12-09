<template>
  <div>
     <van-grid :column-num="3" :border=false class="gird" :clickable=true :gutter="10" icon-size="40px"   >
    
      <van-grid-item url="#/tui">
         <van-icon name="new" size="38px" />
         <span>每日推荐</span>
      </van-grid-item>
      <van-grid-item url="#/user">
        <van-icon name="like" size="38px" color="red"/>
        <span>喜欢</span>
      </van-grid-item >
      <van-grid-item url="#/rank">
         <van-icon name="audio" size="38px" info="99" />
         <span>热门</span>
      </van-grid-item>
       
    </van-grid>

</div>
</template>
<script type="text/ecmascript-6">
 export default {
  data() {
    return {

     }
  },
  
  methods: {
    
    showToast() {
      this.$toast('开发中，敬请期待...')
    }
  } 
}
</script>
<style lang="css">
  
 div.van-grid-item__content {
    background-color: rgba(255, 255, 255, 0)
 }
  van-grid-item,span{
    margin-top: 5px;
  }
</style>