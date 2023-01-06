import { JsHomePage, JsReportPage } from '../pages'
import { JsPreDeliveryOne, JsPreDeliveryThree, JsPreDeliveryTow } from '../components'
import { Navigate, Route, Routes } from 'react-router-dom'

export const JsRoutes = () => {
  return (
    <Routes>
      <Route path='js' element={<JsHomePage />} />
      <Route path='/js/predeliveryone' element={<JsPreDeliveryOne />} />
      <Route path='/js/predeliverytow' element={<JsPreDeliveryTow />} />
      <Route path='/js/predeliverythree' element={<JsPreDeliveryThree />} />
      <Route path='/js/*' element={<Navigate to='/js' />} />
    </Routes>
  )
}
