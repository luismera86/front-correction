import { AppBar, Box, Button, Container, Grid, Stack, Toolbar } from '@mui/material'

import { NavLink } from 'react-router-dom'

export interface NavBarInterface {}

const NavBar: React.FC<NavBarInterface> = () => {
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
              <Button variant='outlined'>React Js</Button>
            </NavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
