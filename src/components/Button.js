import React from 'react'

export default function Button(props) {
  return (
    <div>
     <button onClick={props.fun} ref={props.ref1} value={props.value}>{props.title}</button> 
    </div>
  )
}
