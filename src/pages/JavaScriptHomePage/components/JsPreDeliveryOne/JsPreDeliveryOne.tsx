import { Box, Container, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Stack, TextField, Typography } from '@mui/material'
import { useForm, useNote } from '@/hooks'

import { Evaluation } from '@/components'
import { jsDeliveryOne } from '@/data';
import { useState } from 'react';

export interface JsPreDeliveryOneInterface {}

const JsPreDeliveryOne: React.FC<JsPreDeliveryOneInterface> = () => {
  const {note, result, evaluationNote} = useNote()
	const { formInputState, handleInputChange, tutorName, studentName, commission } = useForm({
    tutorName: '',
    studentName: '',
    commission: '',
  })
	const e = () => {}
  return (
		<Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
			
			<Paper elevation={10} sx={{ p: 3 }}>
				<Container sx={{mb: 3}}>
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
			
        <Grid container>
          <Grid item>
            <h3>Consigna</h3>
            <p>Comienza a crear la estructura inicial de tu proyecto integrador. Deberás:</p>
            <p>
              - Pensar el alcance de tu proyecto: ¿usarás un cotizador de seguros? ¿un simulador de créditos? ¿un
              simulador personalizado?
            </p>
            <p>- Armar la estructura HTML del proyecto.</p>
            <p>- Incorporar algoritmo condicional y algoritmo con ciclo.</p>
            <p>- Utilizar funciones para realizar esas operaciones.</p>
          </Grid>
				</Grid>
        <Evaluation title={jsDeliveryOne.evaluationOne.title} evaluation={jsDeliveryOne.evaluationOne.evaluation} evaluations={3} evaluationValue={evaluationNote} />
        
      </Paper>
    </Container>
  )
}

export default JsPreDeliveryOne
