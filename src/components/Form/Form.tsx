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
import { useEffect, useState } from 'react';

import { useForm } from '@/hooks'

export interface FormInterface {}
// TODO hacer que se guarde el tutor, curso y comisión en el localstorage para que no tenga que volver a escribirlo
const Form: React.FC<FormInterface> = () => {
  const [course, setCourse] = useState('')
  const { handleInputChange, tutorName, studentName, commission } = useForm({
    tutorName: '',
    studentName: '',
    commission: '',
  })

 
  useEffect(() => {
    if (localStorage.getItem('tutorName') === null) {
      localStorage.setItem('tutorName', '')
    }
    if (localStorage.getItem('commission') === null) {
      localStorage.setItem('commission', '')
    }
   
    const course = localStorage.getItem('course')
    setCourse(course!)
  }, [])
  

  const onChangeSelect = (e: SelectChangeEvent<string>) => {
    // Todo cuando se implemente redux modificar para que se aplique directamente en el reducer
    setCourse(e.target.value)
    localStorage.setItem('course', e.target.value)
  }

  return (
    <Container>
      <Typography variant='h5'>Datos de la entrega</Typography>
      <Box component='form'>
        <Stack spacing={4} sx={{ mt: 3, width: 500 }}>
          <TextField
            onChange={handleInputChange}
            name='studentName'
            value={studentName}
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
            value={commission === '' ? localStorage.getItem('commission') : commission}
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
