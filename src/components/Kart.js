import React,{useEffect} from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import axios from 'axios'
export default function Kart() {
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
  return (
    <div>
      <Header/>
      <Navbar/>
      <Footer/>
    </div>
  )
}
