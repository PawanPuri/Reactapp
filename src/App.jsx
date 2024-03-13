import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Tetimonial/Testimonial'
import Conect from './Components/Conect/Conect'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What We offer'/>
        <Programs/> 
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIAL' title='What Student Says'/>
        <Testimonial/>
        <Title subtitle='Contect Us' title='Get in Touch'/>
        <Conect/>
        <Footer/>
      </div>
     
    </div>
  )
}

export default App
