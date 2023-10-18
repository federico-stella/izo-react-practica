import React from 'react'

function BtnDelete({items, setItems, i}) {
    const borrarItem = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    } 
  return (
    <button className="btnBorrar" onClick={() => { borrarItem(i) }}>Borrar</button>
  )
}

export default BtnDelete