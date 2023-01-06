import { Grid, Typography } from '@mui/material'

import { useAppSelector } from '@/redux'

export const ReportFeedback = () => {
  const dataSlice = useAppSelector((state) => state.dataSlice)

  return (
    <Grid container p={3}>
      <Typography>{dataSlice.feedback}</Typography>
    </Grid>
  )
}
