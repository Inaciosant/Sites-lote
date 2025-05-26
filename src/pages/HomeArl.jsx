import AboutUs from "./Components/About"
import EmpreendimentoSection from "./Components/Empreendimentos"
import Footer from "./Components/Footer"
import Hero from "./Components/Hero"
import Localizacao from "./Components/Localização"
import  Navbar  from "./Components/Navbar"

const Home = () => {
    return (
        <div className="min-h-screen">
        <Navbar />
        <Hero/>
        <AboutUs/>
        <Localizacao/>
        <EmpreendimentoSection/>
        <Footer/>
        
        
        </div>
    )
    }
export default Home