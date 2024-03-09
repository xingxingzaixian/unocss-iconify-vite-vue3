<script setup lang="ts">
import { Icon } from '@iconify/vue';
import SvgIcon from './SvgIcon.vue';
</script>

<template>
  <div
    underline
    font-size-9
    text-center
    font-extrabold
    animate-bounce-in-down
    animate-count-infinite
  >
    Unocss + Vite + Vue3
  </div>

  <div underline font-size-5>
    以组件方式引入Iconify（设置前缀为icon）：
    <icon-simple-line-icons:frame class="w-2em h-2em color-#cb0b0b" />
    <icon-ic:baseline-add-circle class="w-2em h-2em color-#cb0b0b" />
    <icon-ic:round-delete-sweep class="w-2em h-2em color-#cb0b0b" />
    <icon-ic:baseline-airport-shuttle class="w-2em h-2em color-#cb0b0b" />
  </div>

  <div underline font-size-5>
    以类方式引入Iconify（需要以块级元素展示）
    <i class="i-simple-line-icons:frame w-2em h-2em color-#cb0b0b"></i>
    <i class="i-ic:baseline-add-circle w-2em h-2em color-#cb0b0b"></i>
    <i class="i-ic:round-delete-sweep w-2em h-2em color-#cb0b0b"></i>
    <i class="i-ic:baseline-airport-shuttle w-2em h-2em color-#cb0b0b"></i>
  </div>

  <div underline font-size-5>
    以属性方式引入Iconify（需要以块级元素展示）
    <i i-simple-line-icons:frame class="w-2em h-2em color-#cb0b0b"></i>
    <i i-ic:baseline-add-circle class="w-2em h-2em color-#cb0b0b"></i>
    <i i-ic:round-delete-sweep class="w-2em h-2em color-#cb0b0b"></i>
    <i i-ic:baseline-airport-shuttle class="w-2em h-2em color-#cb0b0b"></i>
  </div>

  <div underline font-size-5>
    以Vue组件方式引入Iconify
    <Icon
      icon="simple-line-icons:frame"
      class="w-2em h-2em color-#cb0b0b"
    ></Icon>
    <Icon
      icon="ic:baseline-add-circle"
      class="w-2em h-2em color-#cb0b0b"
    ></Icon>
    <Icon icon="ic:round-delete-sweep" class="w-2em h-2em color-#cb0b0b"></Icon>
    <Icon
      icon="ic:baseline-airport-shuttle"
      class="w-2em h-2em color-#cb0b0b"
    ></Icon>
  </div>

  <div underline font-size-5>
    加载本地SVG文件
    <SvgIcon name="vue" class="w-2em h-2em"></SvgIcon>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: black;
  text-align: center;
}
</style>
