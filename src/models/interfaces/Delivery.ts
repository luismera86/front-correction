import { Student } from './Student'

export interface Delivery {
  id?: string
  commentOne: string
  commentTow: string
  commentThree: string
  commentFour: string
  commentFive: string
  feedback: string
  student: Student
  preDeliveryNumber: number
  result: string
  isLoading?: boolean
}
