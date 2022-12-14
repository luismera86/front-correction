import { NavBar } from '../NavBar'
import { Outlet } from 'react-router-dom'

export interface RouterLayoutInterface {}

const RouterLayout: React.FC<RouterLayoutInterface> = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export default RouterLayout
