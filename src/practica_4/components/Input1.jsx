import React from 'react'

function Input1({num,setNum}) {
    const changeInput = (e) => {
        const value = e;
        setNum(value === '0' ? 0 : 1);
    }
  return (
    <div>
                <label htmlFor="input1">Entrada 1: </label>
                <input 
                    id="input1"
                    type="number"
                    value={num}
                    onChange={e => changeInput(e.target.value)}
                />
    </div>
  )
}

export default Input1