<template>
  <transition name="slide">
    <v-music-list :title="title" :bg-image="bgImage" :songs="songs"></v-music-list>
  </transition>
</template>

<script>
import api from '@/api'
import musicList from '@/components/musicList'

export default {
  name: 'disc',
  components: {
    'v-music-list': musicList,
  },
  data() {
    return {
      songs: [],
      bgImage: this.$store.state.user.userInfo.profile.backgroundUrl,
      title: '每日推荐',
    }
  },
  created() {
    this._getSongList()
  },
  methods: {
    _getSongList() {
       
      this.$showLoading()
      api.RecommendSong()
        .then((res) => { 
          if (res.code === 200) {
            this.$hideLoading()
            this.songs=res.data.dailySongs
             console.log(this.songs)
           
          }
        })
    },
  },
}
</script>

<style scoped lang="scss">
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s;
}

.slide-enter,
.slide-leave-to {
  transform: translate3d(100%, 0, 0);
}
</style>