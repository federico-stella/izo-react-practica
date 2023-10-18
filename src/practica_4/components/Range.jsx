import React from 'react'

function Range({rang, setRang}) {
  const handleRan = (e) => {
    setRang(e)
    console.log(rang)
  }
  return (
    <div>
        <label>Entrada 2:</label>
        <label> 0 </label>
        <input id='range' type='range' min={0} step={1} max={1} onChange={e =>handleRan(e.target.value)}></input>
        <label> 1 </label>
    </div>
  )
}

export default Range