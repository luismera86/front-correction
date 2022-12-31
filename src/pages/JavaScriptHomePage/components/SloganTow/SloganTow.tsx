import { Container, Grid } from '@mui/material'

export interface SloganTowInterface {}

const SloganTow: React.FC<SloganTowInterface> = () => {
  return (
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
            - Identificar el flujo de trabajo del script en términos de captura de entradas ingresadas por el usuario,
            procesamiento esencial del simulador y notificación de resultados en forma de salida.
          </p>
          <p>Objetivos Específicos:</p>
          <p>- Capturar entradas mediante prompt().</p>
          <p>- Declarar variables y objetos necesarios para simular el proceso seleccionado.</p>
          <p>
            - Crear funciones y/o métodos para realizar operaciones (suma, resta, concatenación, división, porcentaje,
            etc).
          </p>
          <p>
            - Efectuar una salida, que es el resultado de los datos procesados, la cual puede hacerse por alert() o
            console.log().
          </p>
        </Grid>
      </Grid>
    </Container>
  )
}

export default SloganTow
