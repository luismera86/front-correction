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
import {
  setEvaluationFive,
  setEvaluationFour,
  setEvaluationOne,
  setEvaluationThree,
  setEvaluationTow,
  setStudent,
} from '@/redux/slices/dataSlice'
import { useAppDispatch, useAppSelector } from '@/redux'
import { useCalcPoints, useComments } from '@/hooks'
import { useEffect, useState } from 'react'

export interface EvaluationInterface {
  title: string // Título de la evaluación
  evaluation: string // Recibe el texto con los detalles a evaluar
  evaluations: number // Ingresar la cantidad de evaluaciones que se van a realizar, en base a eso determina el puntaje de cada evaluación que realiza
  evaluationValue: (value: number) => void // Recibe la función de acuerdo al número de evaluación pra setear la nota en el custom hook useNote
  evaluationNumber: number
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
  // const [comment, setComment] = useState('')
  const { points, clacPoints } = useCalcPoints()
  const { comment, setComment, setComments } = useComments(evaluationNumber)

  useEffect(() => {
    const local = localStorage.getItem(title)
    if (local === null) {
      localStorage.setItem(title, '')
    }
  }, [])

  useEffect(() => {
    const local = localStorage.getItem(title)
    if (local !== null) {
      setComments(title, local)
      setComment(local)
    } else {
      localStorage.setItem(title, '')
      setComment('')
    }
  }, [])

  useEffect(() => {
    const local = localStorage.getItem(title)
    if (local !== null) {
      setComment(local)
    } else {
      localStorage.setItem(title, '')
      setComment('')
    }
  }, [comment, student])

  useEffect(() => {
    evaluationValue(points)
  }, [points])

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    const value = e.target.value
    clacPoints(evaluations, value)
  }

  const onChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value

    setComment(value)
    setComments(title, value)
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
                defaultValue=''
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
