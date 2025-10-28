import './App.css'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Portfolio from './pages/Portfolio.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
