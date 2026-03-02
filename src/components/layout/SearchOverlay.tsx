import { X, Search } from "lucide-react"

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-100 bg-white/80 backdrop-blur-xl flex flex-col animate-in fade-in duration-300">
      <div className="flex justify-end p-10">
        <button onClick={onClose} className="hover:rotate-90 transition-transform duration-300">
          <X size={32} strokeWidth={1} />
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-3xl flex items-center border-b-2 border-charcoal/20 py-4 focus-within:border-charcoal transition-colors">
          <Search size={28} className="text-gray-400" />
          <input autoFocus type="text" placeholder="Cari hijab impianmu..." className="w-full bg-transparent text-2xl md:text-4xl font-heading px-6 outline-none placeholder:text-gray-300" />
        </div>
        <p className="mt-6 text-gray-400 text-sm tracking-widest uppercase">Tekan ESC untuk menutup</p>
      </div>
    </div>
  )
}

export default SearchOverlay
