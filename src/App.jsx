import './App.css'
import Homepage from './components/Homepage'
import OfferPage from './components/OfferPage'
import QoutePage from './components/QoutePage'
import CardsContainer from './components/CardsContainer'
import BussInfoPage from './components/BussInfoPage'
import TailBanner from './components/TailBanner'
import Footer from './components/Footer'
function App() {


  return (
    <div className='overflow-hidden'>
      <Homepage/>
      <OfferPage/>
      <QoutePage qoute="There are so many services out there but this service is one of its kind"/>
      <CardsContainer/>
      <BussInfoPage/>
      <TailBanner/>
      <Footer/>
    </div>
  )
}

export default App
