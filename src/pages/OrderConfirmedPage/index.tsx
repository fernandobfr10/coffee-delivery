import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import { RegularText, TitleText } from '../../Components/Typography'
import { OrderConfirmedPageContainer, OrderDetailsContainer } from './styles'

import confirmedOrderIllustration from '../../assets/confirmed-order.svg'
import { InfoWithIcon } from '../../Components/InfoWithIcon'
import { useTheme } from 'styled-components'
import { useLocation, useNavigate } from 'react-router-dom'
import { OrderData } from '../CompleteOrderPage'
import { paymentMethods } from '../CompleteOrderPage/components/CompleteOrderForm/PaymentMethodOptions'
import { useEffect } from 'react'

interface LocationType {
  state: OrderData
}

export const OrderConfirmedPage = () => {
  const { colors } = useTheme()

  const { state } = useLocation() as unknown as LocationType

  const navigate = useNavigate()

  useEffect(() => {
    if (!state) {
      navigate('/')
    }
  }, [state, navigate])

  if (!state) return <></>

  return (
    <OrderConfirmedPageContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="l" color="subtitle">
          Agora é só aguardar que logo o café chegará até você.
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors['brand-purple']}
            text={
              <RegularText>
                Entrega em{' '}
                <strong>
                  {state.street}, {state.number}
                </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors['brand-yellow']}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </RegularText>
            }
          />
          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors['brand-yellow-dark']}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedPageContainer>
  )
}
