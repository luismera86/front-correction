import { Container, Grid, Paper, Typography } from '@mui/material'
import { Evaluation, Feedback, Form } from '@/components'

import { jsDeliveryTow } from '@/data'
import { useNote } from '@/hooks'

export interface JsPreDeliveryTowInterface {}

const JsPreDeliveryTow: React.FC<JsPreDeliveryTowInterface> = () => {
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree } = useNote()

  const { evaluationOne, evaluationTow, evaluationThree, evaluationFour, evaluationFive } = jsDeliveryTow

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
          title={evaluationOne.title}
          evaluation={evaluationOne.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteOne}
        />
        <Evaluation
          title={evaluationTow.title}
          evaluation={evaluationTow.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteTow}
        />
        <Evaluation
          title={evaluationThree.title}
          evaluation={evaluationThree.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteThree}
        />
        <Evaluation
          title={evaluationFour.title}
          evaluation={evaluationFour.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteThree}
        />
        <Evaluation
          title={evaluationFive.title}
          evaluation={evaluationFive.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteThree}
        />
        <Container sx={{ mb: 3, mt: 2 }}>
          <Typography variant='h5'>Resultado: {result}</Typography>
        </Container>
        <Feedback />
      </Paper>
    </Container>
  )
}

export default JsPreDeliveryTow
