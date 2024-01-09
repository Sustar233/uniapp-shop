import type { BannerItem, CategoryItem } from '@/types/home'
import { http } from '@/utils/http'

// 首页-广告区域
// distributionsSite 广告区域展示位置
export const getHomeBannerAPI = (distributionsSite = 1) => {
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    data: {
      distributionsSite,
    },
  })
}

// 首页-前台分类-小程序
// GET
export const getHomeCategoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
