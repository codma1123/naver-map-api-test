import { computed, onMounted, onUnmounted, ref, toRefs } from "vue"

const FULL_SIZE = 1920
const MODAL_BREAK_POINT = 1500

export type Divice = 'xl' | 'lg' | 'md' | 'sm' | 'xs'

const diviceMap: Record<number, Divice> = {
  1: 'xs',
  2: 'sm',
  3: 'md', 
  4: 'lg',
  5: 'xl'
}

const useDisplay = () => {

  const width = ref<number>(window.innerWidth)
  const isMobile = computed<boolean>(() => width.value < MODAL_BREAK_POINT )
  const divice = computed<Divice>(() => diviceMap[Math.floor(width.value / (FULL_SIZE / 5))])

  const getDivicePixel = () => {
    switch (divice.value) {
      case 'xl': return '1920px'
      case 'lg': return '1920px'
      case 'md': return '1920px'
      case 'sm': return '1920px'
      case 'xs': return '1920px'
    }
  }

  const resizeHandler = (e: WindowEventMap['resize']) => {
    width.value = window.innerWidth
  }
  
  onMounted(() => {
    window.addEventListener('resize', resizeHandler)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', resizeHandler)
  })

  return {
    getDivicePixel,
    ...toRefs({
      width,
      isMobile,
      divice,
    })
  }
}

export default useDisplay