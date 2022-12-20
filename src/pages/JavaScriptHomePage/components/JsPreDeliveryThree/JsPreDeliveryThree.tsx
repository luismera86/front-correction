import { Container, Grid, Paper, Typography } from '@mui/material'
import { Evaluation, Feedback, Form } from '@/components'

import { jsDeliveryThree } from '@/data'
import { useNote } from '@/hooks'

export interface JsPreDeliveryThreeInterface {}

const JsPreDeliveryThree: React.FC<JsPreDeliveryThreeInterface> = () => {
  const { result, evaluationNoteOne, evaluationNoteTow, evaluationNoteThree, evaluationNoteFour, evaluationNoteFive } = useNote()

  const { evaluationOne, evaluationTow, evaluationThree, evaluationFour, evaluationFive } = jsDeliveryThree

  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />
        <Container>
          <Grid container>
            <Grid item>
              <h3>Consigna</h3>
              <p>
                Deberás agregar y entregar uso de JSON y Storage, y DOM y eventos del usuario, correspondientes a la
                tercera entrega de tu proyecto final.
              </p>
              <p>Objetivos Generales:</p>
              <p>
                - Codificar funciones de procesos esenciales y notificación de resultados por HTML, añadiendo
                interacción al simulador.{' '}
              </p>
              <p>
                - Ampliar y refinar el flujo de trabajo del script en términos de captura de eventos, procesamiento del
                simulador y notificación de resultados en forma de salidas por HTML, modificando el DOM.
              </p>
              <p>Objetivos Específicos:</p>
              <p>- Definir eventos a manejar y su función de respuesta.</p>
              <p>
                - Modificar el DOM, ya sea para definir elementos al cargar la página o para realizar salidas de un
                procesamiento.
              </p>
              <p>- Almacenar datos (clave-valor) en el Storage y recuperarlos.</p>
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
          evaluationValue={evaluationNoteFour}
        />
        <Evaluation
          title={evaluationFive.title}
          evaluation={evaluationFive.evaluation}
          evaluations={5}
          evaluationValue={evaluationNoteFive}
        />
        <Container sx={{ mb: 3, mt: 2 }}>
          <Typography variant='h5'>Resultado: {result}</Typography>
        </Container>
        <Feedback />
      </Paper>
    </Container>
  )
}

export default JsPreDeliveryThree
