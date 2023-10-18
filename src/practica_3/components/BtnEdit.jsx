import React from 'react'

function BtnEdit({items, setItems, i}) {
    const editarItem = (index) => {
        const editText = prompt("Editar texto: ", items[index])
        const newItems = [...items];
        newItems[index]= editText
        setItems(newItems)
    }
  return (
    <button className="btnEditar" onClick={() => {editarItem(i)} }>Editar</button>
  )
}

export default BtnEdit