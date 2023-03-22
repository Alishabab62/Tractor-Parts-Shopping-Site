import React,{useEffect, useRef, useState} from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
import Input from './Input';
import Button from './Button';
import img from '../images/image1.jpg'
export default function Kart() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  useEffect(()=>{
    let userData = JSON.parse(localStorage.getItem("userTractor"));
    const url = `https://tractor.onrender.com/wishlist/get/${userData.data.token}/${userData.data.email}`
    axios.get(url).then((res)=>{
      console.log(res)
    }).catch((error)=>{
      console.log(error)
      if(error.response.status === 400){
        window.location.href = '/login'
      }
    })
  },[])
  function handleIncrement() {
    console.log(countRef.current)
    setCount(countRef.current.value + 1)
  }

  function handleDecrement() {
   console.log(countRef.current.value)
  }
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='kart-wrapper-main'>
      <div className='kart-product'>
          <div className='kart-product-wrapper'>
            <img src={img} alt={'img'}></img>
            <div className='product-details'>
              <div className='item-name'>250</div>
              <div>USHA</div>
              <div>200</div>
              <div className='kart-increment-decrement'>
                <Button title={'+'} fun={handleIncrement} ref1={countRef} value={0} />
                <p>{count}</p>
                <Button title={'-'} fun={handleDecrement} />
              </div>
              <button>Remove from WishList</button>
            </div>
          </div>
          <div className='kart-product-wrapper'>
            <img src={img} alt={'img'}></img>
            <div className='product-details'>
              <div className='item-name'>250</div>
              <div>USHA</div>
              <div>200</div>
              <div className='kart-increment-decrement'>
                <Button title={'+'} fun={handleIncrement} />
                <p>{count}</p>
                <Button title={'-'} fun={handleDecrement} />
              </div>
              <button>Remove from Kart</button>
            </div>
          </div>
        </div>

        <div className='kart-wrapper-details'>
          <h3 style={{textAlign:"center" , fontSize:"25px"}}>Kart Detail</h3>
          <div className='pin-code-wrapper'>
          <Input placeholder={"Enter Promo Code"}/>
          <Button title={"Submit"}/>
          </div>
          <div className='kart-total-price'>Total Price : 150</div>
          <div className='kart-discount-price'>You Saved : 200</div>
          <div className='kart-total-product'>Total Product : 5</div>
          <div className='kart-total-product'>Tax : 0</div>
          <div className='kart-total-product'>Shipping Charge : 0</div>
          <div className='kart-total-after-discount-price'>Total Amount : 120</div>
          <Button title={"Place Order "}/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
