<script setup lang="ts">
import type { BannerItem } from '@/types/home'
import { getHomeBannerAPI } from '@/services/home'
import CustomNavebar from './components/CustomNavba.vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CustomNavebar />
  <!-- 自定义轮播图 -->
  <ShopSwiper :list="bannerList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
