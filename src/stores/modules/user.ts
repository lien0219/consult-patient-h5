import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/types/user'

export const useUserStore = defineStore(
  'cp-user',
  () => {
    const user = ref<User>()
    const setUser = (u: User) => {
      user.value = u
    }

    const delUser = () => {
      user.value = undefined
    }

    return {
      user,
      setUser,
      delUser
    }
  },
  {
    persist: true
  }
)
