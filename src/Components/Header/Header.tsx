import logo from '../../Assets/currease logo 1.png'
import ButtonCustom from '../Button/ButtonCustom'
import btsymbol from '../../Assets/lock.png'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom'
const Header = () => {
  const nav=useNavigate()
  const style={
    color:'black',
    textDecoration:"none"
    
  }
  const Navigating=()=>{
    nav('/shop')
  }
  return (
    <>
      <div className="header">
        <img src={logo} alt="" />
        <div className='list-items'>
        <Link to='/home' style={style} ><li>Home</li></Link>
        <Link to='/about' style={style} >   <li>About Us</li></Link>
        <Link to='/contact' style={style} >   <li>Contact Us</li></Link>
            <ButtonCustom name='shop' textColor='white' bgColor='#0051A0' wt='70px' ht='35px' fn={Navigating} img={btsymbol} />
        </div>
      </div>
    </>
  )
}

export default Header
