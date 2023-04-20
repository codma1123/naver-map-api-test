<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { Divice } from '../../plugins/display';

interface CustomButtonProp {
  varient: "default" | "text" | "plain"
  size: number | Divice
}

const { varient, size } = withDefaults(defineProps<CustomButtonProp>(), {
  varient: "default",
  size: 20
})

const button = ref<HTMLButtonElement | null>(null)

const buttonSizeClass = ref<Divice>()

onMounted(() => {
  if(typeof size === 'number') {
    (button.value as HTMLButtonElement).style.width = size + 'px'
  }
  else {
    buttonSizeClass.value = size
  }    
})
</script>

<template>
  <button 
    ref="button"
    :class="[
      'CustomButton',
      buttonSizeClass
      varient,
    ]"
  > 
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.CustomButton {
}

</style>