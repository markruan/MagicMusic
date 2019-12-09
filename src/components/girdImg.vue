<template>
  <div>
     <van-grid :column-num="3" :border=false class="gird" :clickable=true :gutter="0"   >
    
      <van-grid-item v-if="index<6"  v-for="(item,index) in datalist" @click="selectItem(item)" >
         <van-image :src="item.picUrl" radius=10 >
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
          </van-image>
          <span>{{item.name}} </span style="fontsize:12px">
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
  props: ['datalist'],
  methods: {
    
    showToast() {
      this.$toast('开发中，敬请期待...')
    },
    selectItem(item) {
      this.$router.push({
        path: `/recommend/${item.id}`
      })
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