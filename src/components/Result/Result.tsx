import { Container, Typography } from '@mui/material'

export interface ResultInterface {
  result: string
}

const Result: React.FC<ResultInterface> = ({ result }) => {
  return (
    <Container sx={{ mb: 3, mt: 2 }}>
      <Typography variant='h5'>Resultado: {result}</Typography>
    </Container>
  )
}

export default Result
