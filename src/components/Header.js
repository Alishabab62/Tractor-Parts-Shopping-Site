import React from 'react'
import Button from './Button'
import Logo from './Logo'

export default function Header() {
  return (
    <header>
      <Logo/>
      <div className='right-header'>
        <Button title={"Login"}/>
        <Button title={"Sign Up"}/>
      </div>
    </header>
  )
}
