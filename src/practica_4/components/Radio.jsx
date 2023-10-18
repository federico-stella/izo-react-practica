import React from 'react'

function Radio({rad, setRad}) {
    const handleRad = (e,num) =>{
        if (rad === 0){
            setRad(num);
        }
        else setRad(num);
    }
  return (
    <div>
        <label>Entrada 1:</label>
        <input id='radio' type='radio' name='radio' onChange={e => handleRad(e,0)}></input>
        <label>0</label>
        <input id='radio' type='radio' name='radio' onChange={e => handleRad(e,1)}></input>
        <label>1</label>
    </div>
  )
} 

export default Radio