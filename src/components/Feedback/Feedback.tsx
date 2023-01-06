import { ChangeEvent, useEffect } from 'react'
import { Container, Paper, TextField, Typography } from '@mui/material'
import { setData, setFeedbackSlice } from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'

import { useFeedback } from '@/hooks'

export interface FeedbackInterface {}

const Feedback: React.FC<FeedbackInterface> = () => {
  const dispatch = useAppDispatch()
  const student = useAppSelector((state) => state.dataSlice)
  const { feedback, calcFeedback, setFeedback } = useFeedback()

  useEffect(() => {
    calcFeedback()
  }, [])

  useEffect(() => {
    calcFeedback()
    dispatch(setFeedbackSlice(feedback))
  }, [feedback])

  useEffect(() => {
    calcFeedback()
  }, [student])

  const onChangeFeedback = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setFeedback(value)
    dispatch(
      setData({
        ...student,
        feedback: value,
      })
    )
  }

  return (
    <Container>
      <Paper sx={{p:3}}>
        <Typography mb={1}>Feedback:</Typography>
        <Typography>{feedback }</Typography>
      </Paper>
    </Container>
  )
}

export default Feedback
