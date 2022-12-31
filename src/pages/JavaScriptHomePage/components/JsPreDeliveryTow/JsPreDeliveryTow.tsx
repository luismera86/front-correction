import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Evaluation, Feedback, Form } from '@/components'
import { postData, setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'

import { SloganTow } from '../SloganTow'
import { jsDeliveryTow } from '@/data'
import { useEffect } from 'react'
import { useNote } from '@/hooks'

export interface JsPreDeliveryTowInterface {}

const JsPreDeliveryTow: React.FC<JsPreDeliveryTowInterface> = () => {
  const dispatch = useAppDispatch()
  const report = useAppSelector((state) => state.dataSlice)

  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree, evaluationNoteFour, evaluationNoteFive } =
    useNote()

  const { evaluationOne, evaluationTow, evaluationThree, evaluationFour, evaluationFive } = jsDeliveryTow

  useEffect(() => {
    dispatch(setPreDeliveryNumber(2))
  }, [])

  const onHandleSendData = () => {
    localStorage.setItem('studentName', '')
    dispatch(postData(report))
  }

  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />
        <SloganTow />
        <Evaluation
          evaluationNumber={1}
          title={evaluationOne.title}
          evaluation={evaluationOne.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          evaluationNumber={2}
          title={evaluationTow.title}
          evaluation={evaluationTow.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          evaluationNumber={3}
          title={evaluationThree.title}
          evaluation={evaluationThree.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteThree}
        />
        <Evaluation
          evaluationNumber={4}
          title={evaluationFour.title}
          evaluation={evaluationFour.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteFour}
        />
        <Evaluation
          evaluationNumber={5}
          title={evaluationFive.title}
          evaluation={evaluationFive.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteFive}
        />
        <Container sx={{ mb: 3, mt: 2 }}>
          <Typography variant='h5'>Resultado: {result}</Typography>
        </Container>
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

export default JsPreDeliveryTow
