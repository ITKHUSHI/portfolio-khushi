import  react from 'react'
import {HashRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar.jsx'
import './App.css'

function App() {
 
  return (
    <>  

   <Navbar/>
   
   <Outlet/>
       
    </>
  )
}

export default App
