import { Button, Container, Stack } from '@mui/material'

import { Link } from 'react-router-dom'

interface Props {
  linkOne: string
  linkTow: string
  linkThree?: string
}
// Recibe los links a las pre entregas
export const PreDeliveryButtons = ({ linkOne, linkTow, linkThree }: Props) => {
  return (
    <Container sx={{ mt: 9, p: 5 }}>
      <Stack direction='column' spacing={3} justifyContent='center' alignItems='center'>
        <Link to={linkOne} style={{ textDecoration: 'none' }}>
          <Button variant='outlined' size='large'>
            Primera pre entrega
          </Button>
        </Link>
        <Link to={linkTow} style={{ textDecoration: 'none' }}>
          <Button variant='outlined' size='large'>
            Segunda pre entrega
          </Button>
        </Link>
        {linkThree && (
          <Link to={linkThree} style={{ textDecoration: 'none' }}>
            <Button variant='outlined' size='large'>
              Tercera pre entrega
            </Button>
          </Link>
        )}
      </Stack>
    </Container>
  )
}
