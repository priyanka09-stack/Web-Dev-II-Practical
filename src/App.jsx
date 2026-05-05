import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

import React  from 'react'
import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Form from "./component/Form"

function App() {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Link to ="/">Home</Link>
        <Link to ="/about">About</Link>
        <Link to ="/contact" >Contact</Link>
        <Link to="/form">Form</Link>
      </nav>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path ="/about" element={<About/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path ="/form" element={<Form/>}/>
      </Routes>
      


      </BrowserRouter>
    </div>
  )
}

export default App