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
import Faq from './components/Faq.jsx'
import Contact from './components/Contact.jsx'
import ReportIssue from './components/ReportIssue.jsx'
import Footer from './components/Footer.jsx'


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
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/report-issue' element={<ReportIssue/>}/>
         </Routes>
         <Footer/>
      </Router>
      
    </>
  )
}

export default App