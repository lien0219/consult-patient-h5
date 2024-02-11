<script setup lang="ts">
import { Button as VanButton } from 'vant'
import { useUserStore } from './stores'
import { request } from '@/utils/request'
import type { User } from './types/user'

const store = useUserStore()

const getUserInfo = async () => {
  const res = await request('/patient/myUser')
  console.log(res)
}

const login = async () => {
  const res = await request<User>('/login/password', 'POST', {
    mobile: '13211112222',
    // 密码 abc123456 测试：出现非10000的情况
    password: 'abc12345'
  })
  store.setUser(res.data)
}
</script>

<template>
  <van-button type="primary" @click="getUserInfo">获取个人信息</van-button>
  <van-button type="primary" @click="login">登录</van-button>
</template>

<style lang="scss" scoped>
a {
  color: var(--cp-primary);
}
</style>
./stores/modules/user
