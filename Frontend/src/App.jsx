import { useState } from 'react'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom';
import About from './components/About.jsx'
import Support from './components/Support.jsx'
import NewChat from './components/NewChat.jsx'
import { Chat } from './components/Chat.jsx'


function App() {
  

  return (
    <>
      <Router>
         <Navbar/>
         <Routes>
            <Route path ='/' element ={<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/support' element={<Support/>}/>
            <Route path='/newChat' element={<NewChat/>}/>
           
            
            
         </Routes>
      </Router>
      
    </>
  )
}

export default App
