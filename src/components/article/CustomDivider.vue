<script setup lang="ts">

interface CustomDividerProp {
  vertical?: boolean
}

const { vertical } = withDefaults(defineProps<CustomDividerProp>(), {
  vertical: false
})

</script>

<template>
  <div :class="['divider', vertical ? 'vertical' : '']"></div>
</template>

<style scoped lang="scss">
.divider {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 10px;
  border-top: 1px solid black;
  opacity: .2;
}

.vertical {

}
</style>