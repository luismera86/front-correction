import { Button, Container, Stack } from '@mui/material'

import { useAppSelector } from '@/redux'
import { useNavigate } from 'react-router-dom'

interface Props {
  containerRef: React.RefObject<HTMLDivElement>
}

export const ReportCopyButton = ({ containerRef }: Props) => {
  const data = useAppSelector((state) => state.dataSlice)
  const navigate = useNavigate()

  const course = data.student.course.toLowerCase()
  const onClickNavigate = () => {
    
    if (course === 'javascript') {
      navigate('/js')
    } else if (course === 'react') {
      navigate('/react')
    } else {
      navigate('/')
    }
  }
  const copyText = () => {
    navigator.clipboard.writeText(containerRef.current?.innerText!)
  }
  return (
    <Container sx={{ p: 4, textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
      <Stack spacing={2} sx={{ width: 200 }}>
        <Button onClick={copyText} variant='contained'>
          Copiar
        </Button>
        <Button onClick={onClickNavigate} variant='contained'>
          Corregir otra entrega
        </Button>
      </Stack>
    </Container>
  )
}
