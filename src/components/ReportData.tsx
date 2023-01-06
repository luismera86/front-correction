import { Grid, Typography } from "@mui/material"

import { useAppSelector } from "@/redux"

export const ReportData = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  return (
    <Grid container>
      <Grid item sx={{ m: 3 }}>
        <Typography fontSize={17} mb={1}>
          Nombre del Alumno: {dataSlice.student.name}{' '}
        </Typography>
        <Typography fontSize={17} mb={1}>
          Nombre del Tutor: {dataSlice.student.tutor}
        </Typography>
        <Typography fontSize={17} mb={1}>
          N° De Pre Entrega: {dataSlice.preDeliveryNumber}
        </Typography>
        <Typography fontSize={17} mb={1}>
          Curso: {dataSlice.student.course}
        </Typography>
        <Typography fontSize={17} mb={1}>
          Comisión: {dataSlice.student.commission}
        </Typography>
        <Typography fontSize={17} mb={1}>
          Nota Final: {dataSlice.result}
        </Typography>
      </Grid>
    </Grid>
  )
}
