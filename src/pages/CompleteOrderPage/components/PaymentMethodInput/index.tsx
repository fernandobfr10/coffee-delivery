import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { PaymentMethodInputContainer, ContentContainer } from './styles'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
}

// eslint-disable-next-line react/display-name
export const PaymentMethodInput = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})
