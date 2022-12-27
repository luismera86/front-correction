import { Box, Container, SelectChangeEvent, Stack, TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '@/redux'

import { setStudent } from '@/redux/slices/dataSlice'
import { useEffect } from 'react'
import { useForm } from '@/hooks'

export interface FormInterface {}

const Form: React.FC<FormInterface> = () => {
  const dispatch = useAppDispatch()
  const studentSlice = useAppSelector((state) => state.dataSlice)
  const { handleInputChange, tutorName, studentName, commission, course } = useForm({
    tutorName: '',
    studentName: '',
    commission: 0,
    course: '',
  })

  useEffect(() => {
    dispatch(
      setStudent({
        ...studentSlice.student,
        commission: commission,
        name: studentName,
        tutor: tutorName,
        course,
      })
    )
  }, [tutorName, studentName, commission, course])

  useEffect(() => {
    if (localStorage.getItem('tutorName') === null) {
      localStorage.setItem('tutorName', '')
    } else if (localStorage.getItem('commission') === null) {
      localStorage.setItem('commission', '')
    } else if (localStorage.getItem('studentName') === null) {
      localStorage.setItem('studentName', '')
    } else if (localStorage.getItem('course') === null) {
      localStorage.setItem('course', '')
    }

    dispatch(
      setStudent({
        ...studentSlice.student,
        name: localStorage.getItem('studentName')!,
        commission: Number(localStorage.getItem('commission')!),
        course: localStorage.getItem('course')!,
      })
    )
  }, [])

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
          <TextField
            onChange={handleInputChange}
            name='course'
            value={course === '' ? localStorage.getItem('course') : course}
            type='text'
            label='Curso'
            placeholder='Ingrese el curso como JavaScript, React Js, etc.'
            variant='outlined'
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default Form
