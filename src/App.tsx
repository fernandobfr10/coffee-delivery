import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { CartContextProvider } from './contexts/CartContext'

import { Router } from './Router'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'

export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
