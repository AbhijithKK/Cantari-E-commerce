import main from '../../Assets/about/Cantari Corp UI (Copy)(1)/Mask group.png'
import playbtn from '../../Assets/about/Cantari Corp UI (Copy)(1)/ply.png'
import vidimg from '../../Assets/about/Cantari Corp UI (Copy)(1)/vid.png'
import ButtonCustom from '../Button/ButtonCustom'
import Header from '../Header/Header'
import './About.css'
import btsymbol from '../../Assets/arrow.png'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='about-container'>
      <div className="about-header">
        <Header/>
      </div>
      <div className="about-main-conternt">
        <div className="about-main-left">
            
            <img src={main} alt="" />
        </div>
        <div className="about-main-right">
            <div className="about-head1">A Novel Product</div>
            <div className="about-head2">In The Food Market.</div>
            <p>As a retorted curry base gravy produced particularly by keeping the millennials in mind, “Currease”, unlike other instant alternatives to home-cooked food, ensure to deliver locally produced fresh ingredients and easy-to-follow recipes so that anyone can prepare a quality home-cooked dish that does not compromise on time and well-being.</p>
        </div>
      </div>
      <div className="button-about">
          <ButtonCustom name='Products' textColor='white' bgColor='#0051A0' wt='147px' ht='56px' fn img={btsymbol} />

          </div>
          <div className="product-video">
            <img src={vidimg} alt="" />
            <img src={playbtn} alt="" />
          </div>
          <div className="product-text">
            <p>All Currease products are manufactured using “retort” technology. Retorting is one of the major techniques used for the thermal processing of food products that are packed either in semi-rigid flexible laminates or in metal or alloy cans. The technology provides the advantage of processing and packing the food together; which makes it more commercially stable with safe and effective shelf life.</p>
          </div>
          <div className="about-footer">
            <Footer/>
          </div>
    </div>
  )
}

export default About
