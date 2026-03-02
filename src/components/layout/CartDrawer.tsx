import { X, ShoppingBag } from "lucide-react"

const CartDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className={`fixed inset-0 z-100 bg-black/20 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={onClose} />

      {/* Drawer Content */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-100 bg-white z-101 shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 flex items-center justify-between border-b">
            <div className="flex items-center gap-2">
              <ShoppingBag size={20} />
              <h2 className="text-lg font-heading font-bold">Keranjang Belanja</h2>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <X size={24} strokeWidth={1.5} />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center p-10 text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-6">
              <ShoppingBag size={32} className="text-accent" />
            </div>
            <h3 className="text-xl font-heading mb-2">Keranjangmu Kosong</h3>
            <p className="text-gray-400 text-sm mb-8">Sepertinya kamu belum memilih koleksi cantik kami hari ini.</p>
            <button onClick={onClose} className="w-full bg-charcoal text-white py-4 font-medium tracking-widest uppercase text-xs hover:bg-accent transition-colors">
              Mulai Belanja
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartDrawer
