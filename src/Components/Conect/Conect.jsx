import React from 'react'
import "./Conect.css"
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import loca from '../../assets/location-icon.png'
const Conect = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData("access_key","7f9039cc-22fc-4bb9-ba06-8c58b86cac2f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='conect'>
        <div className="conect-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis inventore laudantium pariatur, repellat iure error et minima tenetur velit cum vero delectus corrupti quam?</p>
            <ul>
                <li><img src={mail} alt="" />Connect@pawan@gmail.com</li>
                <li><img src={phone} alt="" />Connect@pawan@gmail.com</li>
                <li><img src={loca} alt="" />77 Bholaram, Indore <br />Madhya Pradesh,India</li>
            </ul>
        </div>
        <div className="conect-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">Phone no</label>
                <input type="tel" name='phone' placeholder='enter mobile no' required />
                <label htmlFor="">write message</label>
                <textarea name="message" rows="6" required></textarea>
                <button className='btn dark-btn' type='submit'>Submin now</button>

            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Conect
