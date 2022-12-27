import { Container, Grid, Paper } from '@mui/material'
import { Evaluation, Feedback, Form, Result } from '@/components'

import { jsDeliveryOne } from '@/data'
import { setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch } from '@/redux'
import { useEffect } from 'react'
import { useNote } from '@/hooks'

export interface JsPreDeliveryOneInterface {}

const JsPreDeliveryOne: React.FC<JsPreDeliveryOneInterface> = () => {
  const dispatch = useAppDispatch()
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree } = useNote()

  useEffect(() => {
    dispatch(setPreDeliveryNumber(1))
  }, [])

  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />
        <Container>
          <Grid container>
            <Grid item>
              <h3>Consigna</h3>
              <p>Comienza a crear la estructura inicial de tu proyecto integrador. Deberás:</p>
              <p>
                - Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un
                simulador personalizado?
              </p>
              <p>- Armar la estructura HTML del proyecto.</p>
              <p>- Incorporar algoritmo condicional y algoritmo con ciclo.</p>
              <p>- Utilizar funciones para realizar esas operaciones.</p>
            </Grid>
          </Grid>
        </Container>
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
      </Paper>
    </Container>
  )
}

export default JsPreDeliveryOne
