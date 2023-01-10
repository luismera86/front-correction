import { Button, Container, Stack } from '@mui/material'

import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'

interface Props {
  containerRef: React.RefObject<HTMLDivElement>
}

export const ReportCopyButton = ({ containerRef }: Props) => {
  const navigate = useNavigate()
  const copyText = () => {
    navigator.clipboard.writeText(containerRef.current?.innerText!)
  }
  return (
    <Container sx={{ p: 4, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={2} sx={{ width: 200 }}>
        <Button onClick={copyText} variant='contained'>
          Copiar
        </Button>
        <Button onClick={() => navigate('/')} variant='contained'>
          Corregir otra entrega
        </Button>
      </Stack>
    </Container>
  )
}
