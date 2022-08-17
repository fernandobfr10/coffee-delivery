import { Intro } from './Components/Intro'
import { OurCoffees } from './Components/OurCoffees'

import { HomePageContainer } from './styles'

export const HomePage = () => {
  return (
    <HomePageContainer>
      <Intro />
      <OurCoffees />
    </HomePageContainer>
  )
}
