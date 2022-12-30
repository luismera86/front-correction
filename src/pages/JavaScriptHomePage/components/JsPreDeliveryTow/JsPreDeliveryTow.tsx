import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { Evaluation, Feedback, Form } from '@/components'
import { postData, setPreDeliveryNumber } from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'

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
        <Container>
          <Grid container>
            <Grid item>
              <h3>Consigna</h3>
              <p>
                Deberás entregar la estructura del proyecto, las variables de JS necesarias y los objetos de JS,
                correspondientes a la segunda entrega de tu proyecto final.
              </p>
              <p>Objetivos Generales:</p>
              <p>- Codificar la funcionalidad inicial del simulador.</p>
              <p>
                - Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el
                usuario, procesamiento esencial del simulador y notificación de resultados en forma de salida.
              </p>
              <p>Objetivos Específicos:</p>
              <p>- Capturar entradas mediante prompt().</p>
              <p>- Declarar variables y objetos necesarios para simular el proceso seleccionado.</p>
              <p>
                - Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división,
                porcentaje, etc).
              </p>
              <p>
                - Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o
                console.log().
              </p>
            </Grid>
          </Grid>
        </Container>
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
