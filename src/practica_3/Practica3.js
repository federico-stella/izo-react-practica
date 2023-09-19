import { useState } from "react";


export default function Practica3 ({ props }) { 
    const [arr, setArr] = useState([]);
    const onClickHandler = () => {
        // let newArr = [...arr];
        let nArr = [...arr, 'x'];
        setArr(nArr);
    }
    return (
        <div>
            <h3>Práctica 3</h3>
            <input type="text" />
            <button onClick={onClickHandler}>Agregar</button>
            { arr.map((item) => (
                <div>{item}</div>
            ))}
        </div>
    );
}