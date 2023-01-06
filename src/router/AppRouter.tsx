import { Route, Routes } from 'react-router-dom'

import { HomePage } from '@/pages'
import { JsHomePage } from '../javascript/pages/JsHomePage';
import { JsPreDeliveryOne } from '../javascript/components/JsPreDeliveryOne';
import { JsReportPage } from '@/javascript/pages'
import { JsRoutes } from '@/javascript/routes'
import { RouterLayout } from '@/components'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/js/report' element={<JsReportPage />} />
      <Route path='/' element={<RouterLayout />}>
        <Route path='/js/*' element={<JsRoutes />} />
        <Route path='/*' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
