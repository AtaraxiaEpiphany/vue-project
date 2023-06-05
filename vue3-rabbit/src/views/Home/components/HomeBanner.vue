<script setup>
import { getHomeBanner } from '@/apis/home'
import { onMounted, ref, reactive } from 'vue'

const bannerUrls = ref()
const testReactive = reactive({})

onMounted(async () => {
  const resp = await getHomeBanner()
  bannerUrls.value = resp.result
  // init reactive object.
  Object.assign(testReactive,resp)
})

</script>


<template>
  <div class="home-banner">
    <el-carousel height="500px">
      <el-carousel-item v-for="url in bannerUrls" :key="url.id">
        <img
          :src="url.imgUrl"
          alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>



<style scoped lang='scss'>
.home-banner {
  width: 1240px;
  height: 500px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 98;

  img {
    width: 100%;
    height: 500px;
  }
}
</style>