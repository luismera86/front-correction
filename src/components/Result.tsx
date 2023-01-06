import { Container, Typography } from '@mui/material'

interface Props {
  result: string
}

export const Result = ({ result }: Props) => {
  return (
    <Container sx={{ mb: 3, mt: 2 }}>
      <Typography variant='h5'>Resultado: {result}</Typography>
    </Container>
  )
}
