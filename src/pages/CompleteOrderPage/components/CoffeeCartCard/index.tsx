import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../../Components/QuantityInput'
import { RegularText } from '../../../../Components/Typography'
import {
  ActionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from './styles'

export const CoffeeCartCard = () => {
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small" />
            <RemoveButton>
              <Trash size={16} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}
