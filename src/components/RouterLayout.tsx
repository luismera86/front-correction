import { NavBar } from './NavBar'
import { Outlet } from 'react-router-dom'

export const RouterLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}
