import { useState, type ReactNode } from "react"
import { CartContext } from "./CartContext"
import { type CartItem } from "../components/home/Catalog"

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (newItem: CartItem) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === newItem.id && item.selectedColor === newItem.selectedColor && item.selectedSize === newItem.selectedSize)

      if (isExist) {
        return prev.map((item) => (item === isExist ? { ...item, quantity: item.quantity + newItem.quantity } : item))
      }
      return [...prev, newItem]
    })
  }

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0)

  return <CartContext.Provider value={{ cart, addToCart, totalItems }}>{children}</CartContext.Provider>
}
