import { Button, Container, Grid, Paper, Stack } from '@mui/material'

import { Link } from 'react-router-dom'

export interface JavaScriptHomePageInterface {}

const JavaScriptHomePage: React.FC<JavaScriptHomePageInterface> = () => {
  return (
    <Container sx={{ mt: 9, p: 5 }}>
      <Stack direction='column' spacing={3} justifyContent='center' alignItems='center'>
        <Link to='/#' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' size='large'>
            Primera pre entrega
          </Button>
        </Link>
        <Link to='/#' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' size='large'>
            Segunda pre entrega
          </Button>
        </Link>
        <Link to='/#' style={{ textDecoration: 'none' }}>
          <Button variant='outlined' size='large'>
            Tercera pre entrega
          </Button>
        </Link>
      </Stack>
    </Container>
  )
}

export default JavaScriptHomePage
