import React from 'react'

function LogicGates({valor1, valor2, funcion}){
    const handleSelect = (e) => {
        switch (e){
            case "or":
                if (valor1 == 1 || valor2 == 1){
                    funcion("1")
                }else funcion("0")
                break;
            case "and":
                if (valor1 == 1 && valor2 == 1){
                    funcion("1")
                }else funcion("0")
                break;
            case "nor":
                if (valor1 == 1 || valor2 == 1){
                    funcion("0")
                }else funcion("1")
                break;
            case "nand":
                if (valor1 == 1 && valor2 == 1){
                    funcion("0")
                }else funcion("1")
                break;
            case "xor":
                if (valor1 == valor2){
                    funcion("0")
                }else funcion("1")
                break;
            case "elige":
                funcion("Por favor elegir una compuerta válida")
            break;
        }
    }

  return (
        <div>
        <label htmlFor="selectGate">Compuerta lógica </label>
        <select 
            id="selectGate"
            onChange={e => handleSelect(e.target.value)}>
            <option value="elige">Elige una compuerta</option>
            <option value="or">Or</option>
            <option value="and">And</option>
            <option value="nor">Nor</option>
            <option value="nand">Nand</option>
            <option value="xor">Xor</option>
        </select>
    </div>
  )
}

export default LogicGates