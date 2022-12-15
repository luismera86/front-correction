import { HomePage, JavaScriptHomePage, JsPreDeliveryOne, JsPreDeliveryThree, JsPreDeliveryTow } from '@/pages'
import { Route, Routes } from 'react-router-dom'

import { RouterLayout } from '@/components'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/js' element={<JavaScriptHomePage />} />
        <Route path='/js/predeliveryone' element={<JsPreDeliveryOne />} />
        <Route path='/js/predeliverytow' element={<JsPreDeliveryTow />} />
        <Route path='/js/predeliverythree' element={<JsPreDeliveryThree />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
