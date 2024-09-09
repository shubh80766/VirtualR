import React from 'react'
import Navbar from './components/Navbar'
import Herosec from './components/Herosec'
import FeatureSec from './components/FeatureSec'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      {/* hello */}
      <Navbar/> 
      <div className="max-w-6xl mx-auto pt-20 px-6">
        <Herosec />
        <FeatureSec/>
       <Workflow/>
       <Pricing/>
       <Testimonial/>
       <Footer/>
      </div>
      
      
    </div>
  )
}

export default App
