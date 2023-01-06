import {
  setEvaluations
} from '@/redux/slices/dataSlice'
import { useAppDispatch } from '@/redux'
import { useState } from 'react'

export const useComments = (evaluationNumber: number) => {
  const [comment, setComment] = useState('')
  const [status, setStatus] = useState('')
  const dispatch = useAppDispatch()
  // el title es el titulo de la evaluación que se está comentando
  const setComments = (title: string, value: string, status: string, evaluation: string) => {
    dispatch(
      setEvaluations({
        number: evaluationNumber,
        comment: value,
        status,
        evaluation,
        title
      })
    )
  }

  return {
    comment,
    setComment,
    setComments,
    status,
    setStatus,
  }
}
