import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'

import { QuantityInput } from '../../../../Components/QuantityInput'
import { RegularText, TitleText } from '../../../../Components/Typography'
import { useCart } from '../../../../hooks/useCart'

import { formatMoney } from '../../../../utils/formatMoney'

import {
  AddCartWrapper,
  CardFooter,
  CoffeeCardContainer,
  Description,
  Name,
  Tags,
} from './styles'

export interface Coffee {
  id: number
  tags: string[]
  name: string
  description: string
  photo: string
  price: number
}

interface CoffeeProps {
  coffee: Coffee
}

export const CoffeeCard = ({ coffee }: CoffeeProps) => {
  const { addCoffeeToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const formattedPrice = formatMoney(coffee.price)

  function handleIncrease() {
    setQuantity(state => state + 1)
  }

  function handleDecrease() {
    setQuantity(state => state - 1)
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  return (
    <CoffeeCardContainer>
      <img
        src={`/coffees/${coffee.photo}`}
        alt={`Ilustração de um ${coffee.name}`}
      />

      <Tags>
        {coffee.tags.map(tag => (
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
      </Tags>

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">
            {formattedPrice}
          </TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
          <button onClick={handleAddToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  )
}
