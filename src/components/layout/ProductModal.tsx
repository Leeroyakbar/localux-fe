import { X, Heart, Minus, Plus } from "lucide-react"
import { useState } from "react" // Hapus useEffect
import { formatIDR } from "../../utils/formatter"
import type { CartItem, Product } from "../home/Catalog"
import { motion } from "framer-motion"

interface ProductModalProps {
  product: Product | null
  isOpen: boolean
  onClose: () => void
  onAddToCart: (item: CartItem) => void
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  // 1. Inisialisasi state langsung dari props.
  // Karena 'key' di Catalog berganti, state ini otomatis ter-reset.
  const [qty, setQty] = useState(1)
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || "")
  const [selectedSize, setSelectedSize] = useState("M")

  // 2. HAPUS blok useEffect yang lama (baris 20-25)

  if (!product) return null

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative bg-white w-full max-w-5xl max-h-[90vh] overflow-y-auto flex flex-col md:flex-row shadow-2xl rounded-sm"
      >
        {/* Tombol Close */}
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 hover:rotate-90 transition-transform duration-300">
          <X size={24} />
        </button>

        {/* Gallery */}
        <div className="w-full md:w-1/2 p-6 md:p-10 bg-primary/20">
          <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} src={product.images[0]} className="w-full aspect-square object-cover shadow-lg" alt={product.name} />
          <div className="flex gap-4 mt-6">
            {product.images.map((img, i) => (
              <img key={i} src={img} className="w-20 h-20 object-cover cursor-pointer border-2 border-transparent hover:border-accent transition-all" alt={`${product.name} detail ${i}`} />
            ))}
          </div>
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col">
          {product.badge && <span className="bg-gray-100 px-3 py-1 text-[10px] font-bold tracking-widest uppercase mb-4 self-start">{product.badge}</span>}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">{product.name}</h2>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-charcoal">{formatIDR(product.price)}</span>
            {product.originalPrice && <span className="text-gray-400 line-through">{formatIDR(product.originalPrice)}</span>}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-8">{product.description}</p>

          {/* Color & Size Pickers */}
          <div className="space-y-6 mb-8">
            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">Warna: {selectedColor}</label>
              <div className="flex gap-3">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedColor(c)}
                    className={`px-4 py-2 text-xs border transition-all ${selectedColor === c ? "border-charcoal bg-charcoal text-white" : "border-gray-200 text-gray-500 hover:border-charcoal"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-3 block">Ukuran</label>
              <div className="flex gap-3">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSize(s)}
                    className={`w-10 h-10 flex items-center justify-center text-xs border transition-all ${selectedSize === s ? "border-charcoal bg-charcoal text-white" : "border-gray-200 hover:border-charcoal"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="mt-auto flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center border border-gray-200">
                <button onClick={() => setQty(Math.max(1, qty - 1))} className="p-3 hover:bg-gray-50">
                  <Minus size={16} />
                </button>
                <span className="w-12 text-center font-medium">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="p-3 hover:bg-gray-50">
                  <Plus size={16} />
                </button>
              </div>
              <span className="text-xs text-gray-400 italic">Stok: {product.stock} tersedia</span>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => {
                  onAddToCart({
                    ...product,
                    quantity: qty,
                    selectedColor,
                    selectedSize,
                  })
                  onClose()
                }}
                className="flex-1 bg-charcoal text-white py-4 uppercase text-xs font-bold tracking-widest hover:bg-accent transition-all duration-300 active:scale-[0.98]"
              >
                Tambah ke Keranjang
              </button>
              <button className="p-4 border border-gray-200 hover:bg-gray-50 transition-colors text-charcoal hover:text-red-500">
                <Heart size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
