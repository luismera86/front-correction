import { Button, Container, Grid, Paper, Typography } from '@mui/material'
import { SloganOne, SloganThree, SloganTow } from '../components'
import { useAppDispatch, useAppSelector } from '@/redux'

import { ReportEvaluation } from '@/components'
import { getDataSlice } from '@/redux/slices/dataSlice'
import { saveAs } from 'file-saver'
import { useEffect } from 'react'

export const JsReportPage = () => {
  const dispatch = useAppDispatch()
  const dataSlice = useAppSelector((state) => state.dataSlice)

  // TODO utilizar un useParams que reciba el id que vamos a enviar para hacer el getData de redux
  useEffect(() => {
    dispatch(getDataSlice())
  }, [])

  const onHandleSaveHtml = () => {
    const html = document.documentElement.outerHTML
    const blob = new Blob([html], { type: 'text/html' })
    saveAs(blob, `${dataSlice.student.name}.html`)
  }

  return (
    <Container sx={{ mt: 9 }}>
      <Paper>
        <Container sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant='h4'>INFORME DE PRE ENTREGA</Typography>
        </Container>
        {/* Datos del formulario, incluir el resultado  */}
        <Grid container>
          <Grid item sx={{ m: 3 }}>
            <Typography>Nombre del Alumno: {dataSlice.student.name} </Typography>
            <Typography>Nombre del Tutor: {dataSlice.student.tutor}</Typography>
            <Typography>Curso: {dataSlice.student.course}</Typography>
            <Typography>Comisión: {dataSlice.student.commission}</Typography>
            <Typography>Nota Final: {dataSlice.result}</Typography>
          </Grid>
        </Grid>
        {/* Consigna */}
        {dataSlice.preDeliveryNumber === 1 ? (
          <SloganOne />
        ) : dataSlice.preDeliveryNumber === 2 ? (
          <SloganTow />
        ) : (
          <SloganThree />
        )}
        {/* Evaluaciones individuales con el estado y comentarios */}
        {/* // TODO hacer un componente que reciba los datos de los comentarios, hacer que los comentarios queden en un array  */}

        <ReportEvaluation />

        {/* feedback */}
        <Typography>{dataSlice.feedback}</Typography>
        {/* botón de imprimir o si hay alguna forma de guardar pantalla */}
        <Button onClick={onHandleSaveHtml}>Guardar</Button>
      </Paper>
    </Container>
  )
}
