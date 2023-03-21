import React,{useEffect, useState} from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import axios from 'axios';

export default function WishList() {
  const [products , setProducts] = useState([])
  useEffect(()=>{
    let userData = JSON.parse(localStorage.getItem("userTractor"));
    const url = `https://tractor.onrender.com/wishlist/get/${userData.data.token}/${userData.data.email}`
    axios.get(url).then((res)=>{
      setProducts(res.data.data.product)
    }).catch((error)=>{
      console.log(error)
      if(error.response.status === 400){
        window.location.href = '/login'
      }
    })
  },[]) 

  function handleRemoveWishlist(e){
    const deleteItemId = e.target.getAttribute('item')
    console.log(deleteItemId)
  }

  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='main-wishlist-wrapper'>
        <h3>Wishlist</h3>
        <div className='wishlist-products-wrapper-main'>
            {
            products.map((item , index)=>{
              return (
              <div className='wishlist-product-wrapper' key={item._id}>
              <img src={item.image} alt={"img"} onClick={handleRemoveWishlist}></img>
              <div className='product-details'>
                <div className='item-name'>{item.name}</div>
                <div>{item.brand}</div>
                <div>{item.price}</div>
                  <button item={item._id}>Move to Kart</button>
                  <button  item={item._id} onClick={handleRemoveWishlist}>Remove from WishList</button>
              </div>
            </div>
              )
            })
          }
        </div>
      </div>
      <Footer/>
    </div>
  )
}
