import { Button, Container, Grid, Paper } from '@mui/material'
import { Evaluation, Feedback, Form, Result } from '@/components'
import { postData, setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'

import { SloganOne } from './SloganOne'
import { jsDeliveryOne } from '@/data'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useNote } from '@/hooks'

export const JsPreDeliveryOne = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const report = useAppSelector(state => state.dataSlice)
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree } = useNote()

  useEffect(() => {
    dispatch(setPreDeliveryNumber(1))
  }, [])


  const onHandleSendData = () => { 
    localStorage.setItem('studentName', '')
    dispatch(postData(report))
    navigate('/report')
   }

  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />
        <SloganOne />
        <Evaluation
          evaluationNumber={1}
          title={jsDeliveryOne.evaluationOne.title}
          evaluation={jsDeliveryOne.evaluationOne.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          evaluationNumber={2}
          title={jsDeliveryOne.evaluationTow.title}
          evaluation={jsDeliveryOne.evaluationTow.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          evaluationNumber={3}
          title={jsDeliveryOne.evaluationThree.title}
          evaluation={jsDeliveryOne.evaluationThree.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteThree}
        />
        <Result result={result} />
        <Feedback />
        <Container sx={{ mt: 3, textAlign: 'center' }}>
          <Button variant='contained' size='large' onClick={onHandleSendData}>
            Generar informe
          </Button>
        </Container>
      </Paper>
    </Container>
  )
}