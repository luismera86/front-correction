import { AppBar, Box, Button, Stack, Toolbar } from '@mui/material'

import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <Box>
      <AppBar position='fixed'>
        <Toolbar>
          <Stack direction='row' spacing={2}>
            <NavLink style={{ textDecoration: 'none' }} to='/'>
              <Button variant='outlined'>Home</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to='/js'>
              <Button variant='outlined'>JavaScript</Button>
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to='/react'>
              <Button variant='outlined'>React</Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
