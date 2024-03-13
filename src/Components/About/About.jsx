import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERCITY</h3>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non rerum consequuntur placeat provident, accusantium obcaecati reprehenderit sint laborum. Consectetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non rerum consequuntur placeat provident, accusantium obcaecati reprehenderit sint laborum. Consectetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur non rerum consequuntur placeat provident, accusantium obcaecati reprehenderit sint laborum. Consectetur?</p>
        </div>
      
    </div>
  )
}

export default About
