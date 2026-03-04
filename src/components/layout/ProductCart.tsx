import { Heart, ShoppingBag } from "lucide-react"
import { formatIDR } from "../../utils/formatter"
import type { Product } from "../home/Catalog"
import { motion } from "framer-motion"

interface ProductCardProps {
  index: number
  // 1. Hilangkan '| null' di sini karena Card harus selalu punya data produk
  product: Product
  onOpenQuickView: (product: Product) => void
}

export default function ProductCard({ index, product, onOpenQuickView }: ProductCardProps) {
  // 2. Tambahkan pengecekan keamanan (Safety Check)
  if (!product) return null

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="group relative">
      {/* Badge */}
      {product.badge && <span className="absolute top-3 left-3 z-10 bg-accent text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest">{product.badge}</span>}

      {/* Wishlist Heart */}
      <button className="absolute top-3 right-3 z-10 text-charcoal/40 hover:text-red-500 transition-colors">
        <Heart size={20} strokeWidth={1.5} />
      </button>

      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-primary cursor-pointer" onClick={() => onOpenQuickView(product)}>
        {/* Gunakan Optional Chaining (?.) atau pastikan array images ada */}
        <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0" />
        <img
          src={product.images[1] || product.images[0]} // Fallback ke gambar pertama jika gambar ke-2 tidak ada
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover opacity-0 transition-all duration-700 scale-105 group-hover:opacity-100 group-hover:scale-110"
        />

        {/* Quick Add Button */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onOpenQuickView(product)
            }}
            className="w-full bg-white/90 backdrop-blur-sm text-charcoal py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all flex items-center justify-center gap-2"
          >
            <ShoppingBag size={14} /> Quick View
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-sm font-medium text-gray-400 uppercase tracking-wider">{product.subCategory}</h3>
        <h2 className="text-lg font-heading font-bold text-charcoal group-hover:text-accent transition-colors">{product.name}</h2>
        <div className="flex items-center gap-3">
          <span className="text-charcoal font-bold">{formatIDR(product.price)}</span>
          {product.originalPrice && <span className="text-gray-400 text-sm line-through">{formatIDR(product.originalPrice)}</span>}
        </div>
      </div>
    </motion.div>
  )
}
