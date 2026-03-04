import Navbar from "./components/layout/Navbar"
import Hero from "./components/home/Hero" // Impor komponen Hero baru
import SpecialCollection from "./components/home/SpecialCollection"
import Catalog from "./components/home/Catalog"
import Feedback from "./components/home/Feedback"
import Footer from "./components/home/Footer"

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Navbar />
      <Hero />
      <SpecialCollection />
      <Catalog />
      <Feedback />
      <Footer />
    </div>
  )
}

export default App
