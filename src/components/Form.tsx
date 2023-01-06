import { Box, Container, Stack, TextField, Typography } from '@mui/material'
import { ChangeEvent, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '@/redux'

import { setStudent } from '@/redux/slices/dataSlice'

export const Form = () => {
  const dispatch = useAppDispatch()
  const studentSlice = useAppSelector((state) => state.dataSlice.student)


  useEffect(() => {
    dispatch(
      setStudent({
        ...studentSlice,
        name: localStorage.getItem('studentName')!,
        tutor: localStorage.getItem('tutorName')!,
        commission: Number(localStorage.getItem('commission')!),
        course: localStorage.getItem('course')!,
      })
    )
   }, [])

  useEffect(() => {
    
  }, [studentSlice]
  )
  const onChangeStudentName = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('studentName', e.target.value)
    dispatch(setStudent({
      ...studentSlice,
      name: e.target.value
    }))
  }
  const onChangeTutorName = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('tutorName', e.target.value)
    dispatch(setStudent({
      ...studentSlice,
      tutor: e.target.value,
    }))
  }
  const onChangeCourse = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('course', e.target.value)
    dispatch(setStudent({
      ...studentSlice,
      course: e.target.value
    }))
  }
  const onChangeCommission = (e: ChangeEvent<HTMLInputElement>) => {
    localStorage.setItem('commission', e.target.value)
    dispatch(setStudent({
      ...studentSlice,
      commission: Number(e.target.value)
    }))
  }
  
  
  

  
  return (
    <Container>
      <Typography variant='h5'>Datos de la entrega</Typography>
      <Box component='form'>
        <Stack spacing={4} sx={{ mt: 3, width: 500 }}>
          <TextField
            onChange={onChangeStudentName}
            name='studentName'
            value={localStorage.getItem('studentName')}
            type='text'
            label='Alumno'
            placeholder='Nombre y apellido del alumno'
            variant='outlined'
          />
          <TextField
            onChange={onChangeTutorName}
            name='tutorName'
            value={localStorage.getItem('tutorName')}
            type='text'
            label='Tutor'
            placeholder='Nombre y apellido del tutor'
            variant='outlined'
          />
          <TextField
            onChange={onChangeCommission}
            name='commission'
            value={localStorage.getItem('commission')}
            type='number'
            label='Comisión'
            placeholder='N° de comisión'
            variant='outlined'
          />
          <TextField
            onChange={onChangeCourse}
            name='course'
            value={localStorage.getItem('course')}
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

