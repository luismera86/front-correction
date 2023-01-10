import { Button, Container, Paper } from '@mui/material'
import { Feedback, Form } from '@/components'

import { useNavigate } from 'react-router-dom'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const RLayout = ({ children }: Props) => {
  const navigate = useNavigate()

  const onHandleSendData = () => {
    localStorage.setItem('studentName', '')
    navigate('/react/report')
  }

  return (
    <Container sx={{ mt: 9, p: 4 }} maxWidth='lg'>
      <Paper elevation={10} sx={{ p: 3 }}>
        <Form />
        {/* Aquí van el número de slogan, Evaluations.tsx y Result.tsx */}
        {children}

        <Feedback />
        <Container sx={{ mt: 3, textAlign: 'center' }}>
          <Button variant='contained' size='large' onClick={onHandleSendData}>
            Generar informe
          </Button>
        </Container>
      </Paper>
    </Container>
  )
}
