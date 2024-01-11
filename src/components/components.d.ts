import ShopSwiper from '@/components/ShopSwiper.vue'
import ShopGuess from '@/components/ShopGuess.vue'

// 给自定义组件提供ts类型声明
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    ShopSwiper: typeof ShopSwiper
    ShopGuess: typeof ShopGuess
  }
}

// 组件实例类型
export type ShopGuessInstance = InstanceType<typeof ShopGuess>
