import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux'
import { useEffect, useState } from 'react'

import { setStudent } from '@/redux/slices/dataSlice'
import { useForm } from '@/hooks'

export interface FormInterface {}

const Form: React.FC<FormInterface> = () => {
  const dispatch = useAppDispatch()
  const studentSlice = useAppSelector((state) => state.dataSlice)
  const [course, setCourse] = useState('')
  const { handleInputChange, tutorName, studentName, commission } = useForm({
    tutorName: '',
    studentName: '',
    commission: 0,
  })

  useEffect(() => {
    dispatch(
      setStudent({
        ...studentSlice.student,
        commission: commission,
        name: studentName,
        tutor: tutorName,
      })
    )
  }, [tutorName, studentName, commission])

  useEffect(() => {
    if (localStorage.getItem('tutorName') === null) {
      localStorage.setItem('tutorName', '')
    } else if (localStorage.getItem('commission') === null) {
      localStorage.setItem('commission', '')
    } else if (localStorage.getItem('studentName') === null) {
      localStorage.setItem('studentName', '')
    }

  
    const student = localStorage.getItem('studentName')
    dispatch(setStudent({
      ...studentSlice.student,
      name: student!
    }))
    console.log(studentSlice.student)
    const course = localStorage.getItem('course')
    setCourse(course!)
  }, [])

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    const course = e.target.value

    localStorage.setItem('course', course)
    dispatch(
      setStudent({
        ...studentSlice.student,
        course,
      })
    )
  }

  return (
    <Container>
      <Typography variant='h5'>Datos de la entrega</Typography>
      <Box component='form'>
        <Stack spacing={4} sx={{ mt: 3, width: 500 }}>
          <TextField
            onChange={handleInputChange}
            name='studentName'
            value={studentName === '' ? localStorage.getItem('studentName') : studentName}
            type='text'
            label='Alumno'
            placeholder='Nombre y apellido del alumno'
            variant='outlined'
          />
          <TextField
            onChange={handleInputChange}
            name='tutorName'
            value={tutorName === '' ? localStorage.getItem('tutorName') : tutorName}
            type='text'
            label='Tutor'
            placeholder='Nombre y apellido del tutor'
            variant='outlined'
          />
          <TextField
            onChange={handleInputChange}
            name='commission'
            value={commission === 0 ? localStorage.getItem('commission') : commission}
            type='number'
            label='Comisión'
            placeholder='N° de comisión'
            variant='outlined'
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel id='demo-simple-select-label'>Curso</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              label='Estado'
              onChange={onChangeSelect}
              value={course ? course : ''}
            >
              <MenuItem value='JavaScript'>JavaScript</MenuItem>
              <MenuItem value='React Js'>React Js</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Box>
    </Container>
  )
}

export default Form
