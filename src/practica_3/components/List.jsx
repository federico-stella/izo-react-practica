import React from 'react'
import BtnDelete from './BtnDelete';
import BtnEdit from './BtnEdit';

function List({items, setItems}) {

    const editarItem = (index) => {
        const editText = prompt("Editar texto: ", items[index])
        const newItems = [...items];
        newItems[index]= editText
        setItems(newItems)
    }
  return (
    <ul className="lista">
        {items.map( (item, i) => 
            (!isNaN(item)?
                <li key={i} className='listItem'>{Math.round(item)} {item % 2 === 0? " par " : " impar "} 
                    <div className="contBtn">
                        <BtnDelete items={items} setItems={setItems} i={i}></BtnDelete>
                        <BtnEdit items={items} setItems={setItems} i={i}></BtnEdit>
                    </div>
                </li>
                :
                <li key={i} className='listItem'>{item} 
                    <div className="contBtn">
                        <BtnDelete items={items} setItems={setItems} i={i}></BtnDelete>
                        <BtnEdit items={items} setItems={setItems} i={i}></BtnEdit>
                    </div>
                </li>
            )
        )}
    </ul>
  )
}

export default List