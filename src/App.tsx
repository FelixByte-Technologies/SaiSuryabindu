import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Subsidy from './components/Subsidy'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <Header />
      <Hero />
      <About />
      <Services />
      <Subsidy />
      <Process />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
