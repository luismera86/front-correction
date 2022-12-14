import { HomePage, JavaScriptHomePage } from '@/pages'
import { Route, Routes } from 'react-router-dom'

import { RouterLayout } from '@/components'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<RouterLayout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/js' element={<JavaScriptHomePage />} />
      </Route>
    </Routes>
  )
}

export default AppRouter
