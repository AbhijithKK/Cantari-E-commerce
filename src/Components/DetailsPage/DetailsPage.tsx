import './DetailsPage.css'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ButtonCustom from '../Button/ButtonCustom';
import btsymbol from '../../Assets/arrow.png'
import {  useParams } from 'react-router-dom';
import { DetailsApi } from '../../Api/api';
import { useEffect, useState } from 'react';

const DetailsPage = () => {
   const {id}= useParams()
   const [detailss,setDetails]=useState<any>(null)
   const details=async()=>{
    const data=await DetailsApi(id)
    setDetails(data)
   }
   
    useEffect(()=>{
        details()
    },[])
    console.log(detailss);
    
  return (
    <>
      <div className="sh-header">
        <Header />
      <div className='pro-details'>
        <div className="pro-details-div1">
            <div className="prodetails-img-bg">
                <img src={detailss?.image} alt="" />
            </div>
        </div>
        <div className="pro-details-div2">
        <div className="newTad-details">
            <div>New</div>
          </div>
          <h2>{detailss?.title}</h2>
          <p>Description:</p>
          <ul>
            <li>Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.</li>
            <li>Mengandung antioksidan (vitamin E dan selenium) untuk sistem kekebalan tubuh yang sehat.</li>
            <li>Makanan yang lengkap dan seimbang, dengan 41 nutrisi penting.</li>
            <li>{detailss?.description}</li>
          </ul>
          <div className="sub-images-detailspage">
            <img src={detailss?.image} alt="" />
            <img src={detailss?.image} alt="" />
            <img src={detailss?.image} alt="" />
          </div>
            <p>Category:</p>
            <ul>
                <li>{detailss?.category}</li>
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
