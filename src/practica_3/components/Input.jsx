import React from 'react'

function Input({setItem}) {
  return (
    <input className="input" type="text" onChange={e => setItem(e.target.value)}></input>
  )
}

export default Input