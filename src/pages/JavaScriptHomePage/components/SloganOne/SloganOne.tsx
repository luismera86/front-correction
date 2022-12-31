import { Container, Grid } from '@mui/material'

export interface SloganOneInterface {}

const SloganOne: React.FC<SloganOneInterface> = () => {
  return (
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
  )
}

export default SloganOne
