import React from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    id: 1,
    title: "Premium Collection",
    subtitle: "Polos & Motif Eksklusif",
    image: "/collections/premium/premium-1.png",
    hoverImage: "/collections/premium/premium-1-back.png",
    link: "/koleksi/premium",
  },
  {
    id: 2,
    title: "Standard Square",
    subtitle: "Kenyamanan Polos Harian",
    image: "/collections/standard/standard-1.png",
    hoverImage: "/collections/standard/standard-1-back.png",
    link: "/koleksi/standard",
  },
  {
    id: 3,
    title: "Pashmina Series",
    subtitle: "Elegansi Pashmina Polos",
    image: "/collections/pashmina/pashmina-1.png",
    hoverImage: "/collections/pashmina/pashmina-1-back.png",
    link: "/koleksi/pashmina",
  },
]

const SpecialCollection: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-16">
        <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-accent text-xs font-medium tracking-[0.3em] uppercase">
          Pilihan Terbaik
        </motion.span>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-3xl md:text-5xl font-heading font-bold text-charcoal mt-4">
          Koleksi Spesial Localux
        </motion.h2>
      </div>

      {/* Collection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {collections.map((item, index) => (
          <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="group relative cursor-pointer overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-3/4 overflow-hidden bg-primary">
              {/* 1. Main Image (Gambar Utama) */}
              <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-0" />

              {/* 2. Hover Image (Gambar Kedua yang muncul saat hover) */}
              <img src={item.hoverImage} alt={`${item.title} detail`} className="absolute inset-0 w-full h-full object-cover transition-all duration-700 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-110" />

              {/* Overlay halus untuk kesan premium */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/5" />
            </div>

            {/* Content Overlay */}
            <div className="mt-6 text-center">
              <h3 className="text-xl md:text-2xl font-heading font-bold text-charcoal">{item.title}</h3>
              <p className="text-gray-400 text-sm mt-2 mb-4 italic">{item.subtitle}</p>

              <div className="inline-flex items-center gap-2 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-charcoal group-hover:text-accent transition-colors">
                Shop Now
                <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            {/* Subtle Border Animasi (Luxury Touch) */}
            <div className="absolute inset-x-0 bottom-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left md:hidden lg:block" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default SpecialCollection
