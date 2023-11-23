import logo from '../../Assets/currease logo 1.png'
import ButtonCustom from '../Button/ButtonCustom'
import btsymbol from '../../Assets/lock.png'
import './Header.css'
const Header = () => {
  return (
    <>
      <div className="header">
        <img src={logo} alt="" />
        <div className='list-items'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <ButtonCustom name='shop' textColor='white' bgColor='#0051A0' wt='70px' ht='35px' fn img={btsymbol} />
        </div>
      </div>
    </>
  )
}

export default Header
