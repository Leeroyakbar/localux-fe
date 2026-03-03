import React, { useState, useEffect } from "react"
import { Search, ShoppingBag, User, Menu, X, ChevronRight } from "lucide-react"
import SearchOverlay from "./SearchOverlay"
import CartDrawer from "./CartDrawer"
import { useCart } from "../../hooks/useCart"
import { AnimatePresence, motion } from "framer-motion"

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { totalItems } = useCart()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Best Selling", href: "/best-selling" },
    { name: "Koleksi", href: "/koleksi" },
    { name: "Tentang Kami", href: "/about" },
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50">
        {/* 1. ANNOUNCEMENT BAR */}
        <div className="bg-accent text-white text-center py-2 text-[9px] md:text-xs font-medium tracking-[0.15em] uppercase px-4">FREE ONGKIR MIN. Rp150.000 ✨</div>

        {/* 2. MAIN NAVBAR */}
        <nav className={`px-5 md:px-12 flex items-center justify-between transition-all duration-500 ${isScrolled ? "bg-white/95 backdrop-blur-md py-3 shadow-sm" : "bg-white py-5 md:py-7"}`}>
          {/* LEFT: MOBILE MENU & LOGO */}
          <div className="flex-1 flex items-center gap-4">
            <button className="md:hidden text-charcoal p-1" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open Menu">
              <Menu size={24} strokeWidth={1.2} />
            </button>
            <h1 className="text-xl md:text-3xl font-heading font-bold text-charcoal tracking-tighter">Localux</h1>
          </div>

          {/* CENTER: DESKTOP NAV (Hidden on Mobile) */}
          <ul className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.name} className="relative group overflow-hidden">
                <a href={link.href} className="text-[13px] uppercase tracking-widest font-medium text-gray-400 group-hover:text-charcoal transition-all duration-300 py-1">
                  {link.name}
                </a>
                <span className="absolute bottom-0 left-0 w-0 h-px bg-charcoal transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT: ICONS */}
          <div className="flex-1 flex items-center justify-end gap-4 md:gap-6 text-charcoal">
            <button onClick={() => setIsSearchOpen(true)} className="p-1 hover:text-accent transition-colors">
              <Search size={20} strokeWidth={1.5} />
            </button>
            <button onClick={() => setIsCartOpen(true)} className="p-1 hover:text-accent transition-colors relative">
              <ShoppingBag size={20} strokeWidth={1.5} />
              <AnimatePresence mode="popLayout">
                {totalItems > 0 && (
                  <motion.span
                    key={totalItems} // Memicu animasi setiap kali angka berubah
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.5, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 25 }}
                    className="absolute -top-1 -right-1 bg-accent text-white text-[8px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm"
                  >
                    {totalItems}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
            <button className="hidden md:block p-1 hover:text-accent transition-colors">
              <User size={20} strokeWidth={1.5} />
            </button>
          </div>
        </nav>
      </header>

      {/* 3. MOBILE MENU DRAWER (Left Side) */}
      <div className={`fixed inset-0 z-110 bg-black/30 backdrop-blur-sm transition-opacity duration-500 md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => setIsMobileMenuOpen(false)} />

      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-white z-111 shadow-2xl transform transition-transform duration-500 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full bg-primary/20">
          <div className="p-6 flex justify-between items-center border-b border-charcoal/5 bg-white">
            <span className="font-heading font-bold text-xl tracking-tight">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
              <X size={24} strokeWidth={1.2} />
            </button>
          </div>

          <nav className="flex-1 px-6 py-8">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-lg font-medium text-charcoal flex items-center justify-between group">
                    {link.name}
                    <ChevronRight size={18} className="text-accent opacity-50 group-hover:translate-x-1 transition-transform" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 pt-12 border-t border-charcoal/5">
              <button className="flex items-center gap-4 text-charcoal/70 mb-6">
                <User size={20} strokeWidth={1.5} />
                <span className="text-sm font-medium">Akun Saya</span>
              </button>
            </div>
          </nav>

          <div className="p-6 text-[10px] text-gray-400 tracking-widest uppercase text-center border-t border-charcoal/5 bg-white">© 2026 Localux Indonesia</div>
        </div>
      </div>

      {/* OVERLAYS */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

export default Navbar
