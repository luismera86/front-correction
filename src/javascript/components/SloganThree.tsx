import { Container, Grid } from '@mui/material'

export const SloganThree = () => {
  return (
    <Container>
      <Grid container>
        <Grid item>
          <h3>Consigna</h3>
          <p>
            Deberás agregar y entregar uso de JSON y Storage, y DOM y eventos del usuario, correspondientes a la tercera
            entrega de tu proyecto final.
          </p>
          <p>Objetivos Generales:</p>
          <p>
            - Codificar funciones de procesos esenciales y notificación de resultados por HTML, añadiendo interacción al
            simulador.{' '}
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
  )
}