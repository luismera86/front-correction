import { Box, Container, Stack, TextField, Typography } from '@mui/material'

import { useForm } from '@/hooks'

export interface FormInterface {}

const Form: React.FC<FormInterface> = () => {
  const { handleInputChange, tutorName, studentName, commission } = useForm({
    tutorName: '',
    studentName: '',
    commission: '',
  })
  return (
    <Container>
      <Typography variant='h5'>Datos de la entrega</Typography>
      <Box component='form'>
        <Stack spacing={4} sx={{ mt: 3, width: 500 }}>
          <TextField
            onChange={handleInputChange}
            name='tutorName'
            value={tutorName}
            type='text'
            label='Tutor'
            placeholder='Nombre y apellido del tutor'
            variant='outlined'
          />
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
            name='commission'
            value={commission}
            type='number'
            label='Comisión'
            placeholder='N° de comisión'
            variant='outlined'
          />
        </Stack>
      </Box>
    </Container>
  )
}

export default Form
