import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
