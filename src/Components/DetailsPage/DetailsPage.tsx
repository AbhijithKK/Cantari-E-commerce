import './DetailsPage.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import img2 from "../../Assets/p2.png";
import ButtonCustom from '../Button/ButtonCustom';
import btsymbol from '../../Assets/arrow.png'

const DetailsPage = () => {
  return (
    <>
      <div className="sh-header">
        <Header />
      <div className='pro-details'>
        <div className="pro-details-div1">
            <div className="prodetails-img-bg">
                <img src={img2} alt="" />
            </div>
        </div>
        <div className="pro-details-div2">
        <div className="newTad-details">
            <div>New</div>
          </div>
          <h2>Duck Roast Instant Curry Mix</h2>
          <p>Description:</p>
          <ul>
            <li>Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.</li>
            <li>Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.</li>
            <li>Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.</li>
            <li>Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.</li>
          </ul>
          <div className="sub-images-detailspage">
            <img src={img2} alt="" />
            <img src={img2} alt="" />
            <img src={img2} alt="" />
          </div>
            <p>Ingrendients:</p>
            <ul>
                <li>Nutrisi</li>
                <li>Vitamin E</li>
                <li>Protein</li>
            </ul>
          <div className="button-detailspage">
          <ButtonCustom name='Buy Now' textColor='white' bgColor='#0051A0' wt='147px' ht='56px' fn img={btsymbol} />

          </div>
        </div>

      </div>
      <Footer/>
      </div>
    </>
  )
}

export default DetailsPage