import React from 'react'
import About from './Routes/About'
import ContactUs from './Routes/ContactUs'
import Events from './Routes/Events'
import Home from './Routes/Home'
import Regions from './Routes/Regions'
import Sponsors from './Routes/Sponsors'
import {Routes,Route} from 'react-router-dom';

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Regions' element={<Regions />} />
      <Route path='/Events' element={<Events />} />
      <Route path='/Sponsors' element={<Sponsors />} />
      <Route path='/ContactUs' element={<ContactUs />} />
      <Route path='/About' element={<About />} />
    </Routes>
    </>
  )
}
