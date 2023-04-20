
<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, toRefs } from 'vue';
import CustomDivider from './article/CustomDivider.vue';
import useDisplay from '../plugins/display';


const isModalOpen = ref<boolean>(false)
const btnText = computed<string>(() => isModalOpen.value ? '닫기' : 'OPEN')
const { isMobile } = useDisplay()

const openModal = () => isModalOpen.value = false

</script>

<template>
  <div 
    :class="['PlaceModal', isModalOpen ? 'active' : '']"
    @click.self="isModalOpen = true"
  >
    <Transition name="fade">
      <div v-if="isModalOpen" class="innerContent" @blur="isModalOpen = false">        
        <button 
          v-if="isMobile"
          class="CloseBtn"
          @click="openModal"
        >
          {{ btnText }}
        </button>
        <CustomDivider />
      </div>
    </Transition>
    <div 
      v-if="!isModalOpen && isMobile" class="openIcon"
      @click="openModal"
    >
      icon
    </div>
  </div>
</template>

<style scoped lang="scss">

.PlaceModal {
  position: fixed;
  z-index: 3;
  width: 400px;
  height: $height;
  background-color: rgb(255, 255, 255);
}

.innerContent {
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: end;
  padding: 1rem;
}

.CloseBtn {
  background-color: #fff;
  border: none;
  cursor: pointer;
  transition: all .1s ease-in;
  letter-spacing: .125rem;
  opacity: .5;

  &:hover {
    opacity: 1;
  }
}

.openIcon {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1576px) {
  .PlaceModal {
    position: fixed;
    z-index: 1;
    width: 30px;
    height: $height;
    background-color: rgb(255, 255, 255);
    transition: width .2s ease-in-out;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;    
    cursor: pointer;

    &:hover {
      width: 40px;      
      // box-shadow: 3px 0px 0px #666;
    }

    &.active {
      width: 400px;
      // box-shadow: 3px 0px 0px #666;
      cursor: default;
    }
  }  


}

@media (max-width: 500px) and (hover: hover) {
  .PlaceModal {
    position: fixed;
    bottom: 0px;
    z-index: 1000;
    width: calc(100% - 10px) !important;
    height: 50px;
    border-top-right-radius: 1.125rem;
    border-top-left-radius: 1.125rem;
    transition: all .5s ease-in-out;
    cursor: pointer;

    &.active {
      height: 700px;
      cursor: default;
    }
  }
}


.fade-enter-active {
  transition: .2s all ease-in-out;
}

.fade-leave-from,
.fade-enter-to,
.fade-enter-from {
  opacity: 0;
}

.fade-leave-to {
  opacity: 1;
}



</style>