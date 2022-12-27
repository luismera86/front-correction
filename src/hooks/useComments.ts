import {
  setEvaluationFive,
  setEvaluationFour,
  setEvaluationOne,
  setEvaluationThree,
  setEvaluationTow,
} from '@/redux/slices/dataSlice'

import { useAppDispatch } from '@/redux'
import { useState } from 'react'

export const useComments = (evaluationNumber: number) => {
  const [comment, setComment] = useState('')
  const dispatch = useAppDispatch()
  // el title es el titulo de la evaluación que se está comentando
  const setComments = (title: string, value: string) => {
    switch (evaluationNumber) {
      case 1:
        dispatch(
          setEvaluationOne({
            comment: value,
          })
        )
        localStorage.setItem(title, value)

        break
      case 2:
        dispatch(
          setEvaluationTow({
            comment: value,
            status: '',
          })
        )
        localStorage.setItem(title, value)

        break
      case 3:
        dispatch(
          setEvaluationThree({
            comment: value,
            status: '',
          })
        )
        localStorage.setItem(title, value)

        break
      case 4:
        dispatch(
          setEvaluationFour({
            comment: value,
            status: '',
          })
        )
        localStorage.setItem(title, value)

        break
      case 5:
        dispatch(
          setEvaluationFive({
            comment: value,
            status: '',
          })
        )
        localStorage.setItem(title, value)

        break

      default:
        break
    }
  }

  return {
    comment,
    setComment,
    setComments,
  }
}
