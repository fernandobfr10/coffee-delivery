import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'

import { CompleteOrderPageContainer } from './styles'

export const CompleteOrderPage = () => {
  return (
    <CompleteOrderPageContainer className="container">
      <CompleteOrderForm />
      <SelectedCoffees />
    </CompleteOrderPageContainer>
  )
}
