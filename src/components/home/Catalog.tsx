import { useState } from "react"
import ProductCard from "../layout/ProductCart"
import ProductModal from "../layout/ProductModal"
import { useCart } from "../../hooks/useCart"
import { AnimatePresence, motion } from "framer-motion"

export interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  category: string
  subCategory: string
  badge?: string
  images: string[]
  colors: string[]
  sizes: string[]
  stock: number
  description: string
}

export interface CartItem extends Product {
  quantity: number
  selectedColor: string
  selectedSize: string
}

const catalogData = [
  {
    category: "Hijab Premium",
    description: "Koleksi motif dan polos dengan bahan eksklusif.",
    banner: "/collections/premium/premium-banner.png",
    products: [
      {
        id: 1,
        name: "Localux Heritage Voal Series",
        price: 100000,
        originalPrice: 150000,
        category: "Hijab Premium",
        subCategory: "Motif",
        badge: "SALE",
        images: ["/collections/premium/premium-1.png", "/collections/premium/premium-1-back.png"],
        colors: ["Cream", "Dusty Rose", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        stock: 25,
        description: "Premium hijab dengan tekstur lembut dan jatuh sempurna. Cocok untuk acara formal maupun sehari-hari.",
      },

      {
        id: 2,
        name: "Localux Soft Bloom Series",
        price: 100000,
        originalPrice: 150000,
        category: "Hijab Premium",
        subCategory: "Motif",
        badge: "SALE",
        images: ["/collections/premium/premium-2.png", "/collections/premium/premium-2-back.png"],
        colors: ["Cream", "Dusty Rose", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        stock: 25,
        description: "Premium hijab dengan tekstur lembut dan jatuh sempurna. Cocok untuk acara formal maupun sehari-hari.",
      },

      {
        id: 3,
        name: "Localux Rosewood Series",
        price: 100000,
        originalPrice: 150000,
        category: "Hijab Premium",
        subCategory: "Motif",
        badge: "SALE",
        images: ["/collections/premium/premium-3.png", "/collections/premium/premium-3-back.png"],
        colors: ["Cream", "Dusty Rose", "Sage"],
        sizes: ["S", "M", "L", "XL"],
        stock: 25,
        description: "Premium hijab dengan tekstur lembut dan jatuh sempurna. Cocok untuk acara formal maupun sehari-hari.",
      },
    ],
  },
  // ,
  // {
  //   category: "Hijab Standard Polos",
  //   banner: "/banners/standard-banner.jpg",
  //   products: [],
  // },
  // {
  //   category: "Hijab Pashmina",
  //   banner: "/banners/pashmina-banner.jpg",
  //   products: [],
  // },
]

export default function Catalog() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  return (
    <div className="bg-white">
      {catalogData.map((section) => (
        <motion.section key={section.category} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="pb-20">
          {/* Category Banner */}
          <div className="relative w-full bg-charcoal flex items-center justify-center overflow-hidden">
            {/* 1. Overlay tetap absolute untuk menutupi gambar */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* 2. Gambar TIDAK absolute agar container mengikuti tingginya */}
            <img
              src={section.banner}
              className="w-full h-auto block" // h-auto agar proporsional
              alt={section.category}
            />

            {/* 3. Konten Teks dibuat absolute agar melayang di tengah gambar */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 italic tracking-tight">{section.category} Localux</h2>
              <p className="text-white/80 tracking-[0.3em] uppercase text-xs">{section.description || "Koleksi Eksklusif"}</p>
            </div>
          </div>

          {/* Product Grid */}
          <div className="container mx-auto px-6 md:px-12 mt-16">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-10">
              {section.products.map((p) => (
                <ProductCard key={p.id} index={p.id} product={p} onOpenQuickView={setSelectedProduct} />
              ))}
            </div>
          </div>
        </motion.section>
      ))}

      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            key={selectedProduct.id} // INI KUNCINYA: Reset state otomatis
            isOpen={!!selectedProduct}
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
            onAddToCart={addToCart}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
