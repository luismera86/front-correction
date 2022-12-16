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
import { Dispatch, SetStateAction } from 'react'

import { ThemePalette } from '@/models'

export interface EvaluationInterface {
  title: string
  evaluation: string
  evaluations: number // Ingresar la cantidad de evaluaciones que se van a realizar
  evaluationValue: (value: number) => void
}

const Evaluation: React.FC<EvaluationInterface> = ({ evaluation, evaluations, evaluationValue, title }) => {
  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    evaluationValue(Number(e.target.value))
  }
  return (
    <Container sx={{ p: 2 }} >
      <Paper variant='outlined' sx={{ border: 1, borderColor: ThemePalette.PRIMARY, display: 'flex' }} >
        <Grid container sx={{ mt: 3, height: 200 }} >
          <Grid item sx={{ p: 1 }}>
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
        </Grid>
        <Grid container>
          <Grid item xs={6} sx={{ p: 1 }}>
            <TextField label='Comentario' multiline rows={8} defaultValue='' fullWidth />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Evaluation
