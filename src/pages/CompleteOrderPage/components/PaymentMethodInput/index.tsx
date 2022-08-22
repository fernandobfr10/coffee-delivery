import { PaymentMethodInputContainer } from './styles'

import { CreditCard } from 'phosphor-react'

export const PaymentMethodInput = () => {
  return (
    <PaymentMethodInputContainer>
      <CreditCard size={16} />
      Cartão de Crédito
    </PaymentMethodInputContainer>
  )
}
