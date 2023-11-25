import React from 'react'
import Header from '../Header/Header'
import './Contact.css'
import ButtonCustom from '../Button/ButtonCustom'
import btsymbol from '../../Assets/arrow.png'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <div className='contact-container'>
      <div className="contact-header">
        <Header/>
      </div>
      <div className="contact-box">
        <div className="c-box">
            <div>Cantari Corp India</div>
            <div>+91 95232 12121</div>
            <div>supportind@gmail.com</div>
        </div>
        <div className="c-box">
        <div>Cantari Corp UK</div>
        <div>+44 35232 8910</div>
            <div>supportuk@gmail.com</div>
        </div>
        <div className="c-box">
        <div>Cantari Corp USA</div>
        <div>+1 35232 1200</div>
            <div>supportusa@gmail.com</div>
        </div>
      </div>
      <div className="form-contact">
        <div className="c-f-text">
            Send us a message
        </div>
        <div className='inputbox-c'>
        <input type="text" placeholder='Your Name' />
        <input type="tel"  placeholder='Phone Number'/>
        <input type="email" placeholder='Email' />
        <input type="text" placeholder='Message' />
        </div>
        <div className="button-about" style={{
            marginTop:'15px'
        }}>
          <ButtonCustom name='Send Message' textColor='white' bgColor='#0051A0' wt='188px' ht='56px' fn img={btsymbol} />

          </div>
      </div>
      <div className="about-footer">
            <Footer/>
          </div>
    </div>
  )
}

export default Contact
