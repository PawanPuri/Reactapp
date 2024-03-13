import React from 'react'
import "./Hero.css"
import dark_arrow from  '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero contianer'>
      <div className="hero-text">
        <h1>consectetur adipisicing elit. Quasi, ipsum.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quae eveniet fugiat necessitatibus expedita alias autem placeat ullam quaerat. Error quasi velit reprehenderit corporis harum suscipit recusandae molestias repudiandae excepturi dolorum. Ratione commodi dignissimos dolores et temporibus eveniet, dolor officia!</p>
        <button className='btn'>Explore More <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
