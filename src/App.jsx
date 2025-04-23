import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Header from './components/Header'
import ImageGallery from './components/Galery'
import AboutSection from './components/Sobrenos'
import LocationSection from './components/Location'
import ContactForm from './components/form'
import TableOfContents from './components/Sidebar'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ImageGallery />
      <AboutSection/>
      <LocationSection/>
      <ContactForm/>
      <TableOfContents/>
    </>
  )
}

export default App