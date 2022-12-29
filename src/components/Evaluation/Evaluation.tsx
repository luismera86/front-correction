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
import { useAppDispatch, useAppSelector } from '@/redux'
import { useCalcPoints, useComments } from '@/hooks'

import { useEffect } from 'react'

export interface EvaluationInterface {
  title: string // Título de la evaluación
  evaluation: string // Recibe el texto con los detalles a evaluar
  evaluations: number // Ingresar la cantidad de evaluaciones que se van a realizar, en base a eso determina el puntaje de cada evaluación que realiza
  evaluationValue: (value: number) => void // Recibe la función de acuerdo al número de evaluación pra setear la nota en el custom hook useNote
  evaluationNumber: number // número de evaluación de la consigna
}

// una función que no retorna nada y pasa por un parámetros paseado el valor del select, que luego es usado en el custom hook useNote
const Evaluation: React.FC<EvaluationInterface> = ({
  evaluation,
  evaluations,
  evaluationValue,
  title,
  evaluationNumber,
}) => {
  const dispatch = useAppDispatch()
  const student = useAppSelector((state) => state.dataSlice)
  const { points, clacPoints } = useCalcPoints()
  const { comment, setComment, setComments, setStatus, status } = useComments(evaluationNumber)

  // Realiza render por cada ves que detecte que el estado global recibió un cambio
  useEffect(() => {}, [comment, student])

  // Realiza re render cada ves que se modifica la nota y recibe un valor diferente el resultado
  useEffect(() => {
    evaluationValue(points)
  }, [points])

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    const value = e.target.value
    setStatus(value)
    clacPoints(evaluations, value)
    setComments(title, comment, value)
  }

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    setComment(value)
    setComments(title, value, status)
  }

  return (
    <Container sx={{ p: 2 }}>
      <Paper>
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
                value={status}
              >
                <MenuItem value='Realizado'>Realizado</MenuItem>
                <MenuItem value='Incompleto'>Incompleto</MenuItem>
                <MenuItem value='No Realizado'>No Realizado</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} p={3}>
            <TextField label='Comentario' multiline rows={10} value={comment} onChange={onChangeComment} fullWidth />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default Evaluation
