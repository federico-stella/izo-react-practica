import React from 'react'

function Checkbox({checked,setChecked}) {
    const handleChange = (e) => {
        if (checked == 0){
            setChecked(1)
        }
        else setChecked(0)
    }
  return (
    <div>
        <label>Entrada 2:
            <input 
                type="checkbox"
                onChange={e => handleChange(e)}
            />
        </label>
    </div>
  )
}

export default Checkbox