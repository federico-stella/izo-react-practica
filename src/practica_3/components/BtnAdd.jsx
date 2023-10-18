import React from 'react'

function BtnAdd({item, setItems, items, setItem}) {
    const agregarItem = (e) => {
        if (!item && item != 0){
           return
        }
        setItems([...items,  item])
        setItem(undefined);
        e.target.previousSibling.value = ""
    }
  return (
    <button onClick={agregarItem} className="btnAgregar">Agregar</button>
  )
}

export default BtnAdd