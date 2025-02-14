
import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar.jsx'
import Footer from './components/Footer.jsx';
import './index.css'

function App() {
 
  return (
    <>  

   <Navbar/>
   <Outlet/>
   <Footer/>
       
    </>
  )
}

export default App
