import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Filter from './Filter'
import Products from './Products'
 export default function Parts() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='parts-main-wrapper'>
        <Filter/>
        <Products/>
      </div>
      <Footer/>
    </div>
  )
}
