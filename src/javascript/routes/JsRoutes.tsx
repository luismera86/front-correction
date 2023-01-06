import { JsPreDeliveryOne, JsPreDeliveryThree, JsPreDeliveryTow } from '../components'
import { Navigate, Route, Routes } from 'react-router-dom'

import { JsHomePage } from '../pages'

export const JsRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<JsHomePage />} />
      <Route path='/predeliveryone' element={<JsPreDeliveryOne />} />
      <Route path='/predeliverytow' element={<JsPreDeliveryTow />} />
      <Route path='/predeliverythree' element={<JsPreDeliveryThree />} />
      <Route path='/*' element={<JsHomePage />} />
    </Routes>
  )
}
