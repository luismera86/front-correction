import { Grid, Typography } from '@mui/material'

import { useAppSelector } from '@/redux'

export const ReportEvaluation = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  return (
    <Grid container p={3}>
      {dataSlice.evaluations.map((e) => (
        <Grid item>
          <Typography fontSize={20} fontWeight={700} mb={2}>
            {e.title}
          </Typography>
          <Typography mb={1}>{e.evaluation}</Typography>
          <Typography mb={1} fontWeight={700}>
            Estado: {e.status}
          </Typography>
          <Typography mb={1} fontWeight={700}>Comentario:</Typography>         
          <Typography mb={3}>{e.comment}</Typography>         
          <hr />
        </Grid>
      ))}
    </Grid>
  )
}
