import Header from '../Header/Header'
import './ShopHeader.css'
import blryellow from '../../Assets/blrYellow.png'
import blr1 from '../../Assets/blr1.png'
const ShopHeader = () => {
  return (
    <div className='shop-header'>
     <div className="sh-header">
        <Header />
      </div>
      <div style={{
        display:'flex',
        marginLeft:'40px'
        ,justifyContent:'space-around'
      }}>
        <img src={blr1} alt="" style={{
            height:'130px'
        }} />
        {/* 00000000000000000000000000000000000000000 */}
        <div>
        <div className="products-text" style={{
            marginTop:'0px'
        }}>
        <div className="proText1">
          <p>
            <span style={{ color: "#1a5797" }}>Products</span> Within
          </p>
        </div>
        <div className="proText2">
          <p>Your Province</p>
        </div>
      </div>
      <div className="inputbox">
        <select name="" id="">
          <option hidden value="">
            Select province
          </option>
          <option value="">option2</option>
          <option value="">option3</option>
        </select>
      </div>
      </div>
      {/* 0000000000000000000000000000000000000000 */}
      <img src={blryellow} alt=""style={{
            height:'280px'
        }} />
      </div>
    </div>
  )
}

export default ShopHeader
