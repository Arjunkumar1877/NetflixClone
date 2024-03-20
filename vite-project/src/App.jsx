
import './App.css'
import Banner from './components/Banner/Banner'
import RowPost from './components/Rowpost/RowPost'
import Navbar from './components/navbar/Navbar'
// import axios from 'axios'

function App() {
  return (
    <>
    <Navbar/>
    <Banner />
    <RowPost title="Netflix Orginals" />
    <RowPost title="Action" isSmall />
  
    </>
  )
}

export default App
