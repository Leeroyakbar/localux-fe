import { createContext } from "react"
import { type CartItem } from "../components/home/Catalog"

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number, color: string, size: string) => void // Tambahkan ini
  updateQuantity: (id: number, color: string, size: string, change: number) => void // Tambahkan ini
  totalItems: number
}

// Hanya export objek context
export const CartContext = createContext<CartContextType | undefined>(undefined)
