import { Box, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { Evaluation, Feedback, Form } from '@/components'

import { jsDeliveryOne } from '@/data'
import { useNote } from '@/hooks'

export interface JsPreDeliveryOneInterface {}

const JsPreDeliveryOne: React.FC<JsPreDeliveryOneInterface> = () => {
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree } = useNote()

  const e = () => {}
  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />

        // TODO Instalar redux para armar todo el state con los datos para guardar en la base de datos de mongo 
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
          title={jsDeliveryOne.evaluationOne.title}
          evaluation={jsDeliveryOne.evaluationOne.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          title={jsDeliveryOne.evaluationTow.title}
          evaluation={jsDeliveryOne.evaluationTow.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          title={jsDeliveryOne.evaluationThree.title}
          evaluation={jsDeliveryOne.evaluationThree.evaluation}
          evaluations={3}
          evaluationValue={evaluationNoteThree}
        />

        <Grid item>
          <Typography>{result}</Typography>
        </Grid>
        <Feedback />
      </Paper>
    </Container>
  )
}

export default JsPreDeliveryOne
