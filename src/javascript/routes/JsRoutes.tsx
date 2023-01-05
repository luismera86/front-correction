import { JsPreDeliveryOne, JsPreDeliveryThree, JsPreDeliveryTow } from '../components'
import { Route, Routes } from 'react-router-dom'

import { JsHomePage } from '../pages'

export const JsRoutes = () => {
  return (
    <Routes>
      <Route path='/js' element={<JsHomePage />} />
      <Route path='/js/predeliveryone' element={<JsPreDeliveryOne />} />
      <Route path='/js/predeliverytow' element={<JsPreDeliveryTow />} />
      <Route path='/js/predeliverythree' element={<JsPreDeliveryThree />} />
    </Routes>
  )
}
