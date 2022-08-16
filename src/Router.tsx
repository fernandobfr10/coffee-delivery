import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { CompleteOrderPage } from './pages/CompleteOrderPage'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
      </Route>
    </Routes>
  )
}
