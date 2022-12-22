import {
  setEvaluationFive,
  setEvaluationFour,
  setEvaluationOne,
  setEvaluationThree,
  setEvaluationTow,
} from '@/redux/slices/dataSlice'

import { useAppDispatch } from '@/redux';
import { useState } from 'react';

export const useComments = (evaluationNumber: number) => {
  const [comment, setComment] = useState('')
  const dispatch = useAppDispatch()

  const setComments = (title: string) => {
    
    switch (evaluationNumber) {
      case 1:
        dispatch(
          setEvaluationOne({
            comment,
          })
        )
        localStorage.setItem(title, comment)

        break
      case 2:
        dispatch(
          setEvaluationTow({
            comment,
            status: '',
          })
        )
        localStorage.setItem(title, comment)

        break
      case 3:
        dispatch(
          setEvaluationThree({
            comment,
            status: '',
          })
        )
        localStorage.setItem(title, comment)

        break
      case 4:
        dispatch(
          setEvaluationFour({
            comment,
            status: '',
          })
        )
        localStorage.setItem(title, comment)

        break
      case 5:
        dispatch(
          setEvaluationFive({
            comment,
            status: '',
          })
        )
        localStorage.setItem(title, comment)

        break

      default:
        break
    }
  }

  return {
    comment,
    setComment,
    setComments

  }
}
