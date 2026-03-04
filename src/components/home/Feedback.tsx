import { Star } from "lucide-react"
import { easeOut, motion } from "framer-motion"

const testimonials = [
  {
    name: "Lili Rahma Yani",
    product: "Localux Heritage Voal Series",
    comment: "Kualitas hijabnya luar biasa! Bahannya lembut dan jatuhnya sempurna. Sudah repeat order berkali-kali.",
    stars: 5,
  },
  {
    name: "Lili Sayangku",
    product: "Localux Soft Bloom Series",
    comment: "Packaging-nya cantik banget, cocok buat hadiah. Warna sesuai foto dan pengiriman cepat!",
    stars: 5,
  },
  {
    name: "Sayangku Lili",
    product: "Localux Rosewood Series",
    comment: "Bahan hijabnya adem dan nyaman. Tidak terlalu tebal, cocok banget untuk acara formal.",
    stars: 4,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
}

export default function Feedback() {
  return (
    <section className="py-24 bg-[#F9F6F2]">
      {" "}
      {/* Warna cream lembut sesuai screenshot */}
      <div className="container mx-auto px-6">
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-charcoal mb-4">Kata Mereka</h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={cardVariants} className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={16} fill={index < t.stars ? "#B59473" : "transparent"} className={index < t.stars ? "text-accent" : "text-gray-200"} />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed mb-6 text-sm">"{t.comment}"</p>

              <div className="mt-auto">
                <h4 className="font-bold text-charcoal text-base">{t.name}</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{t.product}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
