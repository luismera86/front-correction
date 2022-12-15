import { Dispatch, SetStateAction } from 'react'
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material'

export interface EvaluationInterface {
  evaluation: string
  evaluations: number // Ingresar la cantidad de evaluaciones que se van a realizar
  evaluationValue: (value: number) => void
}

const Evaluation: React.FC<EvaluationInterface> = ({ evaluation, evaluations, evaluationValue }) => {
  const onChangeSelect = (e: SelectChangeEvent<string>) => {
  evaluationValue(Number(e.target.value))
  }
  return (
    <Grid container sx={{ mt: 3, height: 200 }}>
      <Grid item xs={6} sx={{ p: 1 }}>
        <Typography>{evaluation}</Typography>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id='demo-simple-select-label'>Estado</InputLabel>
          <Select labelId='demo-simple-select-label' id='demo-simple-select' label='Estado' onChange={onChangeSelect} defaultValue=''  >
            <MenuItem value={evaluations === 3 ? 33 : 20}>Realizado</MenuItem>
            <MenuItem value={evaluations === 3 ? 15 : 10}>Incompleto</MenuItem>
            <MenuItem value={0}>No Realizado</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6} sx={{ p: 1 }}>
        <TextField label='Comentario' multiline rows={6} defaultValue='' fullWidth variant='filled'/>
      </Grid>
    </Grid>
  )
}

export default Evaluation
