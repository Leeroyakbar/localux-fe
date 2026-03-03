import { createContext } from "react"
import { type CartItem } from "../components/home/Catalog"

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  totalItems: number
}

// Hanya export objek context
export const CartContext = createContext<CartContextType | undefined>(undefined)
