import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'

import { ThemePalette } from '@/models'

export interface EvaluationInterface {
  title: string // Título de la evaluación
  evaluation: string // Recibe el texto con los detalles a evaluar
  evaluations: number // Ingresar la cantidad de evaluaciones que se van a realizar, en base a eso determina el puntaje de cada evaluación que realiza
  evaluationValue: (value: number) => void // Recibe la función de acuerdo al número de evaluación pra setear la nota en el custom hook useNote
}

// una función que no retorna nada y pasa por un parámetros paseado el valor del select, que luego es usado en el custom hook useNote
const Evaluation: React.FC<EvaluationInterface> = ({ evaluation, evaluations, evaluationValue, title }) => {
  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    evaluationValue(Number(e.target.value))
  }
  return (
    <Container sx={{ p: 2 }}>
      <Paper >
        <Grid container>
          <Grid item xs={6} p={3}>
            <Typography variant='h6' sx={{ mb: 1, fontWeight: 'bold' }}>
              {title}
            </Typography>
            <Typography>{evaluation}</Typography>
            <FormControl fullWidth sx={{ mt: 2 }}>
              <InputLabel id='demo-simple-select-label'>Estado</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                label='Estado'
                onChange={onChangeSelect}
                defaultValue=''
              >
                <MenuItem value={evaluations === 3 ? 33 : 20}>Realizado</MenuItem>
                <MenuItem value={evaluations === 3 ? 15 : 10}>Incompleto</MenuItem>
                <MenuItem value={0}>No Realizado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} p={3}>
            <TextField label='Comentario' multiline rows={10} defaultValue='' fullWidth />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Evaluation
