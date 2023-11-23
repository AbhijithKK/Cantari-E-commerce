import React from 'react'
import logo from '../../Assets/currease logo 1.png'
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" />
        <div className='list-items'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            
        </div>
      </div>
    </>
  )
}

export default Header
