import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles'

import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <img
          src={logoCoffeeDelivery}
          alt="Imagem da logomarca da Coffee Delivery"
        />
        <HeaderButtonsContainer>
          <HeaderButton variant="purple">
            <MapPin size={20} weight="fill" />
            Porto Alegre, RS
          </HeaderButton>
          <HeaderButton variant="yellow">
            <ShoppingCart size={20} weight="fill" />
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}
