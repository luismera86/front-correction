import { Evaluation } from './Evaluation'
import { Student } from './Student'

export interface Delivery {
  id?: string
  evaluations: Evaluation[]
  feedback: string
  student: Student
  preDeliveryNumber: number
  result: string
  isLoading?: boolean
}
