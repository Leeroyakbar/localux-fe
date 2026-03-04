import { X, ShoppingBag, Plus, Minus, Trash2 } from "lucide-react"
import { useCart } from "../../hooks/useCart"
import { formatIDR } from "../../utils/formatter"
import { motion, AnimatePresence } from "framer-motion"

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  // Ambil state 'cart' (bukan cartItems sesuai context kita kemarin)
  const { cart, removeFromCart, totalItems, updateQuantity } = useCart()

  // Hitung total harga belanjaan
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-200 bg-black/40 backdrop-blur-sm" />

          {/* Drawer Content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full md:w-100 bg-white z-201 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 flex items-center justify-between border-b bg-white">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-charcoal" />
                <h2 className="text-lg font-heading font-bold uppercase tracking-tight">Keranjang Belanja ({totalItems})</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:rotate-90 transition-transform duration-300">
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="flex gap-4 group">
                    {/* Foto Produk */}
                    <div className="w-24 h-32 bg-gray-100 shrink-0 overflow-hidden">
                      <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>

                    {/* Info Produk */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-sm font-bold text-charcoal leading-tight uppercase">{item.name}</h3>
                          <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-widest">
                            {item.selectedColor} | {item.selectedSize}
                          </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)} className="text-gray-300 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>

                      <div className="mt-auto flex justify-between items-center">
                        {/* Qty Control */}
                        <div className="flex items-center border border-gray-100 bg-gray-50">
                          <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, -1)} className="p-1.5 hover:bg-white transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, 1)} className="p-1.5 hover:bg-white transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-bold">{formatIDR(item.price * item.quantity)}</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                /* Empty State */
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                    <ShoppingBag size={32} className="text-gray-300" />
                  </div>
                  <h3 className="text-lg font-heading mb-2">Keranjangmu Kosong</h3>
                  <p className="text-gray-400 text-sm mb-8">Sepertinya kamu belum memilih koleksi Localux hari ini.</p>
                  <button onClick={onClose} className="px-8 py-3 bg-charcoal text-white text-xs font-bold uppercase tracking-widest hover:bg-accent transition-all">
                    Mulai Belanja
                  </button>
                </div>
              )}
            </div>

            {/* Footer / Checkout Section */}
            {cart.length > 0 && (
              <div className="p-6 border-t bg-gray-50">
                <div className="flex justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Subtotal</span>
                  <span className="text-lg font-bold text-charcoal">{formatIDR(totalPrice)}</span>
                </div>
                <p className="text-[10px] text-gray-400 mb-6 italic text-center">Pajak dan ongkos kirim akan dihitung saat checkout.</p>
                <button className="w-full bg-charcoal text-white py-4 font-bold tracking-[0.2em] uppercase text-xs hover:bg-accent transition-all duration-300 active:scale-[0.98]">Lanjut ke Pembayaran</button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default CartDrawer
