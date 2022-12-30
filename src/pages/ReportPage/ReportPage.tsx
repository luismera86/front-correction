import { Container, Grid, Paper, Typography } from '@mui/material'

export interface ReportPageInterface {}

const ReportPage: React.FC<ReportPageInterface> = () => {
  return (
    <Container sx={{ mt: 9 }}>
      <Paper>
        <Container sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant='h4'>INFORME DE PRE ENTREGA</Typography>
        </Container>
        {/* Datos del formulario, incluir el resultado  */}
        <Grid container>
					<Grid item sx={{m: 3}}>
						<Typography>Nombre del Alumno: {'hola des'} </Typography>
						<Typography>Nombre del Tutor: </Typography>
						<Typography>Curso: </Typography>
						<Typography>Comisión: </Typography>
						<Typography>Nota Final: </Typography>
					</Grid>
        </Grid>
        {/* Consigna */}
        {/* Evaluaciones individuales con el estado y comentarios */}
        {/* feedback */}
        {/* botón de imprimir o si hay alguna forma de guardar pantalla */}
      </Paper>
    </Container>
  )
}

export default ReportPage
