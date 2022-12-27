import { ChangeEvent, useEffect } from 'react'
import { Container, Paper, TextField } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux'

import { setData } from '@/redux/slices/dataSlice'
import { useFeedback } from '@/hooks'

export interface FeedbackInterface {}

const Feedback: React.FC<FeedbackInterface> = () => {
  const dispatch = useAppDispatch()
  const student = useAppSelector((state) => state.dataSlice)
  const { feedback, calcFeedback, setFeedback } = useFeedback()

  useEffect(() => {
    const local = localStorage.getItem('feedback')
    if (local !== null) {
      setFeedback(local)
      setData({
        ...student,
        feedback: local,
      })
    }
  }, [])

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
    localStorage.setItem('feedback', value)
  }

  return (
    <Container>
      <Paper>
        <TextField label='Feedback' multiline rows={10} value={feedback} onChange={onChangeFeedback} fullWidth />
      </Paper>
    </Container>
  )
}

export default Feedback
