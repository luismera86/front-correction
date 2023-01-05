import { HomePage, ReportPage } from '@/pages'
import { Route, Routes } from 'react-router-dom'

import { RouterLayout } from '@/components'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/report' element={<ReportPage />} />
      <Route path='/' element={<RouterLayout />}>
        <Route path='/' element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
