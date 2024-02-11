<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores/modules/user'

const store = useUserStore()
</script>

<template>
  <button
    @click="
      store.setUser({
        id: '1',
        mobile: '1',
        account: '1',
        avatar: '1',
        token: '1'
      })
    "
  >
    登录
  </button>
  <button @click="store.delUser()">退出</button>
  <p>{{ store.user }}</p>
</template>

<style lang="scss" scoped>
a {
  color: var(--cp-primary);
}
</style>
./stores/modules/user
