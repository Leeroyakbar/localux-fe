import Navbar from "./components/layout/Navbar"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Spacer agar konten tidak tertutup fixed navbar */}
      <main className="pt-32 p-8">
        <h2 className="text-3xl text-center font-heading">Selamat Datang di Localux</h2>
        <p className="text-center text-charcoal/60 mt-4">Projek e-commerce premium sedang dibangun...</p>

        {/* Placeholder untuk Section berikutnya */}
        <div className="h-[200vh]"></div>
      </main>
    </div>
  )
}

export default App
