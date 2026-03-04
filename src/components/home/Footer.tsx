import { Instagram, Twitter, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-charcoal text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-5">
            <h2 className="text-2xl font-heading font-bold mb-6 italic tracking-tight">Localux</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">Elegan dari Ujung ke Ujung. Hijab premium Indonesia dengan kualitas terbaik untuk muslimah modern.</p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-full flex items-center justify-center hover:bg-white hover:text-charcoal transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Spacer Kolom (Optional) untuk memberi jarak kosong jika ingin lebih renggang */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Navigasi / Informasi */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-200">Informasi</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cara Pemesanan
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          {/* Pembayaran */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gray-200 text-right md:text-left">Pembayaran</h4>
            <div className="flex flex-wrap gap-2 justify-end md:justify-start">
              {["BCA", "Mandiri", "GoPay", "OVO", "DANA", "COD"].map((pay) => (
                <span key={pay} className="px-3 py-1 border border-gray-800 text-[10px] font-bold tracking-widest text-gray-500 uppercase">
                  {pay}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">© {currentYear} Localux. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
