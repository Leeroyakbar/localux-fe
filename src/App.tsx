import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero" // Impor komponen Hero baru
import SpecialCollection from "./components/home/SpecialCollection"

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <SpecialCollection />

      {/* SECTION SELANJUTNYA */}
      <main className="p-8 md:p-16">
        <div className="h-screen">
          <h2 className="text-3xl text-center font-heading text-charcoal">Section Berikutnya (Detail per collection)</h2>
        </div>
      </main>
    </div>
  )
}

export default App
