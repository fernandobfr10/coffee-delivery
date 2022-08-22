import { Bank, CreditCard, Money } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { RegularText } from '../../../../../Components/Typography'
import { PaymentMethodInput } from '../../PaymentMethodInput'
import { PaymentMethodOptionsContainer } from '../styles'

export const paymentMethods = {
  credit: {
    label: 'Cartão de Crédito',
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: 'Cartão de Débito',
    icon: <Bank size={16} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} />,
  },
}

export const PaymentMethodOptions = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const paymentMethodError = errors?.paymentMethod?.message as unknown as string

  return (
    <PaymentMethodOptionsContainer>
      {Object.entries(paymentMethods).map(([key, { icon, label }]) => (
        <PaymentMethodInput
          icon={icon}
          label={label}
          id={key}
          value={key}
          key={label}
          {...register('paymentMethod')}
        />
      ))}
      {paymentMethodError && <RegularText>{paymentMethodError}</RegularText>}
    </PaymentMethodOptionsContainer>
  )
}
