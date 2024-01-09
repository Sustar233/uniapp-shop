import ShopSwiper from '@/components/ShopSwiper.vue'
// import ShopSwiper from './ShopSwiper.vue'

// 给自定义组件提供ts类型声明
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
  }
}
