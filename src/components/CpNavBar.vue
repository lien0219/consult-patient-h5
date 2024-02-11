<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const onClickLeft = () => {
  if (history.state?.back) {
    router.back()
  } else {
    router.push('/')
  }
}

defineProps<{
  title?: string
  rightText?: string
}>()

const emit = defineEmits<{
  (e: 'click-right'): void
}>()

const onClickRight = () => {
  //点击右侧文字按钮
  emit('click-right')
}
</script>

<template>
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
    fixed
    :title="title"
    :right-text="rightText"
    @click-right="onClickRight"
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
:deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }
    &__text {
      font-size: 15px;
    }
  }
}
</style>
