
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/Rowpost/RowPost'
import { action, documentary, horror, orginals, romance } from './urls'
import Navbar from './components/navbar/Navbar'
// import axios from 'axios'

function App() {
  return (
    <>
    <Navbar/>
    <Banner />
    <RowPost url={orginals} title="Netflix Orginals" />
    <RowPost url={action} title="Action" isSmall />
    <RowPost url={horror} title="Action" isSmall />
    <RowPost url={romance} title="Action" isSmall />
    <RowPost url={documentary} title="Action" isSmall />
    
  
    </>
  )
}

export default App
