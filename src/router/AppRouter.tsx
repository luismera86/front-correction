import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages';
import { JsReportPage } from '@/javascript/pages';
import { JsRoutes } from '@/javascript/routes';
import { RReportPage } from '@/react/pages';
import { RRoutes } from '@/react/routes';
import { RouterLayout } from '@/components';

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/js/report' element={<JsReportPage />} />
      <Route path='/react/report' element={<RReportPage />} />
      <Route path='/' element={<RouterLayout />}>
        <Route path='/js/*' element={<JsRoutes />} />
        <Route path='/react/*' element={<RRoutes />} />
        <Route path='/*' element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
