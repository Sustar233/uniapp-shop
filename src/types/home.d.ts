import type { GoodsItem } from './global'

/** 首页-广告区域数据类型 */
export type BannerItem = {
  /** 跳转链接 */
  hrefUrl: string
  /** id */
  id: string
  /** 图片链接 */
  imgUrl: string
  /** 跳转类型 */
  type: number
}

/** 首页-前台类目数据类型 */
export type CategoryItem = {
  /** 图标路径 */
  icon: string
  /** id */
  id: string
  /** 分类名称 */
  name: string
}

//
export type HotItem = {
  /** 图标路径 */
  title: string
  /** id */
  id: string
  /** 分类名称 */
  alt: string
  pictures: string[]
  target: string
  type: string
}

/** 猜你喜欢-商品类型 */
export type GuessItem = GoodsItem
