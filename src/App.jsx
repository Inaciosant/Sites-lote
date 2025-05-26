import { Routes, Route } from 'react-router'
import Home from './pages/HomeArl'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ImageGallery from './components/Galery'
import AboutSection from './components/Sobrenos'
import LocationSection from './components/Location'
import ContactForm from './components/form'
import TableOfContents from './components/Sidebar'
import ConstructionProgress from './components/statusdaobra'
import { Footer } from './components/Footer'
import BotaoVoltar from './components/Voltar'

function App() {
  return (
    <div className="overflow-x-hidden w-full">
      <BotaoVoltar />
      <Header />
      <ImageGallery />
      <AboutSection/>
      <LocationSection/>
      <ConstructionProgress/>
      <ContactForm/>
      <Footer/>
      <TableOfContents/>
    </div>
  )
}

export default App