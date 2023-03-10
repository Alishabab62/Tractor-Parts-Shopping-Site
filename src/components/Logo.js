import React from 'react'
import LogoHeader from '../images/Logo.png'
export default function Logo() {
  return (
    <div className='logo'>
      <img src={LogoHeader} alt='logo' style={{height:"100%" , width:"100%"}}></img>
    </div>
  )
}
