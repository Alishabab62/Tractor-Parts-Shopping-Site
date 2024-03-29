import React from 'react'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Filter from './Filter'
import Products from './Products'
 export default function Parts() {
  const [filter , setFilter] = React.useState(null)
  function handleProducts(data){
    setFilter(data)
  }
  return (
    <div>
      <Header/>
      <Navbar/>
      <div className='parts-main-wrapper'>
        <Filter fun={handleProducts}/>
        <Products filter={filter}/>
      </div>
      <Footer/>
    </div>
  )
}
