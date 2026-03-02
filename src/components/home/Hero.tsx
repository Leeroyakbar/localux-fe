import React, { useState, useEffect } from "react"
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Data slide hero
const slides = [
  {
    id: 1,
    image: "../../../public/hero/hero-1.png", // Contoh gambar pashmina
    title: "Premium Hijab",
    description: "Kualitas Terbaik untuk Muslimah Modern",
    ctaText: "Belanja Sekarang",
  },
  {
    id: 2,
    image: "../../../public/hero/hero-2.png", // Contoh gambar segiempat
    title: "Koleksi Pashmina",
    description: "Sentuhan Lembut dan Mewah untuk Setiap Momen",
    ctaText: "Cek Koleksi",
  },
  {
    id: 3,
    image: "../../../public/hero/hero-3.png", // Contoh gambar instant
    title: "Motif Hijab",
    description: "Tampilkan Motif Hijabmu dengan Kualitas Terbaik",
    ctaText: "Shop Now",
  },
]

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  // Auto-slide effect (4 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
    }, 6000) // 4000ms = 4 detik

    return () => clearInterval(timer)
  }, [totalSlides])

  // Fungsi navigasi manual
  const nextSlide = () => setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))

  // Animasi varian untuk framer-motion (smooth fade)
  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: easeOut } },
    exit: { opacity: 0, transition: { duration: 0.6, ease: easeIn } },
  }

  const textVariants = {
    initial: { opacity: 0, y: 30 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.1, ease: easeOut },
    }),
  }

  return (
    <section className="relative h-screen overflow-hidden mt-28 md:mt-34">
      {" "}
      {/* Spacer untuk fixed navbar */}
      {/* 1. IMAGE SLIDER */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div key={currentSlide} className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slides[currentSlide].image})` }} variants={fadeVariants} initial="initial" animate="animate" exit="exit">
          {/* Subtle Gradient Overlay untuk keterbacaan teks */}
          <div className="absolute inset-0 bg-black/10 md:bg-transparent md:bg-linear-to-r md:from-black/10 md:to-transparent" />
        </motion.div>
      </AnimatePresence>
      {/* 2. OVERLAY TEXT & CTA */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex items-center">
        <div className="max-w-full md:max-w-2xl text-left">
          {/* Subheading */}
          <motion.p custom={1} variants={textVariants} initial="initial" animate="animate" className="text-xs md:text-sm font-medium text-gray-400 uppercase tracking-[0.2em] mb-3 md:mb-5">
            LOCALUX
          </motion.p>

          {/* Large Heading */}
          <motion.h2 key={`title-${currentSlide}`} custom={2} variants={textVariants} initial="initial" animate="animate" className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 md:mb-6 tracking-tighter">
            {slides[currentSlide].title}
          </motion.h2>

          {/* Description */}
          <motion.p key={`desc-${currentSlide}`} custom={3} variants={textVariants} initial="initial" animate="animate" className="text-sm md:text-lg text-white/90 mb-8 md:mb-10 max-w-lg font-normal leading-relaxed">
            {slides[currentSlide].description}
          </motion.p>

          {/* CTA Button */}
          <motion.div custom={4} variants={textVariants} initial="initial" animate="animate">
            <button className="bg-white text-charcoal py-3 md:py-4 px-8 md:px-10 text-[11px] md:text-xs font-medium tracking-[0.2em] uppercase hover:bg-accent hover:text-white transition-all duration-300 shadow-md">
              {slides[currentSlide].ctaText}
            </button>
          </motion.div>
        </div>
      </div>
      {/* 3. SLIDE INDICATORS (DOTS) */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-500 rounded-full ${
              index === currentSlide
                ? "w-6 h-1.5 bg-accent" // Active dot (long)
                : "w-1.5 h-1.5 bg-white/60 hover:bg-white" // Inactive dot
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      {/* 4. OPTIONAL: MANUAL NAVIGATION ARROWS (Hidden on mobile) */}
      <button onClick={prevSlide} className="hidden md:flex absolute top-1/2 left-6 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/20 hover:bg-white/40 rounded-full z-20 text-white transition-all group">
        <ChevronLeft size={24} strokeWidth={1.5} className="group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button onClick={nextSlide} className="hidden md:flex absolute top-1/2 right-6 -translate-y-1/2 w-10 h-10 items-center justify-center bg-white/20 hover:bg-white/40 rounded-full z-20 text-white transition-all group">
        <ChevronRight size={24} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
      </button>
    </section>
  )
}

export default Hero
