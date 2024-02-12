import type { IllnessTime } from '@/enums'
// import { flagOptions, timeOptions } from '@/services/constants'
import { consultFlagOptions, illnessTimeOptions } from '@/services/constants'

// 获取患病时间
export const getIllnessTimeText = (time: IllnessTime) =>
  // @ts-ignore
  illnessTimeOptions.find((item) => item.value === time)?.label
// 获取是否就诊
export const getConsultFlagText = (flag: 0 | 1) =>
  consultFlagOptions.find((item) => item.value === flag)?.label
