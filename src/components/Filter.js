import React from 'react'
import Input from './Input'
export default function Filter() {
    let [rangeValue , setRangeValue] = React.useState(0)
    function handlePrice(e){
        console.log(e.target.value)
        setRangeValue(e.target.value)
    }
    function handleCheck(e){
        console.log(e.target.value)
    }
  return (
    <div className='filter-main-wrapper'>
      <div className='filter-heading'>Filter</div>
      <div>
      <div><span>Price {rangeValue}</span><Input type={"range"} fun={handlePrice} min={"0"} max={"15000"} value={rangeValue} /></div>
      </div>
      <div className='filter-tractor-wrapper'>
        <span>Tractor</span>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Johndeer"}/> <span>Johndeer</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Mahindra"}/> <span>Mahindra</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Powertrack"}/> <span>Powertrack</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Sonalika"}/> <span>Sonalika</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Eicher"}/> <span>Eicher</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Swaraj"}/> <span>Swaraj</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Arjun"}/> <span>Arjun</span></div>
      <div><Input type={"checkbox"} fun={handleCheck}  value={"Messy"}/> <span>Messy</span></div>
      </div>
    </div>
  )
}
