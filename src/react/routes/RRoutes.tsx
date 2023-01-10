import { RPreDeliveryOne, RPreDeliveryTow } from '../components'
import { Route, Routes } from 'react-router-dom'

import { RHomePage } from '../pages'

export const RRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<RHomePage />} />
      <Route path='/predeliveryone' element={<RPreDeliveryOne />} />
      <Route path='/predeliverytow' element={<RPreDeliveryTow />} />
      <Route path='/*' element={<RHomePage />} />
    </Routes>
  )
}
