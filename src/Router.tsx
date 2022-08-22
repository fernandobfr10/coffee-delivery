import { Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/HomePage'
import { CompleteOrderPage } from './pages/CompleteOrderPage'
import { DefaultLayout } from './layouts/DefaultLayout'
import { OrderConfirmedPage } from './pages/OrderConfirmedPage'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/complete-order" element={<CompleteOrderPage />} />
        <Route path="/confirmed-order" element={<OrderConfirmedPage />} />
      </Route>
    </Routes>
  )
}
