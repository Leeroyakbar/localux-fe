import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero" // Impor komponen Hero baru

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />

      {/* HERO SECTION 
        Tidak perlu spacer khusus di sini karena kita mengatasinya 
        dengan margin-top (mt-[...]) di dalam komponen Hero.tsx.
      */}
      <Hero />

      {/* SECTION SELANJUTNYA */}
      <main className="p-8 md:p-16">
        <div className="h-[100vh]">
          <h2 className="text-3xl text-center font-heading text-charcoal">Section Berikutnya (Contoh: Produk Terbaru)</h2>
        </div>
      </main>
    </div>
  )
}

export default App
