// export {}

// 枚举：一组可选的常量
// 需求：0 1 2 3 上下左右

// enum Direction {
//   Up = 0,
//   Down = 1,
//   Left = 2,
//   Right = 3
// }

// 值默认是从0开始以此类推
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// 如果给了一个默认的数字，一样的
// enum Direction {
//   Up = 5,
//   Down,
//   Left,
//   Right
// }

// 可以是字符串
// enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }

// const changeDirection = (direction: Direction) => {
//   console.log(direction)
// }

// changeDirection(Direction.Right)

// 问诊类型
export enum ConsultType {
  Doctor = 1,
  Fast = 2,
  Medication = 3
}

// 问诊时间
export enum IllnessTime {
  Week = 1,
  Month,
  HalfYear,
  More
}

// 消息类型
export enum MsgType {
  /** 文字聊天 */
  MsgText = 1,
  /** 消息聊天 */
  MsgImage = 4,
  /** 患者信息 */
  CardPat = 21,
  /** 处方信息 */
  CardPre = 22,
  /** 未评价信息 */
  CardEvaForm = 23,
  /** 已评价信息 */
  CardEva = 24,
  /** 通用通知 */
  Notify = 31,
  /** 温馨提示 */
  NotifyTip = 32,
  /** 取消提示 */
  NotifyCancel = 33
}

// 处方状态
export enum PrescriptionStatus {
  /** 未付款 */
  NotPayment = 1,
  /** 已付款 */
  Payment = 2,
  /** 已失效 */
  Invalid = 3
}

export enum OrderType {
  // 问诊订单
  /** 待支付 */
  ConsultPay = 1,
  /** 待接诊 */
  ConsultWait = 2,
  /** 问诊中 */
  ConsultChat = 3,
  /** 问诊完成 */
  ConsultComplete = 4,
  /** 取消问诊 */
  ConsultCancel = 5,
  // 药品订单
  /** 待支付 */
  MedicinePay = 10,
  /** 待发货 */
  MedicineSend = 11,
  /** 待收货 */
  MedicineTake = 12,
  /** 已完成 */
  MedicineComplete = 13,
  /** 取消订单 */
  MedicineCancel = 14
}

// export enum ExpressStatus {
//   /** 已发货 */
//   Delivered = 1,
//   /** 已揽件 */
//   Received = 2,
//   /** 运输中 */
//   Transit = 3,
//   /** 派送中 */
//   Delivery = 4,
//   /** 已签收 */
//   Signed = 5
// }

// 问诊类型
// export const enum ConsultType {
//   Doctor = 1,
//   Fast = 2,
//   Medication = 3
// }

export const enum ConsultTime {
  Week = 1,
  Month,
  HalfYear,
  More
}

// 消息类型
// export const enum MsgType {
//   // 文字
//   MsgText = 1,
//   // 图片
//   MsgImage = 4,
//   // 患者
//   CardPat = 21,
//   // 处方
//   CardPre = 22,
//   // 未评价
//   CardEvaForm = 23,
//   // 已评价
//   CardEva = 24,
//   // 通用系统
//   Notify = 31,
//   // 温馨提示
//   NotifyTip = 32,
//   // 取消订单
//   NotifyCancel = 33
// }

// 处方状态
// export const enum PrescriptionStatus {
//   // 未支付
//   NotPayment = 1,
//   // 已支付
//   Payment = 2,
//   // 无效
//   Invalid = 3
// }

// 订单状态
// export const enum OrderType {
//   // 待支付
//   ConsultPay = 1,
//   // 待接诊
//   ConsultWait = 2,
//   // 咨询中
//   ConsultChat = 3,
//   // 已完成
//   ConsultComplete = 4,
//   // 已取消
//   ConsultCancel = 5,
//   // ------------------------------------------
//   MedicinePay = 10,
//   MedicineSend = 11,
//   MedicineTake = 12,
//   MedicineComplete = 13,
//   MedicineCancel = 14
// }

// export const enum ExpressStatus {
//   // 已发货
//   Delivered = 1,
//   // 已揽件
//   Received = 2,
//   // 运输中
//   Transit = 3,
//   // 派送中
//   Delivery = 4,
//   // 已签收
//   Signed = 5
// }
