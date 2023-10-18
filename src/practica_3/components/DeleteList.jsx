import React from 'react'

function DeleteList({setItems}) {
    const eliminarLista = () =>{
        setItems([]);
    }
    return (
    <button onClick={eliminarLista} className="btnEliminarLista">Elimiar lista</button>
  )
}

export default DeleteList